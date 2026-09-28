"use client";

import * as m from "motion/react-m";
import { floatLoop } from "@/components/motion/variants";

/**
 * Slowly bobs decorative content up and down (3D shapes, floating stat cards).
 * Stops automatically for users who prefer reduced motion (MotionConfig `reducedMotion="user"`).
 *
 * @param {object} props
 * @param {number} [props.distance=10] px travelled
 * @param {number} [props.duration=5] seconds per cycle
 * @param {number} [props.delay=0] seconds
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Float({ distance, duration, delay, className, children, ...rest }) {
  return (
    <m.div animate={floatLoop({ distance, duration, delay })} className={className} {...rest}>
      {children}
    </m.div>
  );
}
