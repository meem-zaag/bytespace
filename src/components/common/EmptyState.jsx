import { cn } from "@/lib/utils/cn";

/**
 * Friendly placeholder for lists with no results (the design has no empty state, so it follows
 * the card language: soft neutral panel, Poppins title, muted copy).
 *
 * @param {object} props
 * @param {import("react").ReactNode} props.title
 * @param {import("react").ReactNode} [props.description]
 * @param {import("react").ReactNode} [props.action] e.g. a "Clear filters" button
 * @param {string} [props.className]
 */
export default function EmptyState({ title, description, action, className }) {
  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center gap-3 rounded-card border border-dashed border-neutral-200 bg-neutral-50 px-6 py-16 text-center",
        className,
      )}
    >
      <p className="font-heading text-heading-xs text-neutral-950">{title}</p>
      {description && <p className="max-w-md text-body-m text-neutral-700">{description}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}
