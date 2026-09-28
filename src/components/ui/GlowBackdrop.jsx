import { cn } from "@/lib/utils/cn";

const COLORS = {
  blue: "var(--color-primary-800)",
  lime: "var(--color-lime-500)",
};

/**
 * Soft radial color glows behind a light section (Figma radial-gradient ellipses: 100% → 23% at
 * 53% → 6% at 75% → 0%, with a paint opacity). Glows are positioned in a centered 1440px box so
 * they sit where the design puts them; the section clips them.
 *
 * @param {object} props
 * @param {{ tone: "blue" | "lime", x: number, y: number, size: number, opacity: number }[]} props.glows
 * @param {keyof JSX.IntrinsicElements} [props.as="div"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function GlowBackdrop({
  glows,
  as: Component = "div",
  className,
  children,
  ...rest
}) {
  return (
    <Component className={cn("relative isolate overflow-hidden bg-surface", className)} {...rest}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 w-[1440px] -translate-x-1/2"
      >
        {glows.map((glow) => (
          <span
            key={`${glow.tone}-${glow.x}-${glow.y}`}
            className="absolute rounded-full"
            style={{
              left: glow.x,
              top: glow.y,
              width: glow.size,
              height: glow.size,
              opacity: glow.opacity,
              background: `radial-gradient(closest-side, ${COLORS[glow.tone]} 0%, color-mix(in srgb, ${COLORS[glow.tone]} 23%, transparent) 53%, color-mix(in srgb, ${COLORS[glow.tone]} 6%, transparent) 75%, transparent 100%)`,
            }}
          />
        ))}
      </div>
      {children}
    </Component>
  );
}
