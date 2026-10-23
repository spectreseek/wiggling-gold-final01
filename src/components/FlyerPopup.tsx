import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, X, Calendar, MapPin } from "lucide-react";
import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import flyerImg from "@/assets/bsf-training-oct31-flyer.jpg";

// Flyer aspect ratio (portrait)
const FLYER_RATIO = 1000 / 1400;
const CTA_HEIGHT = "3.25rem";

const SEEN_KEY = "wg-bsf-oct31-training-flyer-seen-v1";

const isPopupSuppressed = () => {
  try {
    if (typeof window !== "undefined") {
      const search = new URLSearchParams(window.location.search);
      if (
        search.get("nopopup") === "1" ||
        search.get("nopopup") === "true" ||
        search.get("preview") === "1" ||
        search.get("hidepopup") === "1"
      ) {
        return true;
      }
    }
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const markFlyerSeen = () => {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Ignore storage errors in private mode
  }
};

const FlyerPopup = () => {
  const location = useLocation();
  const [open, setOpen] = useState(() => !isPopupSuppressed());

  // Re-check whenever location search changes
  useEffect(() => {
    if (isPopupSuppressed()) {
      setOpen(false);
    }
  }, [location.search]);

  useEffect(() => {
    if (open) markFlyerSeen();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ width: `min(92vw, calc((96dvh - ${CTA_HEIGHT}) * ${FLYER_RATIO}))` }}
        >
          <DialogTitle className="sr-only">Black Soldier Fly Farming Group Training - 31st October</DialogTitle>
          <DialogDescription className="sr-only">
            Upcoming Black Soldier Fly Farming practical masterclass at Rufus Green Park, Adenta, Accra on 31st October 2026.
            Registration fee ₵120, total fee ₵620. Deadline 24th October 2026.
          </DialogDescription>

          <Link
            to="/trainings"
            onClick={() => setOpen(false)}
            aria-label="View 31st October BSF Training details and register"
            className="group block overflow-hidden rounded-2xl bg-wg-ink shadow-2xl ring-1 ring-white/10 transition-transform focus-visible:ring-2 focus-visible:ring-wg-sun"
          >
            {/* Top Alert Banner */}
            <div className="flex items-center justify-between gap-2 bg-wg-ink px-4 py-2 text-xs font-bold text-wg-sun">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-wg-lime" />
                31st October, 2026 • 10am - 2pm
              </span>
              <span className="flex items-center gap-1 text-[11px] text-wg-forest-text">
                <MapPin className="h-3.5 w-3.5 text-wg-sun" />
                Rufus Green Park, Adenta
              </span>
            </div>

            {/* Flyer Image */}
            <div className="relative overflow-hidden bg-wg-forest">
              <img
                src={flyerImg}
                alt="Wiggling Gold 31st October Group Training Flyer: Black Soldier Fly Farming at Rufus Green Park, Adenta"
                width={1000}
                height={1400}
                className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Bottom Call to Action Bar */}
            <div
              className="flex items-center justify-between gap-3 bg-wg-sun px-4 text-wg-ink transition-colors group-hover:bg-amber-300"
              style={{ minHeight: CTA_HEIGHT }}
            >
              <div className="text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-wg-ink/75">
                  Fee: ₵620 • Register with ₵120
                </span>
                <span className="block text-sm font-extrabold sm:text-base">
                  View Details & Register on Website
                </span>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-wg-ink text-wg-sun transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </Link>

          <DialogPrimitive.Close
            aria-label="Close dialog"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/80 text-white shadow-lg backdrop-blur-md transition-all hover:bg-black hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-wg-sun"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default FlyerPopup;
