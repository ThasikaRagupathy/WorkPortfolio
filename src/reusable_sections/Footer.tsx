import * as React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Link } from "../components/common/link";
import { Button } from "../components/ui/button";
import { MenuProvider, useMenu, type MenuItem } from "../intergrations/wordpress/WordPressMenuProvider";

function RecursiveFooterMenu({ items, depth = 0 }: { items: MenuItem[]; depth?: number }) {
  if (!items || items.length === 0) return null;

  return (
    <ul className={depth === 0 ? "flex flex-wrap items-center gap-x-8 gap-y-3" : "mt-2 space-y-2 border-l border-border/60 pl-3"}>
      {items.map((item, index) => {
        const hasChildren = Boolean(item.children && item.children.length > 0);
        return (
          <li key={item.id || `menu-item-${index}`} data-index={index} className="relative">
            <Link
              to={item.href || "#"}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
            {hasChildren && item.children && (
              <RecursiveFooterMenu items={item.children} depth={depth + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

function FooterNavigationConsumer() {
  const { menuItems, loading } = useMenu();

  if (loading) {
    return (
      <div className="flex flex-wrap gap-4">
        <div className="h-5 w-16 animate-pulse rounded bg-muted" />
        <div className="h-5 w-20 animate-pulse rounded bg-muted" />
        <div className="h-5 w-16 animate-pulse rounded bg-muted" />
      </div>
    );
  }

  if (menuItems && menuItems.length > 0) {
    return <RecursiveFooterMenu items={menuItems} />;
  }

  const fallbackLinks = [
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
      {fallbackLinks.map((item, index) => (
        <li key={item.href} data-index={index}>
          <Link
            to={item.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      data-nav="dark"
      className="relative border-t border-border bg-background text-foreground"
    >
      <div className="mx-auto max-w-330 px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        {/* Main Header / Credential Band */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Jeyasingam Azrikam Libisanan
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
              BICT (Hons) in Information &amp; Communication Technology — Faculty of Technological Studies, University of Vavuniya
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 lg:items-end">
            <nav aria-label="Footer Quick Navigation" className="w-full lg:flex lg:justify-end">
              <MenuProvider menu_id="17">
                <FooterNavigationConsumer />
              </MenuProvider>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="default" size="sm" className="gap-2">
                <Link to="#projects">
                  <ArrowUpRight className="size-4" />
                  <span>View Projects</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Separator hairline */}
        <div className="my-10 h-px w-full bg-border/60 sm:my-12" />

        {/* Closing Metadata and Legal Strip */}
        <div className="flex flex-col gap-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <a href="#contact" className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary hover:underline">
            <Mail className="size-4 text-primary" />
            Let’s connect
          </a>

          <p className="tracking-wide">
            &copy; {currentYear} Jeyasingam Azrikam Libisanan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
