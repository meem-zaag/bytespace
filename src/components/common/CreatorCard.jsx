import Image from "next/image";
import Link from "next/link";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Pill from "@/components/ui/Pill";
import { ROUTES } from "@/lib/constants/routes";
import { cn } from "@/lib/utils/cn";
import { formatCompactNumber } from "@/lib/utils/formatters";

/**
 * Creator summary card for the Creators list. There is no Figma frame for it, so it follows the
 * CourseCard language: 24px radius, `neutral-200` border, rounded-square photo like the creator
 * hero, lime "Creator" pill and blue figures like the "3 Products" pill.
 *
 * @param {object} props
 * @param {import("@/lib/api/creators").Creator} props.creator
 * @param {"h2" | "h3"} [props.headingLevel="h3"]
 * @param {string} [props.className]
 */
export default function CreatorCard({ creator, headingLevel: Title = "h3", className }) {
  const stats = [
    { label: creator.courseCount === 1 ? "Course" : "Courses", value: creator.courseCount },
    { label: "Students", value: creator.studentCount },
    { label: "Followers", value: creator.followers },
  ];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-6 rounded-card border border-neutral-200 bg-white p-6 transition duration-300",
        "hover:-translate-y-1 hover:border-neutral-300 hover:shadow-card",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <Image
          src={creator.avatar.src}
          alt={creator.avatar.alt}
          width={80}
          height={80}
          sizes="80px"
          className="size-20 rounded-3xl object-cover"
        />
        <Pill tone="lime" className="px-4 py-1 text-label-s">
          Creator
        </Pill>
      </div>

      <div className="flex flex-col gap-1">
        <Title className="font-heading text-heading-xs text-black">
          <Link
            href={ROUTES.creator(creator.slug)}
            className="rounded-sm after:absolute after:inset-0 after:rounded-card after:content-['']"
          >
            {creator.name}
          </Link>
        </Title>
        <p className="text-body-s text-neutral-700">{creator.headline}</p>
      </div>

      <dl className="mt-auto grid grid-cols-3 gap-3 border-t border-neutral-100 pt-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse">
            <dt className="text-body-xs text-neutral-700">{stat.label}</dt>
            <dd className="font-heading text-heading-xs text-primary-800">
              {formatCompactNumber(stat.value)}
            </dd>
          </div>
        ))}
      </dl>

      <span className="flex items-center gap-1 text-label-m text-neutral-950 transition-colors group-hover:text-primary-800">
        View profile
        <ChevronRightIcon className="size-4" />
      </span>
    </article>
  );
}
