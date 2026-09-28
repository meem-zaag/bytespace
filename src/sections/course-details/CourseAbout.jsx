import Image from "next/image";
import CheckList from "@/components/common/CheckList";

/**
 * About tab: description, "Sneak Peek" gallery and key points.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course} props.course
 * @param {typeof import("@/lib/data/courseDetails").courseDetails.about} props.content
 */
export default function CourseAbout({ course, content }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-heading text-heading-xs text-neutral-950">{content.descriptionTitle}</h2>
      <div className="flex flex-col gap-[1.6em] text-body-m text-neutral-700">
        {course.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <h2 className="font-heading text-heading-xs text-neutral-950">{content.galleryTitle}</h2>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-[19px]">
        {course.gallery.map((image) => (
          <li
            key={image.src}
            className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-neutral-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 167px, (min-width: 640px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </li>
        ))}
      </ul>

      <h2 className="font-heading text-heading-xs text-neutral-950">{content.keyPointsTitle}</h2>
      <CheckList items={course.keyPoints} size="md" />
    </div>
  );
}
