import { steps } from "@/lib/content";

export function How() {
  return (
    <section id="how" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
          How it roots
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium text-fg sm:text-4xl">
          The token is the bridge. The forest is the point.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          No contract yet. No fake tree counter. The first job is to gather the
          people who will still be here when the dirt work starts — and to let
          them choose where that dirt is.
        </p>
        <ol className="mt-12 grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl bg-bg p-6 shadow-[var(--shadow-border)] sm:p-7"
            >
              <span className="font-display text-sm tabular-nums text-cream">
                {s.n}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium text-fg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
