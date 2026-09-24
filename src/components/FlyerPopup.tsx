import { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import flyerImg from "@/assets/project-mansa-flyer.jpg";

// Flyer is 1275x1650 (portrait). Width is capped by both the viewport width and
// the viewport height (minus the register bar under the flyer), so the whole
// popup always fits without cropping or scrolling.
const FLYER_RATIO = 1275 / 1650;
const CTA_HEIGHT = "3rem";

const SEEN_KEY = "wg-mansa-flyer-seen";

// Storage can be blocked (private windows, strict settings). Then the flyer simply shows.
const hasSeenFlyer = () => {
  try {
    return localStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
};

const markFlyerSeen = () => {
  try {
    localStorage.setItem(SEEN_KEY, "1");
  } catch {
    // Nothing to do: the flyer will show again next visit.
  }
};

// Shows once per visitor, so returning to the homepage doesn't cover it every time.
const FlyerPopup = () => {
  const [open, setOpen] = useState(() => !hasSeenFlyer());

  useEffect(() => {
    if (open) markFlyerSeen();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ width: `min(92vw, calc((96dvh - ${CTA_HEIGHT}) * ${FLYER_RATIO}))` }}
        >
          <DialogTitle className="sr-only">Project Mansa - Phase 1 Training</DialogTitle>
          <DialogDescription className="sr-only">
            Free BSF larvae production training by Wiggling Gold Ltd. Select the flyer to register for the training.
          </DialogDescription>

          <Link
            to="/project-mansa#register"
            onClick={() => setOpen(false)}
            aria-label="Register for the free Project Mansa training"
            className="block overflow-hidden rounded-xl shadow-2xl focus-visible:ring-2 focus-visible:ring-white"
          >
            <img
              src={flyerImg}
              alt="Project Mansa flyer: free two-day hands-on Black Soldier Fly training by Wiggling Gold Ltd. Call +233 55 824 0434."
              width={1275}
              height={1650}
              className="block h-auto w-full"
            />
            <span
              className="flex items-center justify-center gap-2 bg-wg-sun px-3 text-base font-bold text-wg-ink transition-colors hover:bg-wg-sun/90"
              style={{ height: CTA_HEIGHT }}
            >
              Register for the free training
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </span>
          </Link>

          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <X className="h-5 w-5" />
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
};

export default FlyerPopup;
