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
    <section id="poll" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
            Community ballot
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
            Where should SPROUT green next?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Telegram will host the live polls. Until then, this is a straw vote
            — one pick, stored with your grove. The land that wins is the land
            we study first.
          </p>
        </div>
        <ul className="mt-10 grid gap-3">
          {regions.map((r) => {
            const n = counts[r.id];
            const pct = total ? Math.round((n / total) * 100) : 0;
            const selected = shownVote === r.id;
            return (
              <li key={r.id}>
                <button
                  type="button"
                  onClick={() => setVote(r.id)}
                  aria-pressed={selected}
                  className={cn(
                    "grid w-full gap-3 rounded-2xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6",
                    selected && "ring-1 ring-primary",
                  )}
                >
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-lg font-medium text-fg">
                        {r.name}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-muted">
                        {r.place}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted">
                      {r.body}
                    </span>
                  </span>
                  <span className="sm:w-40">
                    <span className="flex items-baseline justify-between text-xs text-muted">
                      <span className="tabular-nums text-fg">{pct}%</span>
                      {selected ? (
                        <span className="text-primary">Your vote</span>
                      ) : (
                        <span>Tap to vote</span>
                      )}
                    </span>
                    <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-bg">
                      <span
                        className="block h-full origin-left rounded-full bg-primary transition-transform duration-500 ease-out"
                        style={{ transform: `scaleX(${pct / 100})` }}
                      />
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
