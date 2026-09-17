import { MapPin, TreePine, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92dvh] items-end overflow-hidden pb-16 pt-32 sm:min-h-dvh sm:pb-24 sm:pt-40"
    >
      <img
        src="/brand/hero.jpg"
        alt="A small clay sprout mascot standing in a misty forest clearing at dawn"
        className="absolute inset-0 size-full object-cover object-[center_65%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-bg/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg/90 via-bg/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          {/* Mascot Brand Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-bg/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(109,179,90,0.2)]">
            <div className="size-6 overflow-hidden rounded-full ring-1 ring-primary">
              <img src="/brand/avatar.jpg" alt="Sprout" className="size-full object-cover scale-110" />
            </div>
            <span className="text-xs font-semibold tracking-wider text-fg uppercase">
              Onchain Eco-Native Brand
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="flex items-center gap-1 text-xs text-primary font-medium">
              <TreePine className="size-3.5" />
              12,560 Trees Planted
            </span>
          </div>

          <h1 className="mt-6 font-display text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl">
            Most projects launch a token.
            <span className="mt-2 block text-cream">We grow a narrative.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            <strong className="text-fg font-medium">SPROUT</strong> connects crypto with sustainability. We don’t just grow trees online on a screen — we harness onchain token activity and market milestones to plant real, living saplings in offline soils around the planet.
          </p>

          {/* Quick metric highlights */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted">
            <div className="flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm">
              <Sparkles className="size-3.5 text-primary" />
              <span className="font-semibold text-fg">$50K MC = 5 Saplings</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm">
              <TreePine className="size-3.5 text-cream" />
              <span>50/50 Rewards Breakdown</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm">
              <MapPin className="size-3.5 text-primary" />
              <span>15 Countries Seeded</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="lg" variant="cream">
              <a href="#impact-map">
                <MapPin className="size-4" />
                Explore Global Map
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
