import { useState } from "react";
import { TreePine, MapPin, CheckCircle, Clock, Globe2, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlantingLocation {
  id: string;
  name: string;
  country: string;
  region: string;
  trees: number;
  status: "planted" | "upcoming";
  species: string;
  description: string;
  // Positioning percentage on world map
  top: number;
  left: number;
  radius: number; // size in px
}

const PLANTING_LOCATIONS: PlantingLocation[] = [
  {
    id: "amazon-brazil",
    name: "Amazon Rainforest Basin",
    country: "Brazil & Peru",
    region: "South America",
    trees: 4200,
    status: "planted",
    species: "Native Mahogany, Brazil Nut, Ipê",
    description: "Restoring biodiversity corridors along the southern border of the primary rainforest to block agricultural encroachment.",
    top: 60,
    left: 32,
    radius: 36,
  },
  {
    id: "andes-peru",
    name: "Peruvian Cloud Forests",
    country: "Peru",
    region: "South America",
    trees: 1850,
    status: "planted",
    species: "Polylepis & Andean Alder",
    description: "High-altitude watershed reforestation protecting glacial runoff and indigenous water security.",
    top: 66,
    left: 26,
    radius: 20,
  },
  {
    id: "sahel-senegal",
    name: "Great Green Wall Initiative",
    country: "Senegal & Mali",
    region: "West Africa",
    trees: 2600,
    status: "planted",
    species: "Acacia senegal, Baobab, Desert Date",
    description: "Frontline desertification barrier creating fertile microclimates and resilient food forests for local agro-pastoralists.",
    top: 54,
    left: 46,
    radius: 24,
  },
  {
    id: "congo-basin",
    name: "Congo Basin Corridor",
    country: "Dem. Rep. of Congo",
    region: "Central Africa",
    trees: 3100,
    status: "planted",
    species: "Iroko, African Teak, Limba",
    description: "Secondary growth enrichment along critical wildlife migration routes in the world's second-largest rainforest.",
    top: 61,
    left: 54,
    radius: 34,
  },
  {
    id: "vietnam-annamite",
    name: "Annamite Mountain Range",
    country: "Vietnam",
    region: "Southeast Asia",
    trees: 810,
    status: "planted",
    species: "Hopea odorata & Ironwood",
    description: "Restoring endemic habitat devastated by historical deforestation and soil erosion along steep watershed river basins.",
    top: 52,
    left: 80,
    radius: 20,
  },
  // Upcoming planting sites
  {
    id: "northwest-usa",
    name: "Pacific Northwest Old-Growth Buffer",
    country: "USA (Oregon/Washington)",
    region: "North America",
    trees: 1500,
    status: "upcoming",
    species: "Douglas Fir, Western Red Cedar",
    description: "Post-wildfire soil recovery and canopy replenishment in protected national riparian buffers.",
    top: 36,
    left: 17,
    radius: 26,
  },
  {
    id: "appalachia-usa",
    name: "Appalachian Reforestation Project",
    country: "USA (Kentucky/Virginia)",
    region: "North America",
    trees: 2000,
    status: "upcoming",
    species: "American Chestnut, White Oak, Sugar Maple",
    description: "Reclaiming historical strip-mining land into lush, carbon-dense hardwood deciduous forests.",
    top: 44,
    left: 23,
    radius: 28,
  },
  {
    id: "sumatra-indonesia",
    name: "Sumatran Peatland & Mangroves",
    country: "Indonesia",
    region: "Southeast Asia",
    trees: 2500,
    status: "upcoming",
    species: "Rhizophora Mangrove, Peat Swamp Shorea",
    description: "Protecting critical coastal carbon sinks and tiger habitat from palm oil drainage canals.",
    top: 65,
    left: 81,
    radius: 22,
  },
  {
    id: "atlantic-brazil",
    name: "Mata Atlântica Coastal Belt",
    country: "Brazil",
    region: "South America",
    trees: 1200,
    status: "upcoming",
    species: "Pau-brasil, Cedro rosa",
    description: "Reconnecting fragmented patches of highly endangered coastal Atlantic rainforest.",
    top: 68,
    left: 35,
    radius: 20,
  },
  {
    id: "patagonia-argentina",
    name: "Patagonian Andean Slopes",
    country: "Argentina",
    region: "South America",
    trees: 900,
    status: "upcoming",
    species: "Lenga & Coihue Beech",
    description: "Reforesting sub-Antarctic valleys impacted by recurring extreme drought and forest fires.",
    top: 80,
    left: 27,
    radius: 16,
  },
];

export function ImpactMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<PlantingLocation>(PLANTING_LOCATIONS[0]);

  return (
    <section id="impact-map" className="relative border-t border-border bg-[#03150d] py-20 text-fg sm:py-28">
      {/* Subtle ambient green glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Eyebrow & Title from Image 3 */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            OUR IMPACT
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-fg sm:text-5xl lg:text-6xl">
            A GREENER WORLD.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Explore our global impact. Every dot represents a location where trees have been (or will be) planted through the <strong className="text-fg font-semibold">SPROUT</strong> community.
          </p>
        </div>

        {/* Legend from Image 3 */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2.5">
            <span className="text-fg">Trees planted</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="size-3.5 rounded-full bg-[#c8e2a8] opacity-90 shadow-[0_0_8px_#c8e2a8]" />
            <span className="text-muted">Upcoming planting</span>
          </div>
          <span className="text-xs text-muted/70 sm:ml-auto">
            Interactive map: Tap any beacon for field data
          </span>
        </div>

        {/* Interactive Satellite Map Container */}
        <div className="relative mt-8 overflow-hidden rounded-3xl border border-primary/30 bg-[#020d08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
          {/* Real Satellite Map Image (saved from generate_image / user upload) */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden">
            <img
              src="/brand/impact-map.jpg"
              alt="Global Reforestation Satellite Map showing planting locations with glowing green dots"
              className="size-full object-cover object-center"
            />

            {/* Gradient vignette edges */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020d08]/90 via-transparent to-[#020d08]/40" />

            {/* Interactive Hotspot Beacon Pins */}
            {PLANTING_LOCATIONS.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              const isPlanted = loc.status === "planted";

              return (
                <button
                  type="button"
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  aria-label={`${loc.name} - ${loc.trees.toLocaleString()} trees`}
                  style={{
                    top: `${loc.top}%`,
                    left: `${loc.left}%`,
                    width: `${loc.radius}px`,
                    height: `${loc.radius}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className="group absolute cursor-pointer focus:outline-none"
                >
                  {/* Outer Pulsing Beacon Radar Ring */}
                  <span
                    className={`absolute inset-0 rounded-full animate-ping opacity-60 transition-transform ${
                      isPlanted ? "bg-[#6db35a]" : "bg-[#c8e2a8]"
                    }`}
                  />
                  {/* Nested Gradient Halo Ring */}
                  <span
                    className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? "border-white bg-white/30 scale-125 shadow-[0_0_20px_#6db35a]"
                        : isPlanted
                        ? "border-[#6db35a]/80 bg-[#6db35a]/40 group-hover:scale-110 shadow-[0_0_12px_#6db35a]"
                        : "border-[#c8e2a8]/80 bg-[#c8e2a8]/30 group-hover:scale-110 shadow-[0_0_10px_#c8e2a8]"
                    }`}
                  />
                  {/* Center Dot */}
                  <span
                    className={`absolute inset-[30%] rounded-full shadow-sm ${
                      isPlanted ? "bg-[#e8efdf]" : "bg-[#ffffff]"
                    }`}
                  />

                  {/* Compact Hover Tooltip for desktop */}
                  <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden whitespace-nowrap rounded-lg bg-black/90 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md group-hover:block z-20">
                    {loc.name} ({loc.trees.toLocaleString()} saplings)
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Location Detail Bar inside Map Container */}
          <div className="border-t border-border/80 bg-surface/95 p-5 backdrop-blur-md sm:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3.5">
                <div className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${
                  selectedLocation.status === "planted"
                    ? "bg-primary/20 text-primary"
                    : "bg-cream/20 text-cream"
                }`}>
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-fg sm:text-xl">
                      {selectedLocation.name}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-muted">
                      ({selectedLocation.country})
                    </span>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      selectedLocation.status === "planted"
                        ? "bg-primary/20 text-primary"
                        : "bg-cream/20 text-cream"
                    }`}>
                      {selectedLocation.status === "planted" ? (
                        <>
                          <CheckCircle className="size-3" />
                          Planted & Monitored
                        </>
                      ) : (
                        <>
                          <Clock className="size-3" />
                          Upcoming Cohort
                        </>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    {selectedLocation.description}
                  </p>
                  <p className="mt-2 text-xs font-medium text-cream">
                    Native Species: <span className="text-fg">{selectedLocation.species}</span>
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-4 self-end md:self-center">
                <div className="text-right">
                  <span className="block font-display text-2xl font-extrabold text-primary tabular-nums">
                    {selectedLocation.trees.toLocaleString()}
                  </span>
                  <span className="block text-xs uppercase tracking-wider text-muted">
                    Saplings
                  </span>
                </div>
                <Button asChild variant="leaf" size="sm">
                  <a href="#poll">
                    Vote Next Land
                    <ChevronRight />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Summary Bar (Directly matching Image 3 bottom stats card) */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1: 12,560 Trees Planted (from Image 3) */}
          <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-[#051c12] p-6 shadow-md">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <TreePine className="size-8" />
            </div>
            <div>
              <span className="font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums">
                12,560
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-primary mt-0.5">
                Trees Planted
              </span>
            </div>
          </div>

          {/* Stat 2: 15 Countries (from Image 3) */}
          <div className="flex items-center gap-4 rounded-2xl border border-primary/30 bg-[#051c12] p-6 shadow-md">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-cream/20 text-cream">
              <MapPin className="size-8" />
            </div>
            <div>
              <span className="font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums">
                15
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-cream mt-0.5">
                Countries
              </span>
            </div>
          </div>

          {/* Stat 3: Survival Rate / Verification */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-[#051c12] p-6 shadow-md">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <ShieldCheck className="size-8" />
            </div>
            <div>
              <span className="font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums">
                94.8%
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted mt-0.5">
                Sapling Survival Rate
              </span>
            </div>
          </div>

          {/* Stat 4: Community Governance */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-[#051c12] p-6 shadow-md">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-cream/20 text-cream">
              <Globe2 className="size-8" />
            </div>
            <div>
              <span className="font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums">
                100%
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted mt-0.5">
                Community Voted
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
