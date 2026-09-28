"use client";

import * as m from "motion/react-m";
import { fadeIn, VIEWPORT } from "@/components/motion/variants";

/**
 * Fades its children in (with a small slide) when scrolled into view.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as="div"] rendered element
 * @param {number} [props.x=0] horizontal start offset in px
 * @param {number} [props.y=24] vertical start offset in px
 * @param {number} [props.delay=0] seconds
 * @param {number} [props.duration] seconds
 * @param {boolean} [props.immediate=false] animate on mount instead of on scroll (above-the-fold content)
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function FadeIn({
  as = "div",
  x,
  y,
  delay,
  duration,
  immediate = false,
  className,
  children,
  ...rest
}) {
  const Component = m[as];
  const trigger = immediate
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: VIEWPORT };

  return (
    <Component
      initial="hidden"
      variants={fadeIn({ x, y, delay, duration })}
      className={className}
      {...trigger}
      {...rest}
    >
      {children}
    </Component>
  );
}
