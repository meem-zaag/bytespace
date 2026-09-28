import Image from "next/image";
import Float from "@/components/motion/Float";
import { cn } from "@/lib/utils/cn";

/**
 * Decorative 3D shape (spring, coil, torus, cylinder, pyramid, cone) in lime or white, recreated
 * from the Figma renders + hard-light color masks. Position it with `className`/`style`; it is
 * hidden from assistive tech and never intercepts clicks. The size comes from the `--decor-size`
 * variable, so responsive classes such as `max-md:size-40` can override it.
 *
 * @param {object} props
 * @param {"spring" | "coil" | "torus" | "cylinder" | "pyramid" | "cone"} props.shape
 * @param {"lime" | "white"} props.tone
 * @param {number} props.size rendered size in px at the 1440 design width
 * @param {boolean} [props.float=false] gently bob (disabled for reduced motion)
 * @param {number} [props.delay=0] float delay in seconds
 * @param {string} [props.className] absolute positioning / responsive visibility
 * @param {import("react").CSSProperties} [props.style]
 */
export default function DecorShape({ shape, tone, size, float = false, delay, className, style }) {
  const image = (
    <Image
      src={`/images/decor/${shape}-${tone}.webp`}
      alt=""
      width={size}
      height={size}
      sizes={`${size}px`}
      className="size-full"
      draggable={false}
    />
  );

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute size-(--decor-size) select-none", className)}
      style={{ "--decor-size": `${size}px`, ...style }}
    >
      {float ? (
        <Float distance={12} duration={6} delay={delay} className="size-full">
          {image}
        </Float>
      ) : (
        image
      )}
    </div>
  );
}
