"use client";

import { useSearchParams } from "next/navigation";
import CourseTabs from "@/sections/course-details/CourseTabs";

/**
 * Reads `?tab=` and renders `CourseTabs`. Wrap in `<Suspense>` with a `CourseTabs` fallback so the
 * default tab's content is part of the static HTML.
 *
 * @param {object} props
 * @param {{ key: string, label: string }[]} props.tabs
 * @param {Record<string, import("react").ReactNode>} props.panels
 */
export default function CourseTabsFromUrl({ tabs, panels }) {
  const tab = useSearchParams().get("tab");
  return <CourseTabs tabs={tabs} panels={panels} initialTab={tab} />;
}
