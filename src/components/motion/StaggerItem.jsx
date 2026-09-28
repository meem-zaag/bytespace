"use client";

import * as m from "motion/react-m";
import { fadeIn } from "@/components/motion/variants";

/**
 * A child of `Stagger`; inherits the parent's animation state.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as="div"] rendered element (e.g. "li")
 * @param {number} [props.x=0] horizontal start offset in px
 * @param {number} [props.y=24] vertical start offset in px
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function StaggerItem({ as = "div", x, y, className, children, ...rest }) {
  const Component = m[as];

  return (
    <Component variants={fadeIn({ x, y })} className={className} {...rest}>
      {children}
    </Component>
  );
}
