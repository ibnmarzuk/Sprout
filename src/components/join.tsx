import { ArrowUpRight } from "lucide-react";
import { GroveName } from "@/components/grove";
import { Button } from "@/components/ui/button";
import { regionLabel, X_HANDLE, X_URL } from "@/lib/content";
import { useGrove, useHydratedFlag } from "@/lib/grove-store";

export function Join() {
  const hydrated = useHydratedFlag();
  const plants = useGrove((s) => s.plants.length);
  const vote = useGrove((s) => s.vote);
  const gardener = useGrove((s) => s.gardener);

  const shownPlants = hydrated ? plants : 0;
  const shownVote = hydrated ? vote : null;
  const shownName = hydrated ? gardener : "";
  const ready = shownPlants > 0 && Boolean(shownVote);

  return (
    <section id="join" className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            If you see it now
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
            You are early. Follow the growth.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Name your grove. Plant. Vote the next land. Then hold the line on X
            while the contract, the treasury, and the first planting are cooked
            in public.
          </p>
          <div className="mt-8 max-w-md">
            <GroveName />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={X_URL} target="_blank" rel="noreferrer">
                Follow {X_HANDLE}
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#grove">Return to the grove</a>
            </Button>
          </div>
        </div>
        <div className="rounded-3xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
            Your roots
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Grove</dt>
              <dd className="mt-1 font-display text-2xl text-fg">
                {shownName || "Unnamed"}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">Planted</dt>
              <dd className="mt-1 font-display text-2xl tabular-nums text-fg">
                {shownPlants}
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="text-xs uppercase tracking-[0.16em] text-muted">
                Next land
              </dt>
              <dd className="mt-1 font-display text-2xl text-fg">
                {regionLabel(shownVote)}
              </dd>
            </div>
          </dl>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {ready
              ? "You did the three early things: a name, a sprout, a vote. That is enough to be counted."
              : "Plant at least one sprout and cast a vote. That is the whole onboarding."}
          </p>
        </div>
      </div>
    </section>
  );
}
