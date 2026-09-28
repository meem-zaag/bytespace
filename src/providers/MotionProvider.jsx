"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";

/**
 * Loads the Framer Motion DOM feature set once (components use the lightweight `m` element)
 * and makes every animation respect the user's reduced-motion preference.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
