"use client";

import * as m from "motion/react-m";
import { staggerContainer, VIEWPORT } from "@/components/motion/variants";

/**
 * Reveals `StaggerItem` children one after another when scrolled into view.
 *
 * @param {object} props
 * @param {keyof JSX.IntrinsicElements} [props.as="div"] rendered element (e.g. "ul")
 * @param {number} [props.stagger=0.08] seconds between children
 * @param {number} [props.delay=0] seconds before the first child
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Stagger({ as = "div", stagger, delay, className, children, ...rest }) {
  const Component = m[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerContainer(stagger, delay)}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}
