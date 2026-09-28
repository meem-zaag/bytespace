import { cn } from "@/lib/utils/cn";

const TONES = {
  white: "bg-white text-neutral-950",
  lime: "bg-lime-400 text-neutral-950",
};

const SIZES = {
  md: "gap-2 px-6 py-2 text-label-m",
  lg: "gap-2 px-6 py-3 text-label-l",
};

/**
 * Static information pill used on the blue hero panels
 * ("Intermediate", "4.8 (172 reviews)", "199 Students", "Creator", "3 Products").
 *
 * @param {object} props
 * @param {"white" | "lime"} [props.tone="white"]
 * @param {"md" | "lg"} [props.size="md"]
 * @param {import("react").ReactNode} [props.icon] leading icon (blue in Figma)
 * @param {keyof JSX.IntrinsicElements} [props.as="span"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Pill({
  tone = "white",
  size = "md",
  icon,
  as: Component = "span",
  className,
  children,
  ...rest
}) {
  return (
    <Component
      className={cn(
        "inline-flex shrink-0 items-center rounded-3xl whitespace-nowrap",
        TONES[tone],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {icon && <span className="inline-flex text-primary-800">{icon}</span>}
      {children}
    </Component>
  );
}
