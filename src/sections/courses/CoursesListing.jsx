"use client";

import { useRef } from "react";
import CategoryChips from "@/components/common/CategoryChips";
import CourseGrid from "@/components/common/CourseGrid";
import CourseToolbar from "@/components/common/CourseToolbar";
import EmptyState from "@/components/common/EmptyState";
import AppButton from "@/components/ui/AppButton";
import Container from "@/components/ui/Container";
import Pagination from "@/components/ui/Pagination";
import { ALL, FEATURED } from "@/lib/constants/courseFilters";
import { filterCourses } from "@/lib/utils/filterCourses";
import { useCourseFiltersStore } from "@/store/useCourseFiltersStore";

/**
 * Catalog listing: toolbar, category chips, paginated course grid. All state lives in
 * `useCourseFiltersStore` (shared with the hero search).
 *
 * @param {object} props
 * @param {import("@/lib/api/courses").Course[]} props.courses
 * @param {{ id: string, name: string }[]} props.categories
 * @param {{ id: string, label: string }[]} props.levels
 * @param {typeof import("@/lib/data/catalog").catalog.listing} props.content
 */
export default function CoursesListing({ courses, categories, levels, content }) {
  const filters = useCourseFiltersStore();
  const { page, setFilters, setPage, reset } = filters;
  const topRef = useRef(null);

  const results = filterCourses(courses, filters);
  const pageCount = Math.max(1, Math.ceil(results.length / content.pageSize));
  const currentPage = Math.min(page, pageCount);
  const visible = results.slice(
    (currentPage - 1) * content.pageSize,
    currentPage * content.pageSize,
  );

  const chipOptions = [
    { value: ALL, label: content.allLabel },
    { value: FEATURED, label: content.featuredLabel },
    ...categories.map((category) => ({ value: category.id, label: category.name })),
  ];

  function changePage(next) {
    setPage(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section aria-label="Course catalog" className="pt-12 pb-20 lg:pt-[72px] lg:pb-[72px]">
      <Container>
        <div ref={topRef} className="scroll-mt-6">
          <CourseToolbar
            filters={filters}
            onChange={setFilters}
            levels={levels}
            categories={categories}
          />
          <CategoryChips
            options={chipOptions}
            value={filters.category}
            onChange={(category) => setFilters({ category })}
            layout="scroll"
            className="mt-8"
          />
        </div>

        <p role="status" className="sr-only">
          {results.length}{" "}
          {results.length === 1 ? content.results.singular : content.results.plural}
        </p>

        <div className="mt-12 lg:mt-[73px]">
          <CourseGrid
            key={`${JSON.stringify({ ...filters, page: currentPage })}`}
            courses={visible}
            priorityCount={3}
            headingLevel="h2"
            emptyState={
              <EmptyState
                title={content.empty.title}
                description={content.empty.description}
                action={
                  <AppButton variant="outline" size="toolbar" onClick={reset}>
                    {content.empty.actionLabel}
                  </AppButton>
                }
              />
            }
          />
        </div>

        <Pagination
          page={currentPage}
          pageCount={pageCount}
          onPageChange={changePage}
          label="Course pages"
          className="mt-12 lg:mt-[72px]"
        />
      </Container>
    </section>
  );
}
