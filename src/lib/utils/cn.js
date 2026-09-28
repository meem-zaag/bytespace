import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** Custom type-scale utilities from `globals.css`, so they merge as font sizes (not colors). */
const TYPE_SCALE = [
  "heading-l",
  "heading-m",
  "heading-s",
  "heading-xs",
  "heading-compact",
  "display-s",
  "display-xs",
  "body-l",
  "body-m",
  "body-s",
  "body-xs",
  "label-xl",
  "label-l",
  "label-m",
  "label-s",
  "label-xs",
];

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: TYPE_SCALE,
      radius: ["card", "media"],
      shadow: ["float", "card"],
    },
  },
});

/**
 * Joins class names conditionally and resolves Tailwind conflicts (last one wins).
 *
 * @param {...import("clsx").ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
