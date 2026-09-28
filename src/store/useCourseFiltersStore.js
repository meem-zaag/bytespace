import { create } from "zustand";
import { DEFAULT_COURSE_FILTERS } from "@/lib/constants/courseFilters";

/**
 * Filters of the courses catalog, shared by the hero search and the listing (toolbar, chips,
 * pagination). Any filter change resets the page to 1.
 *
 * @typedef {typeof DEFAULT_COURSE_FILTERS & { page: number, resetCount: number }} CourseFiltersState
 * @typedef {object} CourseFiltersActions
 * @property {(patch: Partial<typeof DEFAULT_COURSE_FILTERS>) => void} setFilters
 * @property {(page: number) => void} setPage
 * @property {() => void} reset clears every filter; `resetCount` lets the search box clear too
 */

/** @type {import("zustand").UseBoundStore<import("zustand").StoreApi<CourseFiltersState & CourseFiltersActions>>} */
export const useCourseFiltersStore = create((set) => ({
  ...DEFAULT_COURSE_FILTERS,
  page: 1,
  resetCount: 0,
  setFilters: (patch) => set({ ...patch, page: 1 }),
  setPage: (page) => set({ page }),
  reset: () =>
    set((state) => ({ ...DEFAULT_COURSE_FILTERS, page: 1, resetCount: state.resetCount + 1 })),
}));
