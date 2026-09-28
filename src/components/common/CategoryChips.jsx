"use client";

import Link from "next/link";
import Chip from "@/components/ui/Chip";
import { cn } from "@/lib/utils/cn";

const WRAP = "flex-wrap justify-center gap-x-4 gap-y-[21px]";
const SCROLL =
  "-mx-4 snap-x gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden";

const LAYOUTS = {
  wrap: WRAP,
  scroll: SCROLL,
  responsive: `${SCROLL} md:mx-0 md:flex-wrap md:justify-center md:gap-y-[21px] md:overflow-visible md:px-0 md:pb-0`,
};

/**
 * Single-select chip filter (Figma "Tab_Categories"). `wrap` centers the chips over several rows,
 * `scroll` keeps one row that scrolls sideways (courses page), `responsive` scrolls on phones and
 * wraps from `md` (landing).
 *
 * @param {object} props
 * @param {{ value: string, label: string }[]} props.options
 * @param {string} props.value selected option value
 * @param {(value: string) => void} props.onChange
 * @param {"wrap" | "scroll" | "responsive"} [props.layout="wrap"]
 * @param {{ href: string, label: string }} [props.moreLink] trailing "+ More" link
 * @param {string} [props.label="Filter by category"] accessible group name
 * @param {string} [props.className]
 */
export default function CategoryChips({
  options,
  value,
  onChange,
  layout = "wrap",
  moreLink,
  label = "Filter by category",
  className,
}) {
  return (
    <div role="group" aria-label={label} className={cn("flex", LAYOUTS[layout], className)}>
      {options.map((option) => (
        <Chip
          key={option.value}
          active={option.value === value}
          onClick={() => onChange(option.value)}
          className="snap-start"
        >
          {option.label}
        </Chip>
      ))}
      {moreLink && (
        <Link
          href={moreLink.href}
          className="inline-flex shrink-0 items-center rounded-3xl px-4 py-3 text-label-m text-primary-800 transition-colors hover:bg-primary-50"
        >
          {moreLink.label}
        </Link>
      )}
    </div>
  );
}
