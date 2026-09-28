import AppButton from "@/components/ui/AppButton";
import Avatar from "@/components/ui/Avatar";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";

/**
 * Creator block in the course sidebar: avatar, name, role, a short message and a
 * "See Full Profile" link to the creator page.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").CourseCreator} props.creator
 * @param {string} [props.message]
 * @param {string} [props.ctaLabel="See Full Profile"]
 * @param {string} [props.className]
 */
export default function CreatorSummary({
  creator,
  message,
  ctaLabel = "See Full Profile",
  className,
}) {
  return (
    <div className={cn("flex flex-col items-start gap-6", className)}>
      <div className="flex items-center gap-3">
        <Avatar src={creator.avatar.src} alt={creator.avatar.alt} size={52} />
        <div>
          <p className="text-label-l text-neutral-950">{creator.name}</p>
          <p className="text-body-m text-neutral-700">{creator.role}</p>
        </div>
      </div>
      {message && <p className="text-body-m text-neutral-700">{message}</p>}
      <AppButton
        href={ROUTES.creator(creator.slug)}
        variant="ghost"
        size="sm"
        aria-label={`${ctaLabel}: ${creator.name}`}
      >
        {ctaLabel}
      </AppButton>
    </div>
  );
}
