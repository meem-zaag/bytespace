"use client";

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import IconButton from "@/components/ui/IconButton";
import { cn } from "@/lib/utils/cn";

const WINDOW = 5;

/** Up to five consecutive pages centred on the current one. */
function visiblePages(page, pageCount) {
  const size = Math.min(WINDOW, pageCount);
  const start = Math.min(Math.max(1, page - Math.floor(size / 2)), pageCount - size + 1);
  return Array.from({ length: size }, (_, index) => start + index);
}

/**
 * Figma pagination: bordered arrow buttons around bold page numbers; the current page is greyed
 * out (`neutral-200`) and marked with `aria-current`.
 *
 * @param {object} props
 * @param {number} props.page current page (1-based)
 * @param {number} props.pageCount total pages
 * @param {(page: number) => void} props.onPageChange
 * @param {string} [props.label="Pagination"] accessible name of the navigation landmark
 * @param {string} [props.className]
 */
export default function Pagination({
  page,
  pageCount,
  onPageChange,
  label = "Pagination",
  className,
}) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label={label} className={cn("flex items-center justify-center gap-6", className)}>
      <IconButton
        label="Previous page"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="disabled:opacity-100"
      >
        <ChevronLeftIcon />
      </IconButton>
      <ol className="flex items-center gap-6">
        {visiblePages(page, pageCount).map((number) => {
          const current = number === page;
          return (
            <li key={number}>
              <button
                type="button"
                aria-label={`Page ${number}`}
                aria-current={current ? "page" : undefined}
                onClick={() => onPageChange(number)}
                className={cn(
                  "cursor-pointer rounded-sm font-heading text-heading-xs leading-7 transition-colors",
                  current
                    ? "pointer-events-none text-neutral-200"
                    : "text-neutral-950 hover:text-primary-800",
                )}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ol>
      <IconButton
        label="Next page"
        disabled={page === pageCount}
        onClick={() => onPageChange(page + 1)}
        className="disabled:opacity-100"
      >
        <ChevronRightIcon />
      </IconButton>
    </nav>
  );
}
