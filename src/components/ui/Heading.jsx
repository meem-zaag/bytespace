import { cn } from "@/lib/utils/cn";

/** Figma heading styles, scaled down on small screens. */
const SIZES = {
  l: "text-heading-s sm:text-heading-m lg:text-heading-l",
  m: "text-heading-compact sm:text-heading-s lg:text-heading-m",
  s: "text-heading-compact lg:text-heading-s",
  xs: "text-heading-xs",
  "display-s": "text-display-xs lg:text-display-s",
  "display-xs": "text-heading-compact lg:text-display-xs",
};

/**
 * Poppins heading using the Figma type scale. The visual `size` is independent of the
 * semantic level (`as`), so the document outline stays correct.
 *
 * @param {object} props
 * @param {"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"} [props.as="h2"]
 * @param {"l" | "m" | "s" | "xs" | "display-s" | "display-xs"} [props.size="m"]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Heading({
  as: Component = "h2",
  size = "m",
  className,
  children,
  ...rest
}) {
  return (
    <Component className={cn("font-heading", SIZES[size], className)} {...rest}>
      {children}
    </Component>
  );
}
