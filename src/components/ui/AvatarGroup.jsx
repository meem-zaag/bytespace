import Avatar from "@/components/ui/Avatar";
import { cn } from "@/lib/utils/cn";

const COUNT_TONES = {
  lime: "bg-lime-400 text-neutral-950",
  dark: "bg-neutral-950 text-white",
};

const SIZES = {
  sm: { avatar: 32, overlap: "-ms-2", count: "text-label-xs leading-5" },
  md: { avatar: 43, overlap: "-ms-4", count: "text-label-xs font-bold leading-[1.125rem]" },
};

/**
 * Overlapping avatar stack ending in a count bubble ("26+", "2K+").
 *
 * @param {object} props
 * @param {{ id?: string, name: string, avatar: { src: string, alt: string } }[]} props.people
 * @param {string} [props.countLabel] text of the trailing bubble, e.g. "26+"
 * @param {string} [props.label] accessible description of the whole group
 * @param {"sm" | "md"} [props.size="sm"] 32px (course cards) or 43px (Happy Students card)
 * @param {"lime" | "dark"} [props.countTone="lime"]
 * @param {string} [props.className]
 */
export default function AvatarGroup({
  people,
  countLabel,
  label,
  size = "sm",
  countTone = "lime",
  className,
}) {
  const config = SIZES[size];

  return (
    <ul aria-label={label} className={cn("flex items-center", className)}>
      {people.map((person, index) => (
        <li key={person.id ?? person.name} className={cn(index > 0 && config.overlap)}>
          <Avatar src={person.avatar.src} alt={person.avatar.alt} size={config.avatar} />
        </li>
      ))}
      {countLabel && (
        <li
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full",
            people.length > 0 && config.overlap,
            COUNT_TONES[countTone],
            config.count,
          )}
          style={{ width: config.avatar, height: config.avatar }}
        >
          {countLabel}
        </li>
      )}
    </ul>
  );
}
