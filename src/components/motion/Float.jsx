import { cn } from "@/lib/utils/cn";

/**
 * Slowly bobs decorative content up and down (3D shapes, floating stat cards).
 * Pure CSS transform animation, so it runs on the compositor (no JavaScript per frame) and is
 * switched off for users who prefer reduced motion.
 *
 * @param {object} props
 * @param {number} [props.distance=12] px travelled
 * @param {number} [props.duration=6] seconds per cycle
 * @param {number} [props.delay=0] seconds
 * @param {string} [props.className]
 * @param {import("react").ReactNode} props.children
 */
export default function Float({ distance = 12, duration = 6, delay = 0, className, children }) {
  return (
    <div
      className={cn("animate-float will-change-transform motion-reduce:animate-none", className)}
      style={{
        "--float-distance": `${distance}px`,
        "--float-duration": `${duration}s`,
        "--float-delay": `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
