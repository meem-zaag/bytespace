import { cn } from "@/lib/utils/cn";

/**
 * Brand-blue surface with the Figma 120px grid lines. Used by every hero, the auth pages and the
 * creator CTA banner. Text inside defaults to the light neutral used on blue.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as="section"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function GridBackdrop({ as: Component = "section", className, children, ...rest }) {
  return (
    <Component
      className={cn("relative isolate overflow-hidden bg-brand-grid text-neutral-50", className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
