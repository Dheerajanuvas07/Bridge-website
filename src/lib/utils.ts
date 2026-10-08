import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Our type scale uses custom names (text-body, text-h1…). Without registering them,
// tailwind-merge reads them as colors and drops real color classes like text-paper.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["small", "body", "lead", "h3", "h2", "h1"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
