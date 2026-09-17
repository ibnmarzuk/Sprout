import { Globe, ShieldCheck, TreePine, Sparkles, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DigitalToOffline() {
  return (
    <section id="mission-real" className="relative border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Eyebrow and Main Title */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-primary">
            <TreePine className="size-3.5" />
            <span>Grow Online. Plant Offline.</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl">
            More trees. <span className="text-cream">A brighter tomorrow.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-fg font-semibold">SPROUT</strong> is a community-driven initiative that connects the digital crypto world with real-world reforestation. We believe that together, we can turn online momentum and token activity into a healthier, greener planet for future generations.
          </p>
        </div>

        {/* Highlighting the Core Distinction */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Card 1: Not Just Digital Trees */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg p-7 sm:p-9 shadow-sm transition-all hover:border-primary/40">
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <TreePine className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-medium text-fg">
              Real-world dirt, not just pixels on screen
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              This isn’t about growing simulated trees on a dashboard or trading virtual forests. We use onchain participation, decentralized community coordination, and viral meme culture to trigger <strong className="text-fg font-medium">tangible physical saplings</strong> planted directly into living soil across degraded biomes worldwide.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-primary">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span>Verified offline planting with geo-tagged coordinates</span>
            </div>
          </div>

          {/* Card 2: Connecting Crypto with Sustainability */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg p-7 sm:p-9 shadow-sm transition-all hover:border-cream/40">
            <div className="flex size-12 items-center justify-center rounded-xl bg-cream/15 text-cream">
              <RefreshCw className="size-6" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-medium text-fg">
              Token velocity funding nature — not a charity middleman
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              We are not a traditional company collecting donations or taking overhead cuts. SPROUT directly bridges <strong className="text-fg font-medium">crypto liquidity with global sustainability</strong>: automated trading rewards and community milestones power reforestation initiatives, turning decentralized financial energy into a self-sustaining ecological engine.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-cream">
              <Sparkles className="size-3.5" />
              <span>Token rewards fund planting + growth 50/50</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars from Brand Spec */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <TreePine className="size-5" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-fg">REAL IMPACT</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Trees planted in real, monitored geographical locations by local conservationists.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-cream/20 text-cream">
              <Globe className="size-5" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-fg">GLOBAL REACH</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                A greener planet together across 15+ countries, from the Amazon to the Sahel.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h4 className="font-display text-base font-semibold text-fg">TRANSPARENT</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Verified onchain receipts, drone footage, and verifiable sapling documentation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Map & How it Works */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <div className="flex items-center gap-4">
            <div className="size-12 overflow-hidden rounded-full ring-2 ring-primary/40">
              <img src="/brand/avatar.jpg" alt="Sprout" className="size-full object-cover" />
            </div>
            <div>
              <p className="font-display text-base font-medium text-fg">See where every sapling is rooted</p>
              <p className="text-xs text-muted">Check out our interactive satellite planting map and verified counts</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Button asChild variant="leaf" size="sm">
              <a href="#how-it-works">
                How It Works ($50K = 5)
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href="#impact-map">
                View Global Map
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
