export const X_URL = "https://x.com/sproutonchain";
export const X_HANDLE = "@sproutonchain";

export const pillars = [
  {
    id: "community",
    title: "Community",
    body: "Degens, gardeners, and quiet builders in the same soil. Momentum is a crowd that shows up more than once.",
  },
  {
    id: "symbolism",
    title: "Symbolism",
    body: "A sprout is a promise you can hold. Not a ticker screaming. A small thing that intends to become a forest.",
  },
  {
    id: "momentum",
    title: "Green momentum",
    body: "Onchain energy has to land somewhere. We point it at dirt, water, and trees that outlive a candle chart.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Gather",
    body: "The early ones find each other. Follow the growth. Name your grove. Plant a sprout here so the soil is not empty when the token arrives.",
  },
  {
    n: "02",
    title: "Choose",
    body: "Community polls decide which land gets greened next. Telegram and this grove are the ballot box — not a boardroom.",
  },
  {
    n: "03",
    title: "Plant",
    body: "Onchain momentum funds real-world work. Grow online. Plant offline. The story is only true if the ground changes.",
  },
  {
    n: "04",
    title: "Keep growing",
    body: "The token is the bridge, not the product. Narrative compounds when every cycle plants more than it talks.",
  },
] as const;

export const regions = [
  {
    id: "sahel",
    name: "Sahel Belt",
    place: "West Africa",
    body: "A dry frontier where a tree is infrastructure. Windbreaks, water, and shade for people who already live with the heat.",
    base: 28,
  },
  {
    id: "congo",
    name: "Congo Basin",
    place: "Central Africa",
    body: "The lungs next door. Restoring edges and corridors so the forest does not keep receding by a thousand cuts.",
    base: 21,
  },
  {
    id: "amazon",
    name: "Amazon Basin",
    place: "South America",
    body: "The mythic one. We do not pretend to own it — we back the people already standing in front of the blades.",
    base: 34,
  },
  {
    id: "highlands",
    name: "Eastern Highlands",
    place: "East Africa",
    body: "Ridges that catch cloud and feed rivers. Planting here is how a watershed remembers itself.",
    base: 17,
  },
  {
    id: "mangrove",
    name: "Mangrove Coasts",
    place: "Southeast Asia",
    body: "Roots in salt water. Nurseries for fish, shields for storms, carbon in the mud where it stays.",
    base: 19,
  },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export function regionLabel(id: RegionId | null): string {
  if (!id) return "Not yet chosen";
  return regions.find((r) => r.id === id)?.name ?? "Not yet chosen";
}

export const manifesto = [
  "Most projects launch a token. We want to grow a narrative.",
  "A small sprout with a big mission: bringing degens together to grow real-world forests.",
  "Grow online. Plant offline.",
  "Early days. Strong roots. If you see it now, you are early.",
] as const;
