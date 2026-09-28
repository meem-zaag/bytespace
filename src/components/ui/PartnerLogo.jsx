import { cn } from "@/lib/utils/cn";

/** Circular placeholder marks matching the Figma "Logoipsum" partner strip (40×40 viewBox). */
const MARKS = {
  waves: (
    <>
      <clipPath id="partner-waves">
        <circle cx="20" cy="20" r="18" />
      </clipPath>
      <g clipPath="url(#partner-waves)">
        <path d="M0 9c6-4 12 4 20 0s14-4 20 0v5c-6-4-12 4-20 0S6 10 0 14Z" />
        <path d="M0 18c6-4 12 4 20 0s14-4 20 0v5c-6-4-12 4-20 0S6 19 0 23Z" />
        <path d="M0 27c6-4 12 4 20 0s14-4 20 0v13H0Z" />
      </g>
    </>
  ),
  burst: (
    <g>
      {Array.from({ length: 12 }, (_, index) => (
        <rect
          key={index}
          x="18"
          y="2"
          width="4"
          height="11"
          rx="2"
          transform={`rotate(${index * 30} 20 20)`}
        />
      ))}
    </g>
  ),
  bolt: (
    <path
      fillRule="evenodd"
      d="M20 2a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm2.5 7L12 22h7l-2 9 10.5-13h-7l2-9Z"
    />
  ),
  petals: (
    <path
      fillRule="evenodd"
      d="M20 2a18 18 0 1 1 0 36 18 18 0 0 1 0-36Zm0 7.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-6.5-6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm13 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
    />
  ),
  rings: (
    <g fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="20" cy="20" r="18" />
      <circle cx="18" cy="18" r="15" />
      <circle cx="16" cy="16" r="12" />
      <circle cx="14" cy="14" r="9" />
      <circle cx="12.5" cy="12.5" r="6" />
      <circle cx="11" cy="11" r="3" fill="currentColor" />
    </g>
  ),
};

/**
 * Partner logo placeholder: circular mark + wordmark in Satoshi Bold, grey like the Figma strip.
 *
 * @param {object} props
 * @param {keyof typeof MARKS} props.mark
 * @param {string} props.name wordmark text and accessible name
 * @param {string} [props.className]
 */
export default function PartnerLogo({ mark, name, className }) {
  return (
    <span
      role="img"
      aria-label={name}
      className={cn(
        "inline-flex h-[41px] items-center gap-1.5 text-neutral-400 sm:gap-2",
        className,
      )}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        className="size-8 shrink-0 sm:size-10"
      >
        {MARKS[mark]}
      </svg>
      <span
        aria-hidden="true"
        className="text-xl leading-none font-bold tracking-[-0.04em] sm:text-[1.5625rem]"
      >
        {name}
      </span>
    </span>
  );
}
