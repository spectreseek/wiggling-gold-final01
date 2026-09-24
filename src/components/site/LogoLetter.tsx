import logo from "@/assets/wigo-logo.png";
import { cn } from "@/lib/utils";

// Horizontal pixel spans of each letter inside the 320x132 WIGO logo. Every letter is one
// stage of the BSF life cycle, so the homepage uses them individually as chapter marks.
const LOGO_WIDTH = 320;
const LOGO_HEIGHT = 132;
const SPANS = {
  W: [4, 106],
  I: [109, 140],
  G: [146, 224],
  O: [227, 311],
} as const;

export type Letter = keyof typeof SPANS;
export const LETTERS = Object.keys(SPANS) as Letter[];

type LogoLetterProps = {
  letter: Letter;
  className?: string;
};

/** Crops one letter out of the logo. Size it by giving it a height; the width follows. */
const LogoLetter = ({ letter, className }: LogoLetterProps) => {
  const [start, end] = SPANS[letter];
  const width = end - start;
  return (
    <span
      aria-hidden="true"
      className={cn("relative inline-block overflow-hidden align-bottom", className)}
      style={{ aspectRatio: `${width} / ${LOGO_HEIGHT}` }}
    >
      <img
        src={logo}
        alt=""
        draggable={false}
        className="absolute top-0 h-full max-w-none select-none"
        style={{ width: `${(LOGO_WIDTH / width) * 100}%`, left: `${(-start / width) * 100}%` }}
      />
    </span>
  );
};

export default LogoLetter;
