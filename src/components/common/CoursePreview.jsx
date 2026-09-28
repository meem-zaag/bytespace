"use client";

import { App } from "antd";
import Image from "next/image";
import PlayIcon from "@/components/icons/PlayIcon";
import { cn } from "@/lib/utils/cn";

/**
 * Course trailer thumbnail with the frosted play button (Figma 720×479, 24px radius).
 * Trailers aren't part of this static build, so playing shows a friendly notice.
 *
 * @param {object} props
 * @param {{ src: string, alt: string }} props.image
 * @param {string} props.courseTitle
 * @param {string} [props.className]
 */
export default function CoursePreview({ image, courseTitle, className }) {
  const { message } = App.useApp();

  return (
    <div
      className={cn(
        "relative aspect-[720/479] overflow-hidden rounded-card bg-neutral-900",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="(min-width: 1280px) 720px, (min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />
      <button
        type="button"
        aria-label={`Play the preview of ${courseTitle}`}
        onClick={() => message.info("The course preview will be available soon.")}
        className="absolute top-[53.4%] left-[52.2%] flex size-18 -translate-1/2 cursor-pointer items-center justify-center rounded-3xl border border-ink-700 bg-neutral-900/24 text-violet-50 backdrop-blur-[20px] transition-transform duration-300 hover:scale-105 sm:size-26"
      >
        <PlayIcon className="size-12 sm:size-18" />
      </button>
    </div>
  );
}
