// components/FloatingMenuButton.tsx
"use client";

export default function FloatingMenuButton({
  open,
  visible,
  onToggle,
}: {
  open: boolean;
  visible: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
      className={[
        "md:hidden",
        "fixed right-4 top-4 z-50",
        "h-12 w-12 rounded-full",
        "bg-white/70 backdrop-blur",
        "border border-black/15 shadow-lg",
        "grid place-items-center",
        "transition-opacity duration-200",
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <span className="text-black text-[22px] leading-none">
        {open ? "✕" : "☰"}
      </span>
    </button>
  );
}
