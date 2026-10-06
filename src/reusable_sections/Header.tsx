"use client";

import React, { useState, useEffect } from "react";
import { Menu, ChevronRight } from "lucide-react";
import { Link } from "../components/common/link";
import { Button } from "../components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "../components/ui/drawer";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../components/ui/navigation-menu";
import { MenuProvider, useMenu, type MenuItem } from "../intergrations/wordpress/WordPressMenuProvider";
const fallbackLinks: MenuItem[] = [{
  id: "nav-journey",
  label: "Journey",
  href: "#journey"
}, {
  id: "nav-faculty",
  label: "Faculty",
  href: "#faculty"
}, {
  id: "nav-achievements",
  label: "Achievements",
  href: "#achievements"
}, {
  id: "nav-projects",
  label: "Projects",
  href: "#projects"
}, {
  id: "nav-memories",
  label: "Memories",
  href: "#memories"
}, {
  id: "nav-contact",
  label: "Contact",
  href: "#contact"
}];
function RecursiveSubmenu({
  items
}: {
  items: MenuItem[];
}) {
  return <ul className="grid min-w-50 gap-1 p-2 bg-card border border-border rounded-md shadow-lg">
      {items.map((child, idx) => <li key={child.id} data-index={idx}>
          <NavigationMenuLink asChild>
            <Link to={child.href || "#"} className="block select-none rounded-sm px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-accent/40 transition-colors">
              {child.label}
            </Link>
          </NavigationMenuLink>
          {child.children && child.children.length > 0 && <div className="pl-3 mt-1 border-l border-border/50">
              <RecursiveSubmenu items={child.children} />
            </div>}
        </li>)}
    </ul>;
}
function DesktopNavConsumer() {
  const {
    menuItems,
    loading
  } = useMenu();
  const items = menuItems && menuItems.length > 0 ? menuItems : fallbackLinks;
  if (loading) {
    return <div className="flex items-center gap-2">
        <div className="h-8 w-16 bg-muted/60 animate-pulse rounded-md" />
        <div className="h-8 w-16 bg-muted/60 animate-pulse rounded-md" />
        <div className="h-8 w-16 bg-muted/60 animate-pulse rounded-md" />
        <div className="h-8 w-16 bg-muted/60 animate-pulse rounded-md" />
      </div>;
  }
  return <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList className="gap-1 xl:gap-2">
        {items.map((item, i) => <NavigationMenuItem key={item.id} data-index={i}>
            {item.children && item.children.length > 0 ? <>
                <NavigationMenuTrigger className="bg-transparent text-foreground/80 hover:text-primary hover:bg-accent/30 text-sm font-medium transition-colors">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <RecursiveSubmenu items={item.children} />
                </NavigationMenuContent>
              </> : <NavigationMenuLink asChild>
                <Link to={item.href || "#"} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors inline-flex items-center rounded-md hover:bg-accent/20">
                  {item.label}
                </Link>
              </NavigationMenuLink>}
          </NavigationMenuItem>)}
      </NavigationMenuList>
    </NavigationMenu>;
}
function MobileNavRecursiveList({
  items,
  onNavigate
}: {
  items: MenuItem[];
  onNavigate: () => void;
}) {
  return <ul className="flex flex-col gap-2">
      {items.map((item, i) => <li key={item.id} data-index={i} className="flex flex-col">
          <Link to={item.href || "#"} onClick={onNavigate} className="flex items-center justify-between py-2 text-base font-medium text-foreground/90 hover:text-primary transition-colors border-b border-border/40">
            <span>{item.label}</span>
            {item.children && item.children.length > 0 ? <ChevronRight className="size-4 text-muted-foreground" /> : null}
          </Link>
          {item.children && item.children.length > 0 && <div className="pl-4 py-1 flex flex-col gap-1 border-l border-border/50 mt-1">
              <MobileNavRecursiveList items={item.children} onNavigate={onNavigate} />
            </div>}
        </li>)}
    </ul>;
}
function MobileNavConsumer({
  onNavigate
}: {
  onNavigate: () => void;
}) {
  const {
    menuItems,
    loading
  } = useMenu();
  const items = menuItems && menuItems.length > 0 ? menuItems : fallbackLinks;
  if (loading) {
    return <div className="flex flex-col gap-3 py-4">
        <div className="h-8 w-3/4 bg-muted/60 animate-pulse rounded-md" />
        <div className="h-8 w-1/2 bg-muted/60 animate-pulse rounded-md" />
        <div className="h-8 w-2/3 bg-muted/60 animate-pulse rounded-md" />
      </div>;
  }
  return <nav aria-label="Mobile Navigation" className="flex flex-col gap-2 py-4">
      <MobileNavRecursiveList items={items} onNavigate={onNavigate} />
    </nav>;
}
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (!href) return;
        if (href === "/#") {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
          return;
        }
        let hash = "";
        if (href.startsWith("#")) {
          hash = href;
        } else if (href.startsWith("/") && href.includes("#")) {
          const [path, hashPart] = href.split("#");
          if (hashPart === "") {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            return;
          }
          if (path === "/" || path === window.location.pathname) {
            hash = "#" + hashPart;
          }
        }
        if (hash && hash !== "#") {
          const element = document.querySelector(hash);
          if (element) {
            e.preventDefault();
            const headerOffset = 80;
            const top = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({
              top,
              behavior: "smooth"
            });
          }
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
  return <section id="header" data-nav="dark" className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-md" : "bg-background/80 backdrop-blur-sm border-b border-border/40"}`}>
      <div className="max-w-330 mx-auto px-5 md:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logotype Slot */}
        <div className="flex items-center shrink-0">
          <Link to="/" className="inline-flex items-center gap-3 text-sm font-bold tracking-wide text-foreground">
            <span className="flex size-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-primary">JL</span>
            <span className="hidden sm:inline">Jeyasingam Azrikam Libisanan</span>
          </Link>
        </div>

        {/* Center Navigation Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <MenuProvider menu_id="16">
            <DesktopNavConsumer />
          </MenuProvider>
        </div>

        {/* Action Button Slot & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex rounded-md border border-primary bg-primary text-primary-foreground font-medium px-5 py-2.5 transition-all hover:bg-transparent hover:text-primary hover:shadow-[0_0_20px_hsl(186_100%_50%/0.4)] active:scale-98 focus-visible:outline-2 focus-visible:outline-primary">
            <Link to="#journey">Explore My Journey</Link>
          </Button>

          {/* Mobile Drawer Navigation */}
          <div className="lg:hidden">
            <Drawer direction="right" open={mobileOpen} onOpenChange={setMobileOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-md border-border bg-muted/60 text-foreground hover:border-primary hover:text-primary transition-colors" aria-label="Open navigation menu">
                  <Menu className="size-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-6 h-full flex flex-col justify-between border-l border-border bg-background">
                <div>
                  <DrawerHeader className="p-0 pb-4 text-left border-b border-border/60">
                    <div className="flex items-center justify-between">
                      <Link to="/" onClick={() => setMobileOpen(false)} className="inline-flex items-center">
                        <span className="font-semibold text-foreground">Jeyasingam Azrikam Libisanan</span>
                      </Link>
                      <DrawerClose asChild>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          Close
                        </Button>
                      </DrawerClose>
                    </div>
                    <DrawerTitle className="sr-only">Site Navigation</DrawerTitle>
                  </DrawerHeader>

                  <MenuProvider menu_id="16">
                    <MobileNavConsumer onNavigate={() => setMobileOpen(false)} />
                  </MenuProvider>
                </div>

                <div className="pt-6 border-t border-border/60">
                  <Button asChild className="w-full rounded-md border border-primary bg-primary text-primary-foreground font-medium py-3 hover:bg-transparent hover:text-primary transition-all">
                    <Link to="#journey" onClick={() => setMobileOpen(false)}>
                      Explore My Journey
                    </Link>
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </section>;
}
