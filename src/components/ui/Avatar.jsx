import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * Circular photo.
 *
 * @param {object} props
 * @param {string} props.src
 * @param {string} props.alt
 * @param {number} [props.size=32] rendered diameter in px
 * @param {string} [props.sizes] `next/image` sizes hint (defaults to the diameter)
 * @param {string} [props.className]
 */
export default function Avatar({ src, alt, size = 32, sizes, className }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      sizes={sizes ?? `${size}px`}
      className={cn("shrink-0 rounded-full object-cover", className)}
      style={{ width: size, height: size }}
    />
  );
}
