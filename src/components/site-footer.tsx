import { SproutMark } from "@/components/sprout-mark";
import { X_HANDLE, X_URL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#top" className="inline-flex items-center gap-2 text-fg">
            <SproutMark />
            <span className="font-display text-lg font-medium">SPROUT</span>
          </a>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            An onchain eco-native brand. Grow online. Plant offline.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            className="text-fg transition-colors duration-150 hover:text-cream"
          >
            {X_HANDLE}
          </a>
          <p>No contract yet. Do not trust a CA from DMs.</p>
        </div>
      </div>
    </footer>
  );
}
