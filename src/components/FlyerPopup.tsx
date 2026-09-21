import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Dialog, DialogDescription, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import flyerImg from "@/assets/project-mansa-flyer.jpg";

const WHATSAPP_NUMBER = "233558240434";
const WHATSAPP_MESSAGE = "Hello, I would like to know more about Project Mansa.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Flyer is 1275x1650 (portrait). Width is capped by both the viewport width and
// the viewport height, so the whole flyer always fits without cropping or scrolling.
const FLYER_RATIO = 1275 / 1650;

// Opens on every mount of the home page (no persistence), so a refresh or
// returning to Home shows it again.
const FlyerPopup = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ width: `min(92vw, calc(88dvh * ${FLYER_RATIO}))` }}
        >
          <DialogTitle className="sr-only">Project Mansa - Phase 1 Training</DialogTitle>
          <DialogDescription className="sr-only">
            Free BSF larvae production training by Wiggling Gold Ltd. Tap the flyer to send us a message on WhatsApp.
          </DialogDescription>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Wiggling Gold about Project Mansa on WhatsApp"
            className="block overflow-hidden rounded-xl shadow-2xl focus-visible:ring-2 focus-visible:ring-white"
          >
            <img
              src={flyerImg}
              alt="Project Mansa flyer: free two-day hands-on Black Soldier Fly training by Wiggling Gold Ltd. Call +233 55 824 0434."
              width={1275}
              height={1650}
              className="block h-auto w-full"
            />
          </a>

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
