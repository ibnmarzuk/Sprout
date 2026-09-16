import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative isolate overflow-hidden border-t border-border">
      <img
        src="/brand/soil.jpg"
        alt="A tiny green sprout breaking through dark mossy soil"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-bg/78" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream">
          From the first post
        </p>
        <blockquote className="mt-8 space-y-8">
          {manifesto.map((line) => (
            <p
              key={line}
              className="font-display text-2xl font-medium leading-snug text-fg sm:text-3xl"
            >
              {line}
            </p>
          ))}
        </blockquote>
        <p className="mt-10 text-sm text-muted">— SPROUT, September 2026</p>
      </div>
    </section>
  );
}
