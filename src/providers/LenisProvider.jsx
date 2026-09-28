"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Popups rendered by antd (and any element marked `data-lenis-prevent`) keep native scrolling. */
const NATIVE_SCROLL_SELECTOR = [
  "[data-lenis-prevent]",
  ".ant-select-dropdown",
  ".ant-dropdown",
  ".ant-modal-wrap",
  ".ant-drawer",
  ".ant-picker-dropdown",
].join(",");

const LENIS_OPTIONS = {
  lerp: 0.1,
  anchors: true,
  allowNestedScroll: true,
  prevent: (node) => Boolean(node.closest?.(NATIVE_SCROLL_SELECTOR)),
};

/**
 * Smooth page scrolling mounted once at the root. Disabled when the user prefers reduced motion.
 * Lenis drives the native window scroll, so Framer Motion scroll hooks and anchor links keep working.
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.children
 */
export default function LenisProvider({ children }) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) return children;

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  );
}
