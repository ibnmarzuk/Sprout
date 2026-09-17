import { useEffect, useState } from "react";
import { Droplets, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAX_PLANTS, useGrove, useHydratedFlag, type Plant, type Stage } from "@/lib/grove-store";
import { cn } from "@/lib/utils";

const STAGE_LABEL: Record<Stage, string> = {
  1: "Sprout",
  2: "Growing",
  3: "Rooted",
};

export function Grove() {
  const plants = useGrove((s) => s.plants);
  const gardener = useGrove((s) => s.gardener);
  const hydrated = useHydratedFlag();
  const plant = useGrove((s) => s.plant);
  const water = useGrove((s) => s.water);
  const [note, setNote] = useState("Tap the soil to plant. Tap a sprout to water it.");
  const [drips, setDrips] = useState<string[]>([]);

  function onBedClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLElement;
    const plantId = target.closest("[data-plant-id]")?.getAttribute("data-plant-id");
    if (plantId) {
      const res = water(plantId);
      if (!res.ok) {
        setNote(res.reason);
        return;
      }
      setDrips((d) => [...d, plantId]);
      window.setTimeout(() => {
        setDrips((d) => d.filter((id) => id !== plantId));
      }, 700);
      setNote(
        res.stage === 3
          ? "Rooted. This one will outlast a candle."
          : "Watered. Watch it grow.",
      );
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const res = plant(Math.min(92, Math.max(8, x)), Math.min(88, Math.max(28, y)));
    if (!res.ok) {
      setNote(res.reason);
      return;
    }
    setNote("A sprout took. Water it to help it root.");
  }

  const shown = hydrated ? plants : [];
  const empty = hydrated && shown.length === 0;
  const shownName = hydrated ? gardener : "";

  return (
    <section id="grove" className="relative border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">
              The grove
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-fg sm:text-4xl">
              {shownName ? `${shownName}'s grove` : "Plant something that stays."}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              This is a personal digital grove for our early community members.
              While this plot lives in your browser, every real sapling is financed through our <a href="#how-it-works" className="text-primary underline">50 = 5 Milestone Formula</a> and planted in offline forests across the globe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="inline-flex h-10 items-center gap-2 rounded-lg bg-surface px-3 shadow-[var(--shadow-border)]">
              <Sprout className="size-4 text-primary" />
              <span className="tabular-nums text-fg">{shown.length}</span>
              <span>/ {MAX_PLANTS} planted</span>
            </span>
            {shown.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => useGrove.getState().waterAll()}
                className="text-xs"
              >
                <Droplets className="size-3.5 text-primary" />
                Water all
              </Button>
            )}
          </div>
        </div>

        {/* Prominent distinction callout */}
        <div className="mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="size-6 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5">
              <Sprout className="size-3.5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm leading-relaxed text-muted">
              <span className="font-semibold text-fg">Grow Online, Plant Offline Distinction:</span>
              <p>
                Tapping the soil below nurtures your personal digital pledge. Real trees are not planted by clicking a screen — they are triggered by onchain market milestones and planted by our certified forestry partners. View the <a href="#impact-map" className="text-primary font-medium underline">Global Satellite Impact Map</a> to see real-world trees.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-soil p-1.5 shadow-[var(--shadow-border)]">
          <button
            type="button"
            onClick={onBedClick}
            aria-label="Grove soil. Tap empty ground to plant, tap a sprout to water."
            className="relative block min-h-[420px] w-full overflow-hidden rounded-[18px] sm:min-h-[520px]"
          >
            <img
              src="/brand/moss.jpg"
              alt=""
              className="absolute inset-0 size-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/25"
              aria-hidden="true"
            />
            {empty ? (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
                <p className="rounded-full bg-bg/70 px-4 py-2 text-sm text-cream backdrop-blur-sm">
                  This soil is waiting. Tap to plant.
                </p>
              </div>
            ) : null}
            {shown
              .slice()
              .sort((a, b) => a.y - b.y)
              .map((p) => (
                <PlantSprite
                  key={p.id}
                  plant={p}
                  dripping={drips.includes(p.id)}
                />
              ))}
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted" role="status">
            {note}
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted">
            <Droplets className="size-3.5" />
            Water a sprout to move seed → growing → rooted.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlantSprite({ plant, dripping }: { plant: Plant; dripping: boolean }) {
  const depth = 0.72 + (plant.y / 100) * 0.45;
  const stageScale = plant.stage === 1 ? 0.88 : plant.stage === 2 ? 1.05 : 1.22;
  const size = 168 * depth * stageScale;

  return (
    <span
      data-plant-id={plant.id}
      className="sprout-rise absolute -translate-x-1/2 -translate-y-[78%] cursor-pointer"
      style={{
        left: `${plant.x}%`,
        top: `${plant.y}%`,
        width: size,
        zIndex: 10 + Math.round(plant.y),
      }}
    >
      <img
        src="/brand/mascot.jpg"
        alt={STAGE_LABEL[plant.stage]}
        draggable={false}
        className={cn(
          "plant-face pointer-events-none block w-full select-none rounded-full outline-none ring-2 ring-cream/35 transition-[transform,filter] duration-500 ease-out",
          plant.stage === 3 && "brightness-110 ring-primary/50",
        )}
      />
      {dripping ? (
        <span className="pointer-events-none absolute left-1/2 top-1 -translate-x-1/2 text-cream">
          <Droplets className="drip size-5" />
        </span>
      ) : null}
    </span>
  );
}

export function GroveName() {
  const gardener = useGrove((s) => s.gardener);
  const hydrated = useHydratedFlag();
  const setGardener = useGrove((s) => s.setGardener);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    if (hydrated) setDraft(gardener);
  }, [gardener, hydrated]);

  return (
    <form
      className="flex flex-col gap-2 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault();
        setGardener(draft);
      }}
    >
      <label htmlFor="gardener" className="sr-only">
        Your name
      </label>
      <input
        id="gardener"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Name your grove"
        maxLength={24}
        className="h-11 min-w-0 flex-1 rounded-lg bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/70"
      />
      <Button type="submit" variant="leaf" className="h-11">
        Save
      </Button>
    </form>
  );
}
