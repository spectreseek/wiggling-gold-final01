import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type PhotoSlotProps = {
  /** What the real photo should show, so the shoot list writes itself. */
  shot: string;
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Marks a spot that needs a real Wiggling Gold photo. The old AI-generated images were
 * removed rather than reused; replace each slot with a photo from the farm shoot.
 */
const PhotoSlot = ({ shot, className, tone = "light" }: PhotoSlotProps) => (
  <div
    role="img"
    aria-label={`Photo coming soon: ${shot}`}
    className={cn(
      "flex flex-col items-center justify-center gap-3 rounded-[1.25rem] border-2 border-dashed p-6 text-center",
      tone === "light"
        ? "border-wg-line bg-wg-paper text-wg-muted"
        : "border-wg-soil-line bg-wg-soil-raised text-wg-soil-muted",
      className,
    )}
  >
    <Camera className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
    <p className="max-w-[26ch] text-sm leading-snug">
      <span className="font-semibold">Photo needed:</span> {shot}
    </p>
  </div>
);

export default PhotoSlot;
