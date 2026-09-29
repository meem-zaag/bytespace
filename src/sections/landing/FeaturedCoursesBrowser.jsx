"use client";

import { useState } from "react";
import CategoryChips from "@/components/common/CategoryChips";
import CourseGrid from "@/components/common/CourseGrid";
import EmptyState from "@/components/common/EmptyState";
import AppButton from "@/components/ui/AppButton";
import { DEFAULT_COURSE_FILTERS, FEATURED } from "@/lib/constants/courseFilters";
import { ROUTES } from "@/lib/constants/routes";
import { filterCourses } from "@/lib/utils/filterCourses";

/**
 * Category chips + course grid for the landing page. "Featured" is selected by default; picking
 * a category shows up to `limit` courses from it.
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course[]} props.courses
 * @param {{ id: string, name: string }[]} props.categories
 * @param {typeof import("@/lib/data/landing").landing.featuredCourses} props.content
 */
export default function FeaturedCoursesBrowser({ courses, categories, content }) {
  const [category, setCategory] = useState(FEATURED);
  const options = [
    { value: FEATURED, label: content.featuredLabel },
    ...categories.map((item) => ({ value: item.id, label: item.name })),
  ];
  const visible = filterCourses(courses, { ...DEFAULT_COURSE_FILTERS, category }).slice(
    0,
    content.limit,
  );

  return (
    <>
      <CategoryChips
        options={options}
        value={category}
        onChange={setCategory}
        layout="responsive"
        moreLink={content.moreLink}
        desktopRows={content.chipRows}
        className="mt-10 lg:mt-[42px]"
      />
      <div aria-live="polite" className="mt-12 lg:mt-[77px]">
        <CourseGrid
          key={category}
          courses={visible}
          emptyState={
            <EmptyState
              title={content.empty.title}
              description={content.empty.description}
              action={
                <AppButton href={ROUTES.courses} variant="outline" size="toolbar">
                  {content.empty.actionLabel}
                </AppButton>
              }
            />
          }
        />
      </div>
    </>
  );
}
