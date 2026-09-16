import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { X_HANDLE, X_URL } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh items-end overflow-hidden"
    >
      <img
        src="/brand/hero.jpg"
        alt="A small clay sprout standing alone in a misty forest clearing at dawn"
        className="absolute inset-0 size-full object-cover object-[center_70%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg/70 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
        <div className="stagger-in max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-cream">
            Early days. Strong roots.
          </p>
          <h1 className="mt-5 font-display text-[2.35rem] font-medium leading-[1.08] text-fg sm:text-5xl md:text-6xl">
            Most projects launch a token.
            <span className="mt-2 block text-cream">We grow a narrative.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            SPROUT is an onchain eco-native brand. Community, symbolism, and
            green momentum — bringing people together to grow real-world forests.
            Grow online. Plant offline.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#grove">
                Plant a sprout
                <ArrowDown />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={X_URL} target="_blank" rel="noreferrer">
                Follow {X_HANDLE}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
