import { cn } from "@/lib/utils";

export function SproutMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <circle cx="16" cy="18" r="8.2" fill="currentColor" className="text-cream" />
      <path
        d="M16 14c0-5 3.2-8.5 7.5-9.5-1.4 4.2-3.8 6.8-7.5 8.2Z"
        fill="currentColor"
        className="text-primary"
      />
      <path
        d="M16 14c0-5-3.2-8.5-7.5-9.5 1.4 4.2 3.8 6.8 7.5 8.2Z"
        fill="currentColor"
        className="text-primary"
      />
      <circle cx="13.6" cy="18.2" r="1.05" fill="currentColor" className="text-bg" />
      <circle cx="18.4" cy="18.2" r="1.05" fill="currentColor" className="text-bg" />
    </svg>
  );
}
