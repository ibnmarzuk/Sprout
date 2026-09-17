import { cn } from "@/lib/utils";

export function SproutMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizeMap = {
    sm: "size-6",
    md: "size-8 sm:size-9",
    lg: "size-12",
    xl: "size-16 sm:size-20",
  };

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/40 shadow-[0_0_12px_rgba(109,179,90,0.25)] bg-[#002015] transition-transform duration-200 hover:scale-105",
        sizeMap[size],
        className,
      )}
    >
      <img
        src="/brand/avatar.jpg"
        alt="SPROUT Mascot"
        className="size-full object-cover scale-110"
        loading="eager"
      />
    </div>
  );
}

