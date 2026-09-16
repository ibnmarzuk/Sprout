import { pillars } from "@/lib/content";

export function Mission() {
  return (
    <section id="mission" className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              Grow online. Plant offline.
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
              An eco-native brand, not a five-minute tweetcoin.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              SPROUT exists to point onchain heat at something that can still be
              standing in twenty years. The mascot is a promise. The grove is a
              rehearsal. The forest is the work.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl bg-surface p-1.5 shadow-[var(--shadow-border)]">
              <img
                src="/brand/grove.jpg"
                alt="A young grove of clay sprouts standing together on moss"
                className="h-64 w-full rounded-[10px] object-cover sm:h-80"
              />
            </div>
          </div>
          <ol className="flex flex-col gap-8 lg:col-span-7 lg:pt-10">
            {pillars.map((p, i) => (
              <li
                key={p.id}
                className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-t border-border pt-8 first:border-t-0 first:pt-0"
              >
                <span className="font-display text-sm tabular-nums text-cream">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-medium text-fg">{p.title}</h3>
                <p className="col-start-2 text-base leading-relaxed text-muted">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
