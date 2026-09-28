"use client";

import { useState } from "react";
import CourseGrid from "@/components/common/CourseGrid";
import CourseToolbar from "@/components/common/CourseToolbar";
import EmptyState from "@/components/common/EmptyState";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import { DEFAULT_COURSE_FILTERS } from "@/lib/constants/courseFilters";
import { filterCourses } from "@/lib/utils/filterCourses";

/**
 * The creator's courses with the same toolbar and CourseCard grid as the catalog
 * (filter state is local to this page).
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course[]} props.courses
 * @param {{ id: string, name: string }[]} props.categories
 * @param {{ id: string, label: string }[]} props.levels
 * @param {typeof import("@/lib/data/creatorProfile").creatorProfile.courses} props.content
 */
export default function CreatorCourses({ courses, categories, levels, content }) {
  const [filters, setFilters] = useState(DEFAULT_COURSE_FILTERS);
  const visible = filterCourses(courses, filters);

  return (
    <section aria-label={content.label} className="pt-12 pb-20 lg:pt-[62px] lg:pb-[61px]">
      <Container>
        <CourseToolbar
          filters={filters}
          onChange={(patch) => setFilters((current) => ({ ...current, ...patch }))}
          levels={levels}
          categories={categories}
        />
        <div className="mt-10">
          <CourseGrid
            key={JSON.stringify(filters)}
            courses={visible}
            headingLevel="h2"
            emptyState={
              <EmptyState
                title={content.empty.title}
                description={content.empty.description}
                action={
                  <AppButton
                    variant="outline"
                    size="toolbar"
                    onClick={() => setFilters(DEFAULT_COURSE_FILTERS)}
                  >
                    {content.empty.actionLabel}
                  </AppButton>
                }
              />
            }
          />
        </div>
      </Container>
    </section>
  );
}
