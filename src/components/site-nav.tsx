import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SproutMark } from "@/components/sprout-mark";
import { Button } from "@/components/ui/button";
import { X_HANDLE, X_URL } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { href: "#grove", label: "Grove" },
  { href: "#mission", label: "Mission" },
  { href: "#poll", label: "Where to green" },
  { href: "#join", label: "Early" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled || open
          ? "bg-bg/92 shadow-[0_1px_0_0_rgba(232,239,228,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-fg">
          <SproutMark />
          <span className="font-display text-lg font-medium tracking-tight">SPROUT</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a href={X_URL} target="_blank" rel="noreferrer">
              {X_HANDLE}
            </a>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open ? (
        <div className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base text-fg"
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 w-full">
              <a href={X_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Follow {X_HANDLE}
              </a>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
