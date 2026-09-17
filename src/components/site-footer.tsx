import { SproutMark } from "@/components/sprout-mark";
import { X_HANDLE, X_URL } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#020d08] text-fg">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3 text-fg">
              <SproutMark size="md" />
              <span className="font-display text-xl font-bold tracking-tight">SPROUT</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Connecting crypto with sustainability. Turning onchain momentum into verified real-world reforestation. Grow online, plant offline.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>12,560 trees planted across 15 countries</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:col-span-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
                Initiative
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a href="#mission-real" className="hover:text-fg transition-colors">
                    Real Impact
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-fg transition-colors">
                    How It Works ($50K = 5)
                  </a>
                </li>
                <li>
                  <a href="#impact-map" className="hover:text-fg transition-colors">
                    Global Impact Map
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cream">
                Community
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a href="#grove" className="hover:text-fg transition-colors">
                    The Grove
                  </a>
                </li>
                <li>
                  <a href="#poll" className="hover:text-fg transition-colors">
                    Vote Next Land
                  </a>
                </li>
                <li>
                  <a href={X_URL} target="_blank" rel="noreferrer" className="hover:text-fg transition-colors">
                    {X_HANDLE} on X
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs text-muted md:col-span-3 md:text-right">
            <p className="text-[11px] text-muted/70">
              © {new Date().getFullYear()} SPROUT Onchain Initiative. Verified offline impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

