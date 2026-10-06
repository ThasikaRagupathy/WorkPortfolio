"use client";

import React, { useMemo } from "react";
import { ArrowLeft, ArrowRight, FileText, Search } from "lucide-react";
import { Link } from "../../../components/common/link";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { PostsProvider, usePosts } from "../../../intergrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "../../../intergrations/wordpress/wp_query";

function SearchConsumer({ searchTerm }: { searchTerm: string }) {
  const { posts, loading, error, refetch, hasNext, hasPrev, nextPage, prevPage, total, totalPages, query } = usePosts();

  const activeSearchTerm = useMemo(() => {
    if (typeof query?.s === "string" && query.s.trim().length > 0) {
      return query.s.trim();
    }
    return searchTerm;
  }, [query?.s, searchTerm]);

  return (
    <div className="flex flex-col gap-10">
      <header className="border-b border-border/80 pb-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-primary font-mono text-xs tracking-wider uppercase">
            <Search className="size-3.5 text-primary" />
            <span>Search Archive</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {activeSearchTerm ? (
              <>
                Results for <span className="text-primary">&ldquo;{activeSearchTerm}&rdquo;</span>
              </>
            ) : (
              "All Discovered Records"
            )}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base font-default">
            {loading ? "Scanning archive records..." : `Found ${total} matching ${total === 1 ? "entry" : "entries"}`}
          </p>
        </div>
      </header>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              data-index={i}
              className="h-72 rounded-lg border border-border bg-card/40 animate-pulse p-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-6 w-3/4 bg-muted rounded" />
                <div className="h-4 w-full bg-muted/70 rounded mt-4" />
                <div className="h-4 w-5/6 bg-muted/70 rounded" />
              </div>
              <div className="h-8 w-28 bg-muted rounded" />
            </div>
          ))}
        </div>
      )}

      {error && !loading && (
        <div className="rounded-lg border border-destructive/40 bg-card p-8 text-center flex flex-col items-center gap-4">
          <p className="text-destructive font-medium">Failed to retrieve search results.</p>
          <Button variant="outline" onClick={() => refetch()}>
            Try again
          </Button>
        </div>
      )}

      {!loading && !error && posts.length === 0 && (
        <div className="rounded-lg border border-border bg-card/60 p-12 text-center flex flex-col items-center justify-center gap-4 max-w-xl mx-auto my-8">
          <div className="size-12 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground">
            <Search className="size-6 text-muted-foreground" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-foreground">No matches found</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {activeSearchTerm ? (
              <>We couldn&apos;t locate any documentation or posts matching &ldquo;{activeSearchTerm}&rdquo;. Try another term or review the latest entries.</>
            ) : (
              "No published records found for this query."
            )}
          </p>
          <Button asChild variant="outline" className="mt-2">
            <Link to="/">Return to home</Link>
          </Button>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Card
                key={post.id}
                data-index={i}
                className="group relative overflow-hidden rounded-lg border border-border bg-card/70 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {post.featuredImage ? (
                    <div className="relative aspect-video w-full overflow-hidden border-b border-border/60 bg-muted">
                      <img
                        src={post.featuredImage}
                        alt={post.title || "Post thumbnail"}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-16/7 w-full border-b border-border/40 bg-muted/40 flex items-center px-6">
                      <FileText className="size-6 text-primary/70" />
                    </div>
                  )}

                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      {post.date && (
                        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      )}
                      <h2 className="font-serif text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
                        {post.link ? (
                          <Link to={post.link} className="hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                            {post.title}
                          </Link>
                        ) : (
                          post.title
                        )}
                      </h2>
                      {post.excerpt && (
                        <div
                          className="line-clamp-3 text-sm text-muted-foreground leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                      )}
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-2">
                  {post.link ? (
                    <Button asChild variant="outline" size="sm" className="w-full justify-between group/btn">
                      <Link to={post.link}>
                        <span>Read entry</span>
                        <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </Card>
            ))}
          </div>

          {(hasNext || hasPrev || totalPages > 1) && (
            <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => prevPage()}
                disabled={!hasPrev}
                className="gap-2"
              >
                <ArrowLeft className="size-4" />
                <span>Previous</span>
              </Button>

              <span className="font-mono text-xs text-muted-foreground">
                Page {query?.paged || 1} of {totalPages || 1}
              </span>

              <Button
                variant="outline"
                size="sm"
                onClick={() => nextPage()}
                disabled={!hasNext}
                className="gap-2"
              >
                <span>Next</span>
                <ArrowRight className="size-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function SearchResults() {
  const current_wp_query_params =
    typeof window !== "undefined" && window.wvcClient
      ? window.wvcClient.getCurrentWPQueryParams()
      : {};

  const wp_query = useMemo(
    () => new WP_Query(current_wp_query_params),
    [current_wp_query_params]
  );

  const initialSearch = typeof current_wp_query_params?.s === "string" ? current_wp_query_params.s : "";

  return (
    <section
      id="search-template-section"
      data-nav="dark"
      className="bg-background text-foreground py-20 md:py-28 min-h-[70vh]"
    >
      <div className="max-w-330 mx-auto px-5 md:px-8">
        <PostsProvider wp_query={wp_query}>
          <SearchConsumer searchTerm={initialSearch} />
        </PostsProvider>
      </div>
    </section>
  );
}
