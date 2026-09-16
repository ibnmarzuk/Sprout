import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { RegionId } from "./content";

export type Stage = 1 | 2 | 3;

export interface Plant {
  id: string;
  x: number;
  y: number;
  plantedAt: number;
  wateredAt: number;
  stage: Stage;
}

interface GroveState {
  gardener: string;
  plants: Plant[];
  vote: RegionId | null;
  hydrated: boolean;
  setHydrated: () => void;
  setGardener: (name: string) => void;
  plant: (x: number, y: number) => { ok: true } | { ok: false; reason: string };
  water: (id: string) => { ok: true; stage: Stage } | { ok: false; reason: string };
  setVote: (id: RegionId) => void;
}

export const MAX_PLANTS = 12;
const MIN_DIST = 7;

function dist(a: Plant, x: number, y: number) {
  const dx = a.x - x;
  const dy = (a.y - y) * 0.7;
  return Math.hypot(dx, dy);
}

export const useGrove = create<GroveState>()(
  persist(
    (set, get) => ({
      gardener: "",
      plants: [],
      vote: null,
      hydrated: false,
      setHydrated: () => set({ hydrated: true }),
      setGardener: (name) => set({ gardener: name.trim().slice(0, 24) }),
      plant: (x, y) => {
        const { plants, hydrated } = get();
        if (!hydrated) {
          return { ok: false, reason: "The soil is still waking. Try again." };
        }
        if (plants.length >= MAX_PLANTS) {
          return { ok: false, reason: "Your grove is full. Water what you have planted." };
        }
        if (plants.some((p) => dist(p, x, y) < MIN_DIST)) {
          return { ok: false, reason: "Give it room. Tap a clearer patch of soil." };
        }
        const plant: Plant = {
          id: crypto.randomUUID(),
          x,
          y,
          plantedAt: Date.now(),
          wateredAt: Date.now(),
          stage: 1,
        };
        set({ plants: [...plants, plant] });
        return { ok: true };
      },
      water: (id) => {
        const { plants } = get();
        const current = plants.find((p) => p.id === id);
        if (!current) return { ok: false, reason: "That sprout is gone." };
        if (Date.now() - current.wateredAt < 1400) {
          return { ok: false, reason: "Let it drink." };
        }
        if (current.stage >= 3) {
          set({
            plants: plants.map((p) =>
              p.id === id ? { ...p, wateredAt: Date.now() } : p,
            ),
          });
          return { ok: true, stage: 3 };
        }
        const stage = (current.stage + 1) as Stage;
        set({
          plants: plants.map((p) =>
            p.id === id ? { ...p, stage, wateredAt: Date.now() } : p,
          ),
        });
        return { ok: true, stage };
      },
      setVote: (id) => set({ vote: id }),
    }),
    {
      name: "sprout-grove",
      skipHydration: true,
      partialize: (s) => ({
        gardener: s.gardener,
        plants: s.plants,
        vote: s.vote,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);

export function useGroveHydration() {
  const hydrated = useGrove((s) => s.hydrated);
  useEffect(() => {
    void useGrove.persist.rehydrate();
  }, []);
  return hydrated;
}

export function useHydratedFlag() {
  return useGrove((s) => s.hydrated);
}

