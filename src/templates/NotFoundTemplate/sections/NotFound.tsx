"use client";

import React from "react";
import { Search, ArrowLeft } from "lucide-react";
import { Link } from "../../../components/common/link";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

declare const WVC: { homeUrl: string };
export default function NotFound() {
  const homeAction = typeof WVC !== "undefined" && WVC.homeUrl ? WVC.homeUrl : "/";

  return (
    <section
      id="not-found-template-section"
      data-nav="dark"
      className="relative flex min-h-[75vh] items-center justify-center bg-background px-4 py-20 text-foreground md:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-lg border border-border bg-card/70 p-8 shadow-2xl backdrop-blur-md sm:p-12">
          {/* Subtle cyan telemetry indicator line */}
          <div
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-sm uppercase tracking-widest text-primary">
              Error 404
            </span>

            <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Page not found
            </h1>

            <p className="mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
              The page you are looking for doesn't exist, was relocated, or is no longer accessible.
            </p>

            {/* Native WordPress Search Form */}
            <form
              method="get"
              action={homeAction}
              className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
            >
              {typeof wvcClient !== "undefined" &&
                typeof wvcClient.isShop === "function" &&
                wvcClient.isShop() && (
                  <input type="hidden" name="post_type" value="product" />
                )}

              <div className="relative flex-1">
                <Input
                  type="search"
                  name="s"
                  placeholder="Search articles, projects, logs..."
                  required
                  className="h-11 w-full rounded-md border-border bg-muted/50 px-4 text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/20"
                />
              </div>

              <Button
                type="submit"
                className="h-11 rounded-md border border-primary bg-primary px-6 font-medium text-primary-foreground shadow-xs transition-colors hover:bg-transparent hover:text-primary"
              >
                <Search className="size-4" />
                <span>Search</span>
              </Button>
            </form>

            {/* Home Link */}
            <div className="mt-8 pt-6 border-t border-border w-full flex justify-center">
              <Button
                variant="outline"
                asChild
                className="rounded-md border-border bg-muted text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Link to="/">
                  <ArrowLeft className="size-4" />
                  <span>Back to homepage</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
