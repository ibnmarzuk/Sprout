import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Droplets, i as Menu, o as ArrowUpRight, r as Sprout, s as ArrowDown, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DJA1zXaM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			cream: "bg-cream text-bg shadow-[0_0_0_1px_rgba(232,217,176,0.35)] hover:bg-cream/90",
			leaf: "bg-primary text-primary-fg hover:bg-primary/90",
			outline: "bg-transparent text-fg shadow-[0_0_0_1px_rgba(232,239,228,0.16)] hover:bg-fg/5",
			ghost: "bg-transparent text-fg hover:bg-fg/6"
		},
		size: {
			md: "h-11 rounded-lg px-4 text-sm",
			lg: "h-12 rounded-xl px-5 text-sm",
			sm: "h-9 rounded-md px-3 text-xs",
			icon: "size-11 rounded-lg"
		}
	},
	defaultVariants: {
		variant: "cream",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var MIN_DIST = 7;
function dist(a, x, y) {
	const dx = a.x - x;
	const dy = (a.y - y) * .7;
	return Math.hypot(dx, dy);
}
var useGrove = create()(persist((set, get) => ({
	gardener: "",
	plants: [],
	vote: null,
	hydrated: false,
	setHydrated: () => set({ hydrated: true }),
	setGardener: (name) => set({ gardener: name.trim().slice(0, 24) }),
	plant: (x, y) => {
		const { plants, hydrated } = get();
		if (!hydrated) return {
			ok: false,
			reason: "The soil is still waking. Try again."
		};
		if (plants.length >= 12) return {
			ok: false,
			reason: "Your grove is full. Water what you have planted."
		};
		if (plants.some((p) => dist(p, x, y) < MIN_DIST)) return {
			ok: false,
			reason: "Give it room. Tap a clearer patch of soil."
		};
		const plant = {
			id: crypto.randomUUID(),
			x,
			y,
			plantedAt: Date.now(),
			wateredAt: Date.now(),
			stage: 1
		};
		set({ plants: [...plants, plant] });
		return { ok: true };
	},
	water: (id) => {
		const { plants } = get();
		const current = plants.find((p) => p.id === id);
		if (!current) return {
			ok: false,
			reason: "That sprout is gone."
		};
		if (Date.now() - current.wateredAt < 1400) return {
			ok: false,
			reason: "Let it drink."
		};
		if (current.stage >= 3) {
			set({ plants: plants.map((p) => p.id === id ? {
				...p,
				wateredAt: Date.now()
			} : p) });
			return {
				ok: true,
				stage: 3
			};
		}
		const stage = current.stage + 1;
		set({ plants: plants.map((p) => p.id === id ? {
			...p,
			stage,
			wateredAt: Date.now()
		} : p) });
		return {
			ok: true,
			stage
		};
	},
	setVote: (id) => set({ vote: id })
}), {
	name: "sprout-grove",
	skipHydration: true,
	partialize: (s) => ({
		gardener: s.gardener,
		plants: s.plants,
		vote: s.vote
	}),
	onRehydrateStorage: () => (state) => {
		state?.setHydrated();
	}
}));
function useGroveHydration() {
	const hydrated = useGrove((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		useGrove.persist.rehydrate();
	}, []);
	return hydrated;
}
function useHydratedFlag() {
	return useGrove((s) => s.hydrated);
}
var STAGE_LABEL = {
	1: "Sprout",
	2: "Growing",
	3: "Rooted"
};
function Grove() {
	const plants = useGrove((s) => s.plants);
	const gardener = useGrove((s) => s.gardener);
	const hydrated = useHydratedFlag();
	const plant = useGrove((s) => s.plant);
	const water = useGrove((s) => s.water);
	const [note, setNote] = (0, import_react.useState)("Tap the soil to plant. Tap a sprout to water it.");
	const [drips, setDrips] = (0, import_react.useState)([]);
	function onBedClick(e) {
		const plantId = e.target.closest("[data-plant-id]")?.getAttribute("data-plant-id");
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
			setNote(res.stage === 3 ? "Rooted. This one will outlast a candle." : "Watered. Watch it grow.");
			return;
		}
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width * 100;
		const y = (e.clientY - rect.top) / rect.height * 100;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "grove",
		className: "relative border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
								children: "The grove"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
								children: shownName ? `${shownName}'s grove` : "Plant something that stays."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: "This is a first plot — a private grove that lives on your device. When the token bridges to real land, these roots are how we remember who showed up early."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-3 text-sm text-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex h-10 items-center gap-2 rounded-lg bg-surface px-3 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "size-4 text-primary" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-fg",
									children: shown.length
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"/ ",
									12,
									" planted"
								] })
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 overflow-hidden rounded-3xl bg-soil p-1.5 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onBedClick,
						"aria-label": "Grove soil. Tap empty ground to plant, tap a sprout to water.",
						className: "relative block min-h-[420px] w-full overflow-hidden rounded-[18px] sm:min-h-[520px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/moss.jpg",
								alt: "",
								className: "absolute inset-0 size-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/25",
								"aria-hidden": "true"
							}),
							empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pointer-events-none absolute inset-0 flex items-center justify-center px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "rounded-full bg-bg/70 px-4 py-2 text-sm text-cream backdrop-blur-sm",
									children: "This soil is waiting. Tap to plant."
								})
							}) : null,
							shown.slice().sort((a, b) => a.y - b.y).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantSprite, {
								plant: p,
								dripping: drips.includes(p.id)
							}, p.id))
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						role: "status",
						children: note
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-1.5 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "size-3.5" }), "Water a sprout to move seed → growing → rooted."]
					})]
				})
			]
		})
	});
}
function PlantSprite({ plant, dripping }) {
	const depth = .72 + plant.y / 100 * .45;
	const stageScale = plant.stage === 1 ? .88 : plant.stage === 2 ? 1.05 : 1.22;
	const size = 168 * depth * stageScale;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		"data-plant-id": plant.id,
		className: "sprout-rise absolute -translate-x-1/2 -translate-y-[78%] cursor-pointer",
		style: {
			left: `${plant.x}%`,
			top: `${plant.y}%`,
			width: size,
			zIndex: 10 + Math.round(plant.y)
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/brand/mascot.jpg",
			alt: STAGE_LABEL[plant.stage],
			draggable: false,
			className: cn("plant-face pointer-events-none block w-full select-none rounded-full outline-none ring-2 ring-cream/35 transition-[transform,filter] duration-500 ease-out", plant.stage === 3 && "brightness-110 ring-primary/50")
		}), dripping ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute left-1/2 top-1 -translate-x-1/2 text-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "drip size-5" })
		}) : null]
	});
}
function GroveName() {
	const gardener = useGrove((s) => s.gardener);
	const hydrated = useHydratedFlag();
	const setGardener = useGrove((s) => s.setGardener);
	const [draft, setDraft] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (hydrated) setDraft(gardener);
	}, [gardener, hydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex flex-col gap-2 sm:flex-row sm:items-center",
		onSubmit: (e) => {
			e.preventDefault();
			setGardener(draft);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				htmlFor: "gardener",
				className: "sr-only",
				children: "Your name"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "gardener",
				value: draft,
				onChange: (e) => setDraft(e.target.value),
				placeholder: "Name your grove",
				maxLength: 24,
				className: "h-11 min-w-0 flex-1 rounded-lg bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "leaf",
				className: "h-11",
				children: "Save"
			})
		]
	});
}
var X_URL = "https://x.com/sproutonchain";
var X_HANDLE = "@sproutonchain";
var pillars = [
	{
		id: "community",
		title: "Community",
		body: "Degens, gardeners, and quiet builders in the same soil. Momentum is a crowd that shows up more than once."
	},
	{
		id: "symbolism",
		title: "Symbolism",
		body: "A sprout is a promise you can hold. Not a ticker screaming. A small thing that intends to become a forest."
	},
	{
		id: "momentum",
		title: "Green momentum",
		body: "Onchain energy has to land somewhere. We point it at dirt, water, and trees that outlive a candle chart."
	}
];
var steps = [
	{
		n: "01",
		title: "Gather",
		body: "The early ones find each other. Follow the growth. Name your grove. Plant a sprout here so the soil is not empty when the token arrives."
	},
	{
		n: "02",
		title: "Choose",
		body: "Community polls decide which land gets greened next. Telegram and this grove are the ballot box — not a boardroom."
	},
	{
		n: "03",
		title: "Plant",
		body: "Onchain momentum funds real-world work. Grow online. Plant offline. The story is only true if the ground changes."
	},
	{
		n: "04",
		title: "Keep growing",
		body: "The token is the bridge, not the product. Narrative compounds when every cycle plants more than it talks."
	}
];
var regions = [
	{
		id: "sahel",
		name: "Sahel Belt",
		place: "West Africa",
		body: "A dry frontier where a tree is infrastructure. Windbreaks, water, and shade for people who already live with the heat.",
		base: 28
	},
	{
		id: "congo",
		name: "Congo Basin",
		place: "Central Africa",
		body: "The lungs next door. Restoring edges and corridors so the forest does not keep receding by a thousand cuts.",
		base: 21
	},
	{
		id: "amazon",
		name: "Amazon Basin",
		place: "South America",
		body: "The mythic one. We do not pretend to own it — we back the people already standing in front of the blades.",
		base: 34
	},
	{
		id: "highlands",
		name: "Eastern Highlands",
		place: "East Africa",
		body: "Ridges that catch cloud and feed rivers. Planting here is how a watershed remembers itself.",
		base: 17
	},
	{
		id: "mangrove",
		name: "Mangrove Coasts",
		place: "Southeast Asia",
		body: "Roots in salt water. Nurseries for fish, shields for storms, carbon in the mud where it stays.",
		base: 19
	}
];
function regionLabel(id) {
	if (!id) return "Not yet chosen";
	return regions.find((r) => r.id === id)?.name ?? "Not yet chosen";
}
var manifesto = [
	"Most projects launch a token. We want to grow a narrative.",
	"SPROUT is an onchain eco-native brand built around community, symbolism, and green momentum.",
	"A small sprout with a big mission: bringing degens together to grow real-world forests.",
	"Grow online. Plant offline.",
	"Early days. Strong roots. If you see it now, you are early."
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex min-h-dvh items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/hero.jpg",
				alt: "A small clay sprout standing alone in a misty forest clearing at dawn",
				className: "absolute inset-0 size-full object-cover object-[center_70%]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg/70 to-transparent",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stagger-in max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-cream",
							children: "Early days. Strong roots."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-[2.35rem] font-medium leading-[1.08] text-fg sm:text-5xl md:text-6xl",
							children: ["Most projects launch a token.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-cream",
								children: "We grow a narrative."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
							children: "SPROUT is an onchain eco-native brand. Community, symbolism, and green momentum — bringing people together to grow real-world forests. Grow online. Plant offline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#grove",
									children: ["Plant a sprout", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: X_URL,
									target: "_blank",
									rel: "noreferrer",
									children: ["Follow ", X_HANDLE]
								})
							})]
						})
					]
				})
			})
		]
	});
}
function How() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
					children: "How it roots"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium text-fg sm:text-4xl",
					children: "The token is the bridge. The forest is the point."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
					children: "No contract yet. No fake tree counter. The first job is to gather the people who will still be here when the dirt work starts — and to let them choose where that dirt is."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid gap-4 sm:grid-cols-2",
					children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-2xl bg-bg p-6 shadow-[var(--shadow-border)] sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm tabular-nums text-cream",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-medium text-fg",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted sm:text-base",
								children: s.body
							})
						]
					}, s.n))
				})
			]
		})
	});
}
function Join() {
	const hydrated = useHydratedFlag();
	const plants = useGrove((s) => s.plants.length);
	const vote = useGrove((s) => s.vote);
	const gardener = useGrove((s) => s.gardener);
	const shownPlants = hydrated ? plants : 0;
	const shownVote = hydrated ? vote : null;
	const shownName = hydrated ? gardener : "";
	const ready = shownPlants > 0 && Boolean(shownVote);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "join",
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
					children: "If you see it now"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
					children: "You are early. Follow the growth."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "Name your grove. Plant. Vote the next land. Then hold the line on X while the contract, the treasury, and the first planting are cooked in public."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroveName, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: X_URL,
							target: "_blank",
							rel: "noreferrer",
							children: [
								"Follow ",
								X_HANDLE,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#grove",
							children: "Return to the grove"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: "Your roots"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: "Grove"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl text-fg",
								children: shownName || "Unnamed"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: "Planted"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-display text-2xl tabular-nums text-fg",
								children: shownPlants
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs uppercase tracking-[0.16em] text-muted",
									children: "Next land"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-2xl text-fg",
									children: regionLabel(shownVote)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-sm leading-relaxed text-muted",
						children: ready ? "You did the three early things: a name, a sprout, a vote. That is enough to be counted." : "Plant at least one sprout and cast a vote. That is the whole onboarding."
					})
				]
			})]
		})
	});
}
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "manifesto",
		className: "relative isolate overflow-hidden border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/brand/soil.jpg",
				alt: "A tiny green sprout breaking through dark mossy soil",
				className: "absolute inset-0 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-bg/78",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-cream",
						children: "From the first post"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
						className: "mt-8 space-y-8",
						children: manifesto.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-medium leading-snug text-fg sm:text-3xl",
							children: line
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-sm text-muted",
						children: "— SPROUT, September 2026"
					})
				]
			})
		]
	});
}
function Mission() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mission",
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
							children: "Grow online. Plant offline."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
							children: "An eco-native brand, not a five-minute tweetcoin."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-base leading-relaxed text-muted",
							children: "SPROUT exists to point onchain heat at something that can still be standing in twenty years. The mascot is a promise. The grove is a rehearsal. The forest is the work."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 overflow-hidden rounded-2xl bg-surface p-1.5 shadow-[var(--shadow-border)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/grove.jpg",
								alt: "A young grove of clay sprouts standing together on moss",
								className: "h-64 w-full rounded-[10px] object-cover sm:h-80"
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "flex flex-col gap-8 lg:col-span-7 lg:pt-10",
					children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-t border-border pt-8 first:border-t-0 first:pt-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-sm tabular-nums text-cream",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium text-fg",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "col-start-2 text-base leading-relaxed text-muted",
								children: p.body
							})
						]
					}, p.id))
				})]
			})
		})
	});
}
function Poll() {
	const hydrated = useHydratedFlag();
	const vote = useGrove((s) => s.vote);
	const setVote = useGrove((s) => s.setVote);
	const shownVote = hydrated ? vote : null;
	const counts = Object.fromEntries(regions.map((r) => [r.id, r.base + (shownVote === r.id ? 1 : 0)]));
	const total = Object.values(counts).reduce((a, b) => a + b, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "poll",
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
						children: "Community ballot"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
						children: "Where should SPROUT green next?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base leading-relaxed text-muted",
						children: "Telegram will host the live polls. Until then, this is a straw vote — one pick, stored with your grove. The land that wins is the land we study first."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-3",
				children: regions.map((r) => {
					const n = counts[r.id];
					const pct = total ? Math.round(n / total * 100) : 0;
					const selected = shownVote === r.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setVote(r.id),
						"aria-pressed": selected,
						className: cn("grid w-full gap-3 rounded-2xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150 sm:grid-cols-[1fr_auto] sm:items-center sm:p-6", selected && "ring-1 ring-primary"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-medium text-fg",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: r.place
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-sm leading-relaxed text-muted",
							children: r.body
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "sm:w-40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-baseline justify-between text-xs text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-fg",
									children: [pct, "%"]
								}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "Your vote"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tap to vote" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block h-1.5 overflow-hidden rounded-full bg-bg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block h-full origin-left rounded-full bg-primary transition-transform duration-500 ease-out",
									style: { transform: `scaleX(${pct / 100})` }
								})
							})]
						})]
					}) }, r.id);
				})
			})]
		})
	});
}
function SproutMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		className: cn("size-7", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "18",
				r: "8.2",
				fill: "currentColor",
				className: "text-cream"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 14c0-5 3.2-8.5 7.5-9.5-1.4 4.2-3.8 6.8-7.5 8.2Z",
				fill: "currentColor",
				className: "text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M16 14c0-5-3.2-8.5-7.5-9.5 1.4 4.2 3.8 6.8 7.5 8.2Z",
				fill: "currentColor",
				className: "text-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "13.6",
				cy: "18.2",
				r: "1.05",
				fill: "currentColor",
				className: "text-bg"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "18.4",
				cy: "18.2",
				r: "1.05",
				fill: "currentColor",
				className: "text-bg"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 sm:py-12 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "inline-flex items-center gap-2 text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SproutMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-medium",
					children: "SPROUT"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-sm leading-relaxed text-muted",
				children: "An onchain eco-native brand. Grow online. Plant offline."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 text-sm text-muted md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: X_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "text-fg transition-colors duration-150 hover:text-cream",
					children: X_HANDLE
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No contract yet. Do not trust a CA from DMs." })]
			})]
		})
	});
}
var links = [
	{
		href: "#grove",
		label: "Grove"
	},
	{
		href: "#mission",
		label: "Mission"
	},
	{
		href: "#poll",
		label: "Where to green"
	},
	{
		href: "#join",
		label: "Early"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled || open ? "bg-bg/92 shadow-[0_1px_0_0_rgba(232,239,228,0.08)] backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SproutMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-medium tracking-tight",
						children: "SPROUT"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-1 md:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "rounded-md px-3 py-2 text-sm text-muted transition-colors duration-150 hover:text-fg",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "ml-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: X_URL,
							target: "_blank",
							rel: "noreferrer",
							children: X_HANDLE
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg px-5 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-base text-fg",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: X_URL,
						target: "_blank",
						rel: "noreferrer",
						onClick: () => setOpen(false),
						children: ["Follow ", X_HANDLE]
					})
				})]
			})
		}) : null]
	});
}
function Home() {
	useGroveHydration();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mission, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grove, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(How, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Poll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Manifesto, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Join, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Home as component };
