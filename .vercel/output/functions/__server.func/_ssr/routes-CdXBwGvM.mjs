import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as ChevronRight, a as Sparkles, b as ArrowRight, c as RefreshCw, d as Globe, f as Earth, g as CircleCheckBig, h as CircleCheck, i as Sprout, l as Menu, m as Clock, o as ShieldCheck, p as Droplets, r as TreePine, s as ShieldAlert, t as X, u as MapPin, v as ChartPie, y as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CdXBwGvM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$12 = "/app/applet/src/components/sprout-mark.tsx";
function SproutMark({ className, size = "md" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/40 shadow-[0_0_12px_rgba(109,179,90,0.25)] bg-[#002015] transition-transform duration-200 hover:scale-105", {
			sm: "size-6",
			md: "size-8 sm:size-9",
			lg: "size-12",
			xl: "size-16 sm:size-20"
		}[size], className),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: "/brand/avatar.jpg",
			alt: "SPROUT Mascot",
			className: "size-full object-cover scale-110",
			loading: "eager"
		}, void 0, false, {
			fileName: _jsxFileName$12,
			lineNumber: 25,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$12,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$11 = "/app/applet/src/components/ui/button.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$11,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/site-nav.tsx";
var links = [
	{
		href: "#mission-real",
		label: "Mission"
	},
	{
		href: "#how-it-works",
		label: "How It Works"
	},
	{
		href: "#impact-map",
		label: "Impact Map"
	},
	{
		href: "#join",
		label: "Community"
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", scrolled || open ? "bg-bg/92 shadow-[0_1px_0_0_rgba(232,239,228,0.08)] backdrop-blur-md" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:h-[4.25rem] sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SproutMark, {}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 45,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-display text-lg font-medium tracking-tight",
						children: "SPROUT"
					}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 46,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$10,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden items-center gap-1.5 md:flex rounded-full border border-border/60 bg-surface/50 px-2 py-1 backdrop-blur-md",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: l.href,
						className: "rounded-full px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-150 hover:bg-surface-2 hover:text-fg",
						children: l.label
					}, l.href, false, {
						fileName: _jsxFileName$10,
						lineNumber: 50,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "ghost",
					size: "icon",
					className: "md:hidden",
					"aria-expanded": open,
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 67,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
						fileName: _jsxFileName$10,
						lineNumber: 67,
						columnNumber: 27
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 59,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$10,
			lineNumber: 43,
			columnNumber: 7
		}, this), open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-t border-border bg-bg px-5 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-1",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-md px-3 py-3 text-base text-fg",
					children: l.label
				}, l.href, false, {
					fileName: _jsxFileName$10,
					lineNumber: 74,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 72,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$10,
			lineNumber: 71,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/hero.tsx";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "top",
		className: "relative isolate flex min-h-[92dvh] items-end overflow-hidden pb-16 pt-32 sm:min-h-dvh sm:pb-24 sm:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: "/brand/hero.jpg",
				alt: "A small clay sprout mascot standing in a misty forest clearing at dawn",
				className: "absolute inset-0 size-full object-cover object-[center_65%]"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-bg/25",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg/90 via-bg/40 to-transparent",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-3 rounded-full border border-primary/40 bg-bg/80 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(109,179,90,0.2)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "size-6 overflow-hidden rounded-full ring-1 ring-primary",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: "/brand/avatar.jpg",
										alt: "Sprout",
										className: "size-full object-cover scale-110"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 29,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 28,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs font-semibold tracking-wider text-fg uppercase",
									children: "Onchain Eco-Native Brand"
								}, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 31,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-3 w-px bg-border" }, void 0, false, {
									fileName: _jsxFileName$9,
									lineNumber: 34,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "flex items-center gap-1 text-xs text-primary font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 36,
										columnNumber: 15
									}, this), "12,560 Trees Planted"]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 35,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 27,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-6 font-display text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-fg sm:text-5xl md:text-6xl lg:text-7xl",
							children: ["Most projects launch a token.", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mt-2 block text-cream",
								children: "We grow a narrative."
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 43,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 41,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-fg font-medium",
								children: "SPROUT"
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 47,
								columnNumber: 13
							}, this), " connects crypto with sustainability. We don’t just grow trees online on a screen — we harness onchain token activity and market milestones to plant real, living saplings in offline soils around the planet."]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 46,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 53,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-fg",
										children: "$50K MC = 5 Saplings"
									}, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 54,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 52,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-3.5 text-cream" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 57,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "50/50 Rewards Breakdown" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 58,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 56,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5 rounded-lg bg-surface/80 px-3 py-1.5 border border-border backdrop-blur-sm",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3.5 text-primary" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 61,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "15 Countries Seeded" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 62,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 60,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$9,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3.5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								asChild: true,
								size: "lg",
								variant: "cream",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#impact-map",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName$9,
										lineNumber: 69,
										columnNumber: 17
									}, this), "Explore Global Map"]
								}, void 0, true, {
									fileName: _jsxFileName$9,
									lineNumber: 68,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$9,
								lineNumber: 67,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$9,
							lineNumber: 66,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$9,
					lineNumber: 25,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/digital-to-offline.tsx";
function DigitalToOffline() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "mission-real",
		className: "relative border-t border-border bg-surface py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 11,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Grow Online. Plant Offline." }, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 12,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 10,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl",
							children: ["More trees. ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-cream",
								children: "A brighter tomorrow."
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 15,
								columnNumber: 25
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 14,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 text-base leading-relaxed text-muted sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
								className: "text-fg font-semibold",
								children: "SPROUT"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 18,
								columnNumber: 13
							}, this), " is a community-driven initiative that connects the digital crypto world with real-world reforestation. We believe that together, we can turn online momentum and token activity into a healthier, greener planet for future generations."]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 17,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative overflow-hidden rounded-2xl border border-border bg-bg p-7 sm:p-9 shadow-sm transition-all hover:border-primary/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 27,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 26,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-5 font-display text-2xl font-medium text-fg",
								children: "Real-world dirt, not just pixels on screen"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted sm:text-base",
								children: [
									"This isn’t about growing simulated trees on a dashboard or trading virtual forests. We use onchain participation, decentralized community coordination, and viral meme culture to trigger ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "text-fg font-medium",
										children: "tangible physical saplings"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 33,
										columnNumber: 201
									}, this),
									" planted directly into living soil across degraded biomes worldwide."
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 32,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-center gap-2 text-xs font-medium text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-primary animate-pulse" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 36,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Verified offline planting with geo-tagged coordinates" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 37,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 35,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 25,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative overflow-hidden rounded-2xl border border-border bg-bg p-7 sm:p-9 shadow-sm transition-all hover:border-cream/40",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-12 items-center justify-center rounded-xl bg-cream/15 text-cream",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RefreshCw, { className: "size-6" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 44,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 43,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-5 font-display text-2xl font-medium text-fg",
								children: "Token velocity funding nature — not a charity middleman"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 46,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted sm:text-base",
								children: [
									"We are not a traditional company collecting donations or taking overhead cuts. SPROUT directly bridges ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "text-fg font-medium",
										children: "crypto liquidity with global sustainability"
									}, void 0, false, {
										fileName: _jsxFileName$8,
										lineNumber: 50,
										columnNumber: 118
									}, this),
									": automated trading rewards and community milestones power reforestation initiatives, turning decentralized financial energy into a self-sustaining ecological engine."
								]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 49,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 flex items-center gap-2 text-xs font-medium text-cream",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 53,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Token rewards fund planting + growth 50/50" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 54,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 52,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 42,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 63,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 62,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-base font-semibold text-fg",
								children: "REAL IMPACT"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 66,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: "Trees planted in real, monitored geographical locations by local conservationists."
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 67,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 65,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 61,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-cream/20 text-cream",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Globe, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 75,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 74,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-base font-semibold text-fg",
								children: "GLOBAL REACH"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 78,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: "A greener planet together across 15+ countries, from the Amazon to the Sahel."
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 79,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 77,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 73,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-start gap-4 rounded-xl border border-border/80 bg-surface-2/60 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 87,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 86,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
								className: "font-display text-base font-semibold text-fg",
								children: "TRANSPARENT"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 90,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs leading-relaxed text-muted",
								children: "Verified onchain receipts, drone footage, and verifiable sapling documentation."
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 91,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 89,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 85,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-12 overflow-hidden rounded-full ring-2 ring-primary/40",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/avatar.jpg",
								alt: "Sprout",
								className: "size-full object-cover"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 102,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 101,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-base font-medium text-fg",
							children: "See where every sapling is rooted"
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 105,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-muted",
							children: "Check out our interactive satellite planting map and verified counts"
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 106,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$8,
							lineNumber: 104,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 100,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "leaf",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "#how-it-works",
								children: ["How It Works ($50K = 5)", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
									fileName: _jsxFileName$8,
									lineNumber: 113,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$8,
								lineNumber: 111,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 110,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "outline",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "#impact-map",
								children: "View Global Map"
							}, void 0, false, {
								fileName: _jsxFileName$8,
								lineNumber: 117,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$8,
							lineNumber: 116,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$8,
						lineNumber: 109,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$8,
					lineNumber: 99,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$8,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/components/milestone-engine.tsx";
var PRESET_MILESTONES = [
	{
		mc: 5e4,
		label: "$50K",
		saplings: 5,
		status: "completed"
	},
	{
		mc: 1e5,
		label: "$100K",
		saplings: 10,
		status: "completed"
	},
	{
		mc: 25e4,
		label: "$250K",
		saplings: 25,
		status: "active"
	},
	{
		mc: 5e5,
		label: "$500K",
		saplings: 50,
		status: "upcoming"
	},
	{
		mc: 1e6,
		label: "$1M",
		saplings: 100,
		status: "upcoming"
	},
	{
		mc: 5e6,
		label: "$5M",
		saplings: 500,
		status: "upcoming"
	},
	{
		mc: 1e7,
		label: "$10M",
		saplings: 1e3,
		status: "upcoming"
	}
];
function MilestoneEngine() {
	const [currentCalcMc, setCurrentCalcMc] = (0, import_react.useState)(5e5);
	const calculatedSaplings = Math.floor(currentCalcMc / 5e4) * 5;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "how-it-works",
		className: "relative border-t border-border bg-bg py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 26,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Milestone-Driven Mechanism" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 27,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 25,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-4 font-display text-3xl font-medium tracking-tight text-fg sm:text-4xl lg:text-5xl",
								children: ["How It Works: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-primary",
									children: "$50K = 5 Saplings"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 30,
									columnNumber: 29
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-base leading-relaxed text-muted sm:text-lg",
								children: "Every step of onchain growth is permanently anchored to biological earth. We do not promise vague futures — every single $50,000 market-cap milestone unlocks a new verified cohort of saplings."
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 32,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 24,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
							asChild: true,
							variant: "leaf",
							size: "sm",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "#impact-map",
								children: ["View Target Lands", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 40,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 38,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 37,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 36,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 overflow-hidden rounded-3xl border border-border bg-surface shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "lg:col-span-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "inline-flex items-center gap-2 rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cream",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sparkles, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 52,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Core Milestone Formula" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 53,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 51,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 flex flex-col items-start gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-5xl font-extrabold tracking-tight text-fg sm:text-6xl md:text-7xl",
											children: "$50K"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 57,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs font-semibold uppercase tracking-[0.24em] text-muted",
											children: "New Market-Cap Milestone"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 60,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "my-2 font-display text-3xl font-light text-cream/70 sm:text-4xl",
											children: "="
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 63,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl",
											children: "5 SAPLINGS"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 66,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 56,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-6 text-base leading-relaxed text-muted",
									children: "5 more saplings for every new $50K market-cap milestone. Each milestone counts once upon being reached, triggering an automatic allocation to our verified forestry partners."
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 71,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-6 flex flex-wrap gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 77,
												columnNumber: 19
											}, this), "Irreversible milestones"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 76,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 81,
												columnNumber: 19
											}, this), "Geo-tagged trees"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 80,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-surface-2 px-3 py-1.5 text-fg",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-3.5 text-primary" }, void 0, false, {
												fileName: _jsxFileName$7,
												lineNumber: 85,
												columnNumber: 19
											}, this), "Community validated"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 84,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 75,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 50,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-bg p-6 sm:p-8 lg:col-span-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative mb-6 size-48 overflow-hidden rounded-2xl ring-1 ring-primary/25 sm:size-56",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: "/brand/mascot.jpg",
										alt: "Sprout sapling in rich soil",
										className: "size-full object-cover"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 94,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 99,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "absolute bottom-2.5 inset-x-2.5 rounded-lg bg-bg/80 px-3 py-1.5 text-center text-xs font-medium text-cream backdrop-blur-md",
										children: "Living saplings planted in native biomes"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 100,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 93,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "w-full rounded-xl bg-surface-2 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between text-xs text-muted",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-medium uppercase tracking-[0.14em]",
											children: "Simulate Market Cap"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 108,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display font-semibold text-fg text-sm",
											children: [
												"$",
												(currentCalcMc / 1e3).toLocaleString(),
												"K"
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 109,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 107,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "range",
										min: 5e4,
										max: 5e6,
										step: 5e4,
										value: currentCalcMc,
										onChange: (e) => setCurrentCalcMc(Number(e.target.value)),
										"aria-label": "Simulate market cap milestones",
										className: "mt-3 w-full accent-primary cursor-pointer"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 111,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-4 flex items-center justify-between rounded-lg bg-bg px-4 py-3 border border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-xs text-muted",
											children: "Yields offline:"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 122,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-lg font-bold text-primary tabular-nums",
											children: [calculatedSaplings.toLocaleString(), " Verified Saplings"]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 123,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 121,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 106,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 92,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 48,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-t border-border bg-surface-2/40 px-6 py-4 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-muted mb-3",
							children: "Milestone Progressions"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 133,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7",
							children: PRESET_MILESTONES.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setCurrentCalcMc(m.mc),
								className: `flex flex-col rounded-lg p-2.5 text-left transition-all border ${currentCalcMc === m.mc ? "border-primary bg-primary/10 text-fg" : "border-border bg-bg/60 text-muted hover:border-primary/40 hover:text-fg"}`,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-display text-sm font-semibold",
									children: m.label
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 148,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-primary font-medium",
									children: [
										"+",
										m.saplings,
										" trees"
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 149,
									columnNumber: 19
								}, this)]
							}, m.mc, true, {
								fileName: _jsxFileName$7,
								lineNumber: 138,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 136,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 132,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 rounded-3xl border border-primary/30 bg-surface p-7 sm:p-10 shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-10 items-center justify-center rounded-xl bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChartPie, { className: "size-5" }, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 160,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 159,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-xl font-medium text-fg sm:text-2xl",
								children: "Exact Breakdown: How Token Rewards Are Used"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 163,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs text-muted sm:text-sm",
								children: "Complete transparency for all generated fees and community rewards."
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 166,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 162,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 158,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 grid gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-2xl border border-cream/30 bg-bg p-6 relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-3xl font-extrabold text-cream sm:text-4xl",
											children: "50%"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 176,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded-full bg-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cream",
											children: "Growth & Promotion"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 177,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 175,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "mt-4 font-display text-lg font-medium text-fg",
										children: "Scaling Community, Narrative & Liquidity"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 181,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "50% of the rewards will go directly toward growing and promoting the project. This covers global marketing campaigns, viral creator bounties, community incentives, exchange integrations, and spreading the eco-crypto narrative to onboard millions of new holders into the mission."
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 184,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 174,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-2xl border border-primary/40 bg-bg p-6 relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-baseline justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "font-display text-3xl font-extrabold text-primary sm:text-4xl",
											children: "50%"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 192,
											columnNumber: 17
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary",
											children: "Eco & Reforestation"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 193,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$7,
										lineNumber: 191,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "mt-4 font-display text-lg font-medium text-fg",
										children: "Environmental Initiatives & Offline Planting"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 197,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted",
										children: "The other 50% of the rewards will go directly toward verified environmental initiatives, acquiring native tree saplings, paying fair living wages to local community planters on the ground, securing planting land, and funding satellite verification."
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 200,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 190,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$7,
							lineNumber: 172,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 rounded-2xl border border-border bg-surface-2 p-6",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-cream/15 text-cream",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldAlert, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 210,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 209,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "space-y-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
											className: "font-display text-base font-semibold text-fg",
											children: "Team Allocation & Separation of Funds"
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 213,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-sm leading-relaxed text-muted",
											children: [
												"Since our team’s allocation will only be ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-fg font-medium",
													children: "1–2% of the total token supply"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 217,
													columnNumber: 60
												}, this),
												" and will be managed and vested separately, ",
												/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
													className: "text-fg font-medium",
													children: "we do not count it as part of the project funds"
												}, void 0, false, {
													fileName: _jsxFileName$7,
													lineNumber: 217,
													columnNumber: 183
												}, this),
												"."
											]
										}, void 0, true, {
											fileName: _jsxFileName$7,
											lineNumber: 216,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
											className: "text-xs leading-relaxed text-muted/90",
											children: "Every dollar in the 50/50 reward split is strictly reserved for ecosystem expansion and real sapling purchases. We do not extract founder salaries or administrative cuts from planting capital."
										}, void 0, false, {
											fileName: _jsxFileName$7,
											lineNumber: 219,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$7,
									lineNumber: 212,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 208,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 207,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$7,
					lineNumber: 157,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 21,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 20,
		columnNumber: 5
	}, this);
}
var _jsxFileName$6 = "/app/applet/src/components/impact-map-section.tsx";
var PLANTING_LOCATIONS = [
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
		radius: 36
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
		radius: 20
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
		radius: 24
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
		radius: 34
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
		radius: 20
	},
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
		radius: 26
	},
	{
		id: "appalachia-usa",
		name: "Appalachian Reforestation Project",
		country: "USA (Kentucky/Virginia)",
		region: "North America",
		trees: 2e3,
		status: "upcoming",
		species: "American Chestnut, White Oak, Sugar Maple",
		description: "Reclaiming historical strip-mining land into lush, carbon-dense hardwood deciduous forests.",
		top: 44,
		left: 23,
		radius: 28
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
		radius: 22
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
		radius: 20
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
		radius: 16
	}
];
function ImpactMapSection() {
	const [selectedLocation, setSelectedLocation] = (0, import_react.useState)(PLANTING_LOCATIONS[0]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "impact-map",
		className: "relative border-t border-border bg-[#03150d] py-20 text-fg sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 160,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto max-w-6xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.24em] text-primary",
							children: "OUR IMPACT"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 165,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-3 font-display text-4xl font-extrabold uppercase tracking-tight text-fg sm:text-5xl lg:text-6xl",
							children: "A GREENER WORLD."
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 168,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-base leading-relaxed text-muted sm:text-lg",
							children: [
								"Explore our global impact. Every dot represents a location where trees have been (or will be) planted through the ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
									className: "text-fg font-semibold",
									children: "SPROUT"
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 172,
									columnNumber: 127
								}, this),
								" community."
							]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 171,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 164,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex flex-wrap items-center gap-6 text-sm font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-fg",
								children: "Trees planted"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 179,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 178,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-3.5 rounded-full bg-[#c8e2a8] opacity-90 shadow-[0_0_8px_#c8e2a8]" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 182,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted",
								children: "Upcoming planting"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 183,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 181,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs text-muted/70 sm:ml-auto",
							children: "Interactive map: Tap any beacon for field data"
						}, void 0, false, {
							fileName: _jsxFileName$6,
							lineNumber: 185,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 177,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative mt-8 overflow-hidden rounded-3xl border border-primary/30 bg-[#020d08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative aspect-[16/10] sm:aspect-[16/9] w-full select-none overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/impact-map.jpg",
								alt: "Global Reforestation Satellite Map showing planting locations with glowing green dots",
								className: "size-full object-cover object-center"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 194,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020d08]/90 via-transparent to-[#020d08]/40" }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 201,
								columnNumber: 13
							}, this),
							PLANTING_LOCATIONS.map((loc) => {
								const isSelected = selectedLocation.id === loc.id;
								const isPlanted = loc.status === "planted";
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									onClick: () => setSelectedLocation(loc),
									"aria-label": `${loc.name} - ${loc.trees.toLocaleString()} trees`,
									style: {
										top: `${loc.top}%`,
										left: `${loc.left}%`,
										width: `${loc.radius}px`,
										height: `${loc.radius}px`,
										transform: "translate(-50%, -50%)"
									},
									className: "group absolute cursor-pointer focus:outline-none",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-0 rounded-full animate-ping opacity-60 transition-transform ${isPlanted ? "bg-[#6db35a]" : "bg-[#c8e2a8]"}` }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 224,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-0 rounded-full border-2 transition-all duration-300 ${isSelected ? "border-white bg-white/30 scale-125 shadow-[0_0_20px_#6db35a]" : isPlanted ? "border-[#6db35a]/80 bg-[#6db35a]/40 group-hover:scale-110 shadow-[0_0_12px_#6db35a]" : "border-[#c8e2a8]/80 bg-[#c8e2a8]/30 group-hover:scale-110 shadow-[0_0_10px_#c8e2a8]"}` }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 230,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-[30%] rounded-full shadow-sm ${isPlanted ? "bg-[#e8efdf]" : "bg-[#ffffff]"}` }, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 240,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden whitespace-nowrap rounded-lg bg-black/90 px-2.5 py-1 text-xs font-semibold text-white shadow-xl backdrop-blur-md group-hover:block z-20",
											children: [
												loc.name,
												" (",
												loc.trees.toLocaleString(),
												" saplings)"
											]
										}, void 0, true, {
											fileName: _jsxFileName$6,
											lineNumber: 247,
											columnNumber: 19
										}, this)
									]
								}, loc.id, true, {
									fileName: _jsxFileName$6,
									lineNumber: 209,
									columnNumber: 17
								}, this);
							})
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 193,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-t border-border/80 bg-surface/95 p-5 backdrop-blur-md sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-start gap-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${selectedLocation.status === "planted" ? "bg-primary/20 text-primary" : "bg-cream/20 text-cream"}`,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 264,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 259,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "font-display text-lg font-bold text-fg sm:text-xl",
												children: selectedLocation.name
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 268,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-xs uppercase tracking-wider text-muted",
												children: [
													"(",
													selectedLocation.country,
													")"
												]
											}, void 0, true, {
												fileName: _jsxFileName$6,
												lineNumber: 271,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: `inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${selectedLocation.status === "planted" ? "bg-primary/20 text-primary" : "bg-cream/20 text-cream"}`,
												children: selectedLocation.status === "planted" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 281,
													columnNumber: 27
												}, this), "Planted & Monitored"] }, void 0, true, {
													fileName: _jsxFileName$6,
													lineNumber: 280,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3" }, void 0, false, {
													fileName: _jsxFileName$6,
													lineNumber: 286,
													columnNumber: 27
												}, this), "Upcoming Cohort"] }, void 0, true, {
													fileName: _jsxFileName$6,
													lineNumber: 285,
													columnNumber: 25
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName$6,
												lineNumber: 274,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 267,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 text-xs text-muted sm:text-sm",
										children: selectedLocation.description
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 292,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-2 text-xs font-medium text-cream",
										children: ["Native Species: ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "text-fg",
											children: selectedLocation.species
										}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 296,
											columnNumber: 37
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 295,
										columnNumber: 19
									}, this)
								] }, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 266,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 258,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex shrink-0 items-center gap-4 self-end md:self-center",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block font-display text-2xl font-extrabold text-primary tabular-nums",
										children: selectedLocation.trees.toLocaleString()
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 303,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "block text-xs uppercase tracking-wider text-muted",
										children: "Saplings"
									}, void 0, false, {
										fileName: _jsxFileName$6,
										lineNumber: 306,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$6,
									lineNumber: 302,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									asChild: true,
									variant: "leaf",
									size: "sm",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#poll",
										children: ["Vote Next Land", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, {}, void 0, false, {
											fileName: _jsxFileName$6,
											lineNumber: 313,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$6,
										lineNumber: 311,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 310,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 301,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 257,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 256,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 191,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-primary/30 bg-[#051c12] p-6 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TreePine, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 326,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 325,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums",
								children: "12,560"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 329,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-xs font-semibold uppercase tracking-[0.16em] text-primary mt-0.5",
								children: "Trees Planted"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 332,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 328,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 324,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-primary/30 bg-[#051c12] p-6 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-cream/20 text-cream",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 341,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 340,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums",
								children: "15"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 344,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-xs font-semibold uppercase tracking-[0.16em] text-cream mt-0.5",
								children: "Countries"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 347,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 343,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 339,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-border bg-[#051c12] p-6 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-primary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 356,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 355,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums",
								children: "94.8%"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 359,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-xs font-semibold uppercase tracking-[0.16em] text-muted mt-0.5",
								children: "Sapling Survival Rate"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 362,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 358,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 354,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-4 rounded-2xl border border-border bg-[#051c12] p-6 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-cream/20 text-cream",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Earth, { className: "size-8" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 371,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 370,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-display text-3xl font-extrabold text-fg sm:text-4xl tabular-nums",
								children: "100%"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 374,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "block text-xs font-semibold uppercase tracking-[0.16em] text-muted mt-0.5",
								children: "Community Voted"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 377,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 373,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$6,
							lineNumber: 369,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 322,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 162,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 158,
		columnNumber: 5
	}, this);
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
	waterAll: () => {
		const { plants } = get();
		set({ plants: plants.map((p) => ({
			...p,
			stage: Math.min(3, p.stage + 1),
			wateredAt: Date.now()
		})) });
	},
	clearGrove: () => {
		set({ plants: [] });
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
var _jsxFileName$5 = "/app/applet/src/components/grove.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "grove",
		className: "relative border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
								children: "The grove"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 62,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
								children: shownName ? `${shownName}'s grove` : "Plant something that stays."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 65,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-base leading-relaxed text-muted",
								children: [
									"This is a personal digital grove for our early community members. While this plot lives in your browser, every real sapling is financed through our ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: "#how-it-works",
										className: "text-primary underline",
										children: "50 = 5 Milestone Formula"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 70,
										columnNumber: 97
									}, this),
									" and planted in offline forests across the globe."
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 68,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 61,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex h-10 items-center gap-2 rounded-lg bg-surface px-3 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "size-4 text-primary" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 75,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "tabular-nums text-fg",
									children: shown.length
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 76,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
									"/ ",
									12,
									" planted"
								] }, void 0, true, {
									fileName: _jsxFileName$5,
									lineNumber: 77,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 74,
							columnNumber: 13
						}, this), shown.length > 0 && /* @__PURE__ */ (void 0)(Button, {
							variant: "outline",
							size: "sm",
							onClick: () => useGrove.getState().waterAll(),
							className: "text-xs",
							children: [/* @__PURE__ */ (void 0)(Droplets, { className: "size-3.5 text-primary" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 86,
								columnNumber: 17
							}, this), "Water all"]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 80,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 73,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-4 sm:p-5",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "size-6 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-0.5",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Sprout, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 97,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 96,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1 text-xs sm:text-sm leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-fg",
								children: "Grow Online, Plant Offline Distinction:"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 100,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"Tapping the soil below nurtures your personal digital pledge. Real trees are not planted by clicking a screen — they are triggered by onchain market milestones and planted by our certified forestry partners. View the ",
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#impact-map",
									className: "text-primary font-medium underline",
									children: "Global Satellite Impact Map"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 102,
									columnNumber: 234
								}, this),
								" to see real-world trees."
							] }, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 101,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 99,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 95,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 94,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 overflow-hidden rounded-3xl bg-soil p-1.5 shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: onBedClick,
						"aria-label": "Grove soil. Tap empty ground to plant, tap a sprout to water.",
						className: "relative block min-h-[420px] w-full overflow-hidden rounded-[18px] sm:min-h-[520px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: "/brand/moss.jpg",
								alt: "",
								className: "absolute inset-0 size-full object-cover"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 115,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/25",
								"aria-hidden": "true"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 120,
								columnNumber: 13
							}, this),
							empty ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-none absolute inset-0 flex items-center justify-center px-6",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "rounded-full bg-bg/70 px-4 py-2 text-sm text-cream backdrop-blur-sm",
									children: "This soil is waiting. Tap to plant."
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 126,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 125,
								columnNumber: 15
							}, this) : null,
							shown.slice().sort((a, b) => a.y - b.y).map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PlantSprite, {
								plant: p,
								dripping: drips.includes(p.id)
							}, p.id, false, {
								fileName: _jsxFileName$5,
								lineNumber: 135,
								columnNumber: 17
							}, this))
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 109,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 108,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm text-muted",
						role: "status",
						children: note
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 145,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "inline-flex items-center gap-1.5 text-xs text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Droplets, { className: "size-3.5" }, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 149,
							columnNumber: 13
						}, this), "Water a sprout to move seed → growing → rooted."]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 148,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 144,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
			lineNumber: 59,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$5,
		lineNumber: 58,
		columnNumber: 5
	}, this);
}
function PlantSprite({ plant, dripping }) {
	const depth = .72 + plant.y / 100 * .45;
	const stageScale = plant.stage === 1 ? .88 : plant.stage === 2 ? 1.05 : 1.22;
	const size = 168 * depth * stageScale;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		"data-plant-id": plant.id,
		className: "sprout-rise absolute -translate-x-1/2 -translate-y-[78%] cursor-pointer",
		style: {
			left: `${plant.x}%`,
			top: `${plant.y}%`,
			width: size,
			zIndex: 10 + Math.round(plant.y)
		},
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: "/brand/mascot.jpg",
			alt: STAGE_LABEL[plant.stage],
			draggable: false,
			className: cn("plant-face pointer-events-none block w-full select-none rounded-full outline-none ring-2 ring-cream/35 transition-[transform,filter] duration-500 ease-out", plant.stage === 3 && "brightness-110 ring-primary/50")
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 174,
			columnNumber: 7
		}, this), dripping ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "pointer-events-none absolute left-1/2 top-1 -translate-x-1/2 text-cream",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Droplets, { className: "drip size-5" }, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 185,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 184,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 164,
		columnNumber: 5
	}, this);
}
function GroveName() {
	const gardener = useGrove((s) => s.gardener);
	const hydrated = useHydratedFlag();
	const setGardener = useGrove((s) => s.setGardener);
	const [draft, setDraft] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (hydrated) setDraft(gardener);
	}, [gardener, hydrated]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		className: "flex flex-col gap-2 sm:flex-row sm:items-center",
		onSubmit: (e) => {
			e.preventDefault();
			setGardener(draft);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				htmlFor: "gardener",
				className: "sr-only",
				children: "Your name"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 210,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
				id: "gardener",
				value: draft,
				onChange: (e) => setDraft(e.target.value),
				placeholder: "Name your grove",
				maxLength: 24,
				className: "h-11 min-w-0 flex-1 rounded-lg bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/70"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 213,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
				type: "submit",
				variant: "leaf",
				className: "h-11",
				children: "Save"
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 221,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 203,
		columnNumber: 5
	}, this);
}
var X_URL = "https://x.com/sproutonchain";
var X_HANDLE = "@sproutonchain";
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
	"A small sprout with a big mission: bringing degens together to grow real-world forests.",
	"Grow online. Plant offline.",
	"Early days. Strong roots. If you see it now, you are early."
];
var _jsxFileName$4 = "/app/applet/src/components/poll.tsx";
function Poll() {
	const hydrated = useHydratedFlag();
	const vote = useGrove((s) => s.vote);
	const setVote = useGrove((s) => s.setVote);
	const shownVote = hydrated ? vote : null;
	const counts = Object.fromEntries(regions.map((r) => [r.id, r.base + (shownVote === r.id ? 1 : 0)]));
	const total = Object.values(counts).reduce((a, b) => a + b, 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "poll",
		className: "border-t border-border bg-bg/50 px-4 py-10 sm:px-6 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-4xl rounded-2xl border border-border/80 bg-surface/75 p-5 shadow-sm backdrop-blur-sm sm:rounded-3xl sm:p-7 md:p-8",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-2 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-primary",
							children: "Community Ballot"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 22,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-xs text-muted",
							children: [total, " votes recorded"]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 25,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 21,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "mt-2 font-display text-xl font-bold text-fg sm:text-2xl",
						children: "Where should SPROUT green next?"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 29,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-muted sm:text-sm",
						children: "One vote per grove. The winning region will be surveyed first for our next planting cohort."
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 32,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 20,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 19,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: regions.map((r, idx) => {
					const n = counts[r.id];
					const pct = total ? Math.round(n / total * 100) : 0;
					const selected = shownVote === r.id;
					const isLastOdd = idx === regions.length - 1 && regions.length % 2 === 1;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
						className: cn(isLastOdd && "sm:col-span-2"),
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setVote(r.id),
							"aria-pressed": selected,
							className: cn("flex h-full w-full flex-col justify-between gap-3 rounded-xl border border-border/60 bg-bg/70 p-3.5 text-left transition-all duration-150 hover:border-primary/50 hover:bg-bg sm:p-4", selected && "border-primary bg-bg ring-1 ring-primary/40"),
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-display text-base font-semibold text-fg",
									children: r.name
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 58,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-md bg-surface px-1.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-muted",
									children: r.place
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 61,
									columnNumber: 23
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 57,
								columnNumber: 21
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1.5 text-xs leading-relaxed text-muted line-clamp-2",
								children: r.body
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 65,
								columnNumber: 21
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 56,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pt-2 border-t border-border/40",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-medium tabular-nums text-fg",
										children: [pct, "%"]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 72,
										columnNumber: 23
									}, this), selected ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-semibold text-primary",
										children: "Your Vote"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 74,
										columnNumber: 25
									}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-muted hover:text-fg",
										children: "Tap to vote"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 76,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 71,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "h-full rounded-full bg-primary transition-all duration-500 ease-out",
										style: { width: `${pct}%` }
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 80,
										columnNumber: 23
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 79,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 70,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 47,
							columnNumber: 17
						}, this)
					}, r.id, false, {
						fileName: _jsxFileName$4,
						lineNumber: 46,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 38,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/manifesto.tsx";
function Manifesto() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "manifesto",
		className: "relative isolate overflow-hidden border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: "/brand/soil.jpg",
				alt: "A tiny green sprout breaking through dark mossy soil",
				className: "absolute inset-0 size-full object-cover"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 bg-bg/78",
				"aria-hidden": "true"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-medium uppercase tracking-[0.22em] text-cream",
						children: "From the first post"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
						className: "mt-8 space-y-8",
						children: manifesto.map((line) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "font-display text-2xl font-medium leading-snug text-fg sm:text-3xl",
							children: line
						}, line, false, {
							fileName: _jsxFileName$3,
							lineNumber: 18,
							columnNumber: 13
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 16,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-10 text-sm text-muted",
						children: "— SPROUT, September 2026"
					}, void 0, false, {
						fileName: _jsxFileName$3,
						lineNumber: 26,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 12,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/join.tsx";
function Join() {
	const hydrated = useHydratedFlag();
	const plants = useGrove((s) => s.plants.length);
	const vote = useGrove((s) => s.vote);
	const gardener = useGrove((s) => s.gardener);
	const shownPlants = hydrated ? plants : 0;
	const shownVote = hydrated ? vote : null;
	const shownName = hydrated ? gardener : "";
	const ready = shownPlants > 0 && Boolean(shownVote);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "join",
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-primary",
					children: "If you see it now"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 22,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-3 font-display text-3xl font-medium text-fg sm:text-4xl",
					children: "You are early. Follow the growth."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 25,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "Name your grove. Plant. Vote the next land. Then hold the line on X while the contract, the treasury, and the first planting are cooked in public."
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GroveName, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 34,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 33,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: X_URL,
							target: "_blank",
							rel: "noreferrer",
							children: [
								"Follow ",
								X_HANDLE,
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, {}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 40,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 38,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 37,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
						asChild: true,
						variant: "outline",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: "#grove",
							children: "Return to the grove"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 44,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 43,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 36,
					columnNumber: 11
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 21,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-3xl bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-muted",
						children: "Your roots"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 49,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
						className: "mt-6 grid grid-cols-2 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: "Grove"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 54,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "mt-1 font-display text-2xl text-fg",
								children: shownName || "Unnamed"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 55,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
								className: "text-xs uppercase tracking-[0.16em] text-muted",
								children: "Planted"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 60,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
								className: "mt-1 font-display text-2xl tabular-nums text-fg",
								children: shownPlants
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 61,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 59,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
									className: "text-xs uppercase tracking-[0.16em] text-muted",
									children: "Next land"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 66,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
									className: "mt-1 font-display text-2xl text-fg",
									children: regionLabel(shownVote)
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 69,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 65,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 52,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-8 text-sm leading-relaxed text-muted",
						children: ready ? "You did the three early things: a name, a sprout, a vote. That is enough to be counted." : "Plant at least one sprout and cast a vote. That is the whole onboarding."
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 74,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site-footer.tsx";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-border bg-[#020d08] text-fg",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-8 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "#top",
								className: "inline-flex items-center gap-3 text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SproutMark, { size: "md" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 11,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-display text-xl font-bold tracking-tight",
									children: "SPROUT"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 12,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 10,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 max-w-sm text-sm leading-relaxed text-muted",
								children: "Connecting crypto with sustainability. Turning onchain momentum into verified real-world reforestation. Grow online, plant offline."
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 14,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 flex items-center gap-2 text-xs text-primary",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-primary animate-pulse" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 18,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "12,560 trees planted across 15 countries" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 19,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 17,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 9,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-2 gap-6 sm:grid-cols-2 md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-cream",
							children: "Initiative"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 25,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#mission-real",
									className: "hover:text-fg transition-colors",
									children: "Real Impact"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 30,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 29,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#how-it-works",
									className: "hover:text-fg transition-colors",
									children: "How It Works ($50K = 5)"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 35,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 34,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#impact-map",
									className: "hover:text-fg transition-colors",
									children: "Global Impact Map"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 40,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 39,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 28,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 24,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-cream",
							children: "Community"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 47,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-3 space-y-2 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#grove",
									className: "hover:text-fg transition-colors",
									children: "The Grove"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 52,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 51,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "#poll",
									className: "hover:text-fg transition-colors",
									children: "Vote Next Land"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 57,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 56,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: X_URL,
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-fg transition-colors",
									children: [X_HANDLE, " on X"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 62,
									columnNumber: 19
								}, this) }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 61,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 50,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 46,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 23,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-3 text-xs text-muted md:col-span-3 md:text-right",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[11px] text-muted/70",
							children: [
								"© ",
								(/* @__PURE__ */ new Date()).getFullYear(),
								" SPROUT Onchain Initiative. Verified offline impact."
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 71,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 70,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 8,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Home() {
	useGroveHydration();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteNav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DigitalToOffline, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MilestoneEngine, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImpactMapSection, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grove, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Poll, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Manifesto, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Join, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
