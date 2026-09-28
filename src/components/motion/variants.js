/** Shared Framer Motion presets so every animation in the site feels the same. */

export const EASE_OUT = [0.22, 1, 0.36, 1];

export const DURATION = { fast: 0.35, base: 0.6, slow: 0.9 };

/** Viewport settings for scroll-triggered reveals: animate once, a little before fully in view. */
export const VIEWPORT = { once: true, amount: 0.2 };

/**
 * Fade in while moving from an offset to the resting position.
 *
 * @param {object} [options]
 * @param {number} [options.x=0] horizontal start offset in px
 * @param {number} [options.y=24] vertical start offset in px
 * @param {number} [options.delay=0] seconds
 * @param {number} [options.duration] seconds
 */
export function fadeIn({ x = 0, y = 24, delay = 0, duration = DURATION.base } = {}) {
  return {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration, delay, ease: EASE_OUT } },
  };
}

/**
 * Parent variant that staggers its children.
 *
 * @param {number} [stagger=0.08] seconds between children
 * @param {number} [delay=0] seconds before the first child
 */
export function staggerContainer(stagger = 0.08, delay = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
}
