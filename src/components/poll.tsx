import { regions, type RegionId } from "@/lib/content";
import { useGrove, useHydratedFlag } from "@/lib/grove-store";
import { cn } from "@/lib/utils";

export function Poll() {
  const hydrated = useHydratedFlag();
  const vote = useGrove((s) => s.vote);
  const setVote = useGrove((s) => s.setVote);
  const shownVote = hydrated ? vote : null;

  const counts = Object.fromEntries(
    regions.map((r) => [r.id, r.base + (shownVote === r.id ? 1 : 0)]),
  ) as Record<RegionId, number>;
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <section id="poll" className="border-t border-border bg-bg/50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl rounded-2xl border border-border/80 bg-surface/75 p-5 shadow-sm backdrop-blur-sm sm:rounded-3xl sm:p-7 md:p-8">
        <div className="flex flex-col gap-2 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                Community Ballot
              </span>
              <span className="text-xs text-muted">
                {total} votes recorded
              </span>
            </div>
            <h2 className="mt-2 font-display text-xl font-bold text-fg sm:text-2xl">
              Where should SPROUT green next?
            </h2>
            <p className="mt-1 text-xs text-muted sm:text-sm">
              One vote per grove. The winning region will be surveyed first for our next planting cohort.
            </p>
          </div>
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {regions.map((r, idx) => {
            const n = counts[r.id];
            const pct = total ? Math.round((n / total) * 100) : 0;
            const selected = shownVote === r.id;
            const isLastOdd = idx === regions.length - 1 && regions.length % 2 === 1;

            return (
              <li key={r.id} className={cn(isLastOdd && "sm:col-span-2")}>
                <button
                  type="button"
                  onClick={() => setVote(r.id)}
                  aria-pressed={selected}
                  className={cn(
                    "flex h-full w-full flex-col justify-between gap-3 rounded-xl border border-border/60 bg-bg/70 p-3.5 text-left transition-all duration-150 hover:border-primary/50 hover:bg-bg sm:p-4",
                    selected && "border-primary bg-bg ring-1 ring-primary/40",
                  )}
                >
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-display text-base font-semibold text-fg">
                        {r.name}
                      </span>
                      <span className="rounded-md bg-surface px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted">
                        {r.place}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                      {r.body}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border/40">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium tabular-nums text-fg">{pct}%</span>
                      {selected ? (
                        <span className="font-semibold text-primary">Your Vote</span>
                      ) : (
                        <span className="text-muted hover:text-fg">Tap to vote</span>
                      )}
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
