import GlowBackdrop from "@/components/ui/GlowBackdrop";

/** Figma "Frame 15" glows (positions relative to the frame at 1440px). */
const GLOWS = [
  { tone: "lime", x: -152, y: -466, size: 1137, opacity: 0.4 },
  { tone: "blue", x: 811, y: -458, size: 1137, opacity: 0.08 },
  { tone: "blue", x: -508, y: 183, size: 1137, opacity: 0.16 },
  { tone: "blue", x: 722, y: 788, size: 1137, opacity: 0.24 },
  { tone: "lime", x: -287, y: 946, size: 672, opacity: 0.6 },
];

/**
 * Shared glowing backdrop of the two feature sections ("Your Path to Professional Growth" and
 * "Create & Manage Courses"), which sit on one continuous background in the design.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function ShowcaseBackdrop({ children }) {
  return (
    <GlowBackdrop glows={GLOWS} className="py-20 lg:pt-30 lg:pb-30">
      <div className="flex flex-col gap-20 lg:gap-[72px]">{children}</div>
    </GlowBackdrop>
  );
}
