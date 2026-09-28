import { cn } from "@/lib/utils/cn";

const TONES = {
  white: "bg-white text-neutral-950",
  blue: "bg-primary-800 text-neutral-50",
  lime: "bg-lime-400 text-neutral-950",
};

/**
 * Shell of the small floating cards in the hero and feature sections (Figma: 16px radius,
 * 16px padding, 8px gap, 20px background blur).
 *
 * @param {object} props
 * @param {"white" | "blue" | "lime"} [props.tone="white"]
 * @param {keyof JSX.IntrinsicElements} [props.as="div"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function StatCard({ tone = "white", as: Component = "div", className, children }) {
  return (
    <Component
      className={cn(
        "flex flex-col gap-2 rounded-2xl p-4 backdrop-blur-[10px]",
        TONES[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
