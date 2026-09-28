import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import { cn } from "@/lib/utils/cn";

const SIZES = {
  lg: { list: "gap-4", item: "text-label-l text-neutral-950", icon: "mt-[-1px]" },
  md: { list: "gap-3", item: "text-body-m text-neutral-700", icon: "mt-px" },
};

/**
 * List with filled blue check icons. `lg`: "Share Your Expertise…" on the landing page
 * (18px medium, 16px apart); `md`: course "Key Points" (16px regular grey, 12px apart).
 *
 * @param {object} props
 * @param {string[]} props.items
 * @param {"lg" | "md"} [props.size="lg"]
 * @param {string} [props.className]
 */
export default function CheckList({ items, size = "lg", className }) {
  const config = SIZES[size];

  return (
    <ul className={cn("flex flex-col", config.list, className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-start gap-2", config.item)}>
          <CheckCircleIcon className={cn("shrink-0 text-primary-800", config.icon)} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
