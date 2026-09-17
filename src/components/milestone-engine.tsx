import { useState } from "react";
import { Sprout, PieChart, ShieldAlert, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PRESET_MILESTONES = [
  { mc: 50_000, label: "$50K", saplings: 5, status: "completed" },
  { mc: 100_000, label: "$100K", saplings: 10, status: "completed" },
  { mc: 250_000, label: "$250K", saplings: 25, status: "active" },
  { mc: 500_000, label: "$500K", saplings: 50, status: "upcoming" },
  { mc: 1_000_000, label: "$1M", saplings: 100, status: "upcoming" },
  { mc: 5_000_000, label: "$5M", saplings: 500, status: "upcoming" },
  { mc: 10_000_000, label: "$10M", saplings: 1000, status: "upcoming" },
];

export function MilestoneEngine() {
  const [currentCalcMc, setCurrentCalcMc] = useState<number>(500_000);
  const calculatedSaplings = Math.floor(currentCalcMc / 50_000) * 5;

  return (
    <section id="how-it-works" className="relative border-t border-border bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sprout className="size-3.5" />
              <span>Milestone-Driven Mechanism</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl">
              How It Works: <span className="text-primary">$50K = 5 Saplings</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Every step of onchain growth is permanently anchored to biological earth. We do not promise vague futures — every single $50,000 market-cap milestone unlocks a new verified cohort of saplings.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild variant="leaf" size="sm">
              <a href="#impact-map">
                View Target Lands
                <ArrowRight />
              </a>
            </Button>
          </div>
        </div>

        {/* The Big 50 = 5 Milestone Card (Directly reflecting Image 2) */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-xl">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:items-center">
            {/* Left formula display */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream">
                <Sparkles className="size-3.5" />
                <span>Core Milestone Formula</span>
              </div>

              <div className="mt-6 flex flex-col items-start gap-1">
                <span className="font-display text-5xl font-extrabold tracking-tight text-fg sm:text-6xl md:text-7xl">
                  $50K
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  New Market-Cap Milestone
                </span>
                <span className="my-2 font-display text-3xl font-light text-cream/70 sm:text-4xl">
                  =
                </span>
                <span className="font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl">
                  5 SAPLINGS
                </span>
              </div>

              <p className="mt-6 text-base leading-relaxed text-muted">
                5 more saplings for every new $50K market-cap milestone. Each milestone counts once upon being reached, triggering an automatic allocation to our verified forestry partners.
              </p>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  Irreversible milestones
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  Geo-tagged trees
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg">
                  <CheckCircle2 className="size-3.5 text-primary" />
                  Community validated
                </span>
              </div>
            </div>

            {/* Right: Milestone Visualizer & Plant Photo Graphic */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-bg p-6 sm:p-8 lg:col-span-6">
              <div className="relative mb-6 size-48 overflow-hidden rounded-2xl ring-1 ring-primary/25 sm:size-56">
                <img
                  src="/brand/mascot.jpg"
                  alt="Sprout sapling in rich soil"
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 inset-x-2.5 rounded-lg bg-bg/80 px-3 py-1.5 text-center text-xs font-medium text-cream backdrop-blur-md">
                  Living saplings planted in native biomes
                </div>
              </div>

              {/* Interactive MC Milestone Calculator */}
              <div className="w-full rounded-xl bg-surface-2 p-5">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="font-medium uppercase tracking-[0.14em]">Simulate Market Cap</span>
                  <span className="font-display font-semibold text-fg text-sm">${(currentCalcMc / 1_000).toLocaleString()}K</span>
                </div>
                <input
                  type="range"
                  min={50_000}
                  max={5_000_000}
                  step={50_000}
                  value={currentCalcMc}
                  onChange={(e) => setCurrentCalcMc(Number(e.target.value))}
                  aria-label="Simulate market cap milestones"
                  className="mt-3 w-full accent-primary cursor-pointer"
                />
                <div className="mt-4 flex items-center justify-between rounded-lg bg-bg px-4 py-3 border border-border/60">
                  <span className="text-xs text-muted">Yields offline:</span>
                  <span className="font-display text-lg font-bold text-primary tabular-nums">
                    {calculatedSaplings.toLocaleString()} Verified Saplings
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Preset Milestones Rail */}
          <div className="border-t border-border bg-surface-2/40 px-6 py-4 sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted mb-3">
              Milestone Progressions
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {PRESET_MILESTONES.map((m) => (
                <button
                  type="button"
                  key={m.mc}
                  onClick={() => setCurrentCalcMc(m.mc)}
                  className={`flex flex-col rounded-lg p-2.5 text-left transition-all border ${
                    currentCalcMc === m.mc
                      ? "border-primary bg-primary/10 text-fg"
                      : "border-border bg-bg/60 text-muted hover:border-primary/40 hover:text-fg"
                  }`}
                >
                  <span className="font-display text-sm font-semibold">{m.label}</span>
                  <span className="text-xs text-primary font-medium">+{m.saplings} trees</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 50 / 50 Rewards Split Note (Explicitly requested by user) */}
        <div className="mt-12 rounded-3xl border border-primary/30 bg-surface p-7 sm:p-10 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
              <PieChart className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-fg sm:text-2xl">
                Exact Breakdown: How Token Rewards Are Used
              </h3>
              <p className="text-xs text-muted sm:text-sm">
                Complete transparency for all generated fees and community rewards.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* 50% Growth & Promotion */}
            <div className="rounded-2xl border border-cream/30 bg-bg p-6 relative overflow-hidden">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-extrabold text-cream sm:text-4xl">50%</span>
                <span className="rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream">
                  Growth & Promotion
                </span>
              </div>
              <h4 className="mt-4 font-display text-lg font-medium text-fg">
                Scaling Community, Narrative & Liquidity
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                50% of the rewards will go directly toward growing and promoting the project. This covers global marketing campaigns, viral creator bounties, community incentives, exchange integrations, and spreading the eco-crypto narrative to onboard millions of new holders into the mission.
              </p>
            </div>

            {/* 50% Environmental Initiatives & Planting */}
            <div className="rounded-2xl border border-primary/40 bg-bg p-6 relative overflow-hidden">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-3xl font-extrabold text-primary sm:text-4xl">50%</span>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Eco & Reforestation
                </span>
              </div>
              <h4 className="mt-4 font-display text-lg font-medium text-fg">
                Environmental Initiatives & Offline Planting
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The other 50% of the rewards will go directly toward verified environmental initiatives, acquiring native tree saplings, paying fair living wages to local community planters on the ground, securing planting land, and funding satellite verification.
              </p>
            </div>
          </div>

          {/* Team Allocation Notice (Explicitly requested by user) */}
          <div className="mt-8 rounded-2xl border border-border bg-surface-2 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cream/15 text-cream">
                <ShieldAlert className="size-5" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-display text-base font-semibold text-fg">
                  Team Allocation & Separation of Funds
                </h4>
                <p className="text-sm leading-relaxed text-muted">
                  Since our team’s allocation will only be <strong className="text-fg font-medium">1–2% of the total token supply</strong> and will be managed and vested separately, <strong className="text-fg font-medium">we do not count it as part of the project funds</strong>. 
                </p>
                <p className="text-xs leading-relaxed text-muted/90">
                  Every dollar in the 50/50 reward split is strictly reserved for ecosystem expansion and real sapling purchases. We do not extract founder salaries or administrative cuts from planting capital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
