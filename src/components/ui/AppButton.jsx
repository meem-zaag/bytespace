import Link from "next/link";
import { cn } from "@/lib/utils/cn";

const VARIANTS = {
  primary: "bg-lime-400 text-neutral-950 hover:bg-lime-300 active:bg-lime-500",
  outline:
    "border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100",
  ghost: "border border-neutral-200 bg-transparent text-neutral-700 hover:bg-neutral-50",
};

/** Figma strokes sit inside the box, so bordered variants subtract 1px from the padding. */
const SIZES = {
  sm: "gap-2 px-4 py-2 text-label-m",
  md: "gap-2 px-6 py-2 text-label-m leading-6",
  lg: "gap-2 px-6 py-3 text-label-l",
  toolbar: "gap-1 px-4 py-3 text-label-m",
};

const BORDERED_SIZES = {
  sm: "px-[15px] py-[7px]",
  md: "px-[23px] py-[7px]",
  lg: "px-[23px] py-[11px]",
  toolbar: "px-[15px] py-[11px]",
};

/**
 * Pill button from the design system. Renders a Next.js `Link` when `href` is set, otherwise a
 * `<button>`. For submit buttons inside antd forms use `SubmitButton` instead.
 *
 * Figma: lime primary `lg` (Search, Join as Creator, Enroll Now), `md` (Share), outline `toolbar`
 * (Filter, Level, Category, Most relevant) and `sm` (See Full Profile).
 *
 * @param {object} props
 * @param {"primary" | "outline" | "ghost"} [props.variant="primary"]
 * @param {"sm" | "md" | "lg" | "toolbar"} [props.size="lg"]
 * @param {string} [props.href] turns the button into a link
 * @param {import("react").ReactNode} [props.icon] icon element rendered next to the label
 * @param {"start" | "end"} [props.iconPosition="start"]
 * @param {boolean} [props.fullWidth=false]
 * @param {string} [props.className]
 * @param {import("react").ReactNode} [props.children]
 */
export default function AppButton({
  variant = "primary",
  size = "lg",
  href,
  icon,
  iconPosition = "start",
  fullWidth = false,
  className,
  children,
  type = "button",
  ...rest
}) {
  const classes = cn(
    "inline-flex shrink-0 cursor-pointer items-center justify-center rounded-3xl whitespace-nowrap transition-colors duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    VARIANTS[variant],
    SIZES[size],
    variant !== "primary" && BORDERED_SIZES[size],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "start" && icon}
      {children}
      {icon && iconPosition === "end" && icon}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
