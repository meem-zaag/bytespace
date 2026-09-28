import { cn } from "@/lib/utils/cn";

/**
 * Centers content in the 1200px layout column: `max-w-page` = 1200px + 2 × 32px padding, so at
 * the 1440px Figma frame the content keeps its 120px side margins.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as="div"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Container({ as: Component = "div", className, children, ...rest }) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
