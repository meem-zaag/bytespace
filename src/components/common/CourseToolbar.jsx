"use client";

import CategoryIcon from "@/components/icons/CategoryIcon";
import FilterIcon from "@/components/icons/FilterIcon";
import SignalIcon from "@/components/icons/SignalIcon";
import SortIcon from "@/components/icons/SortIcon";
import DropdownSelect from "@/components/ui/form/DropdownSelect";
import { ALL, DURATION_OPTIONS, SORT_OPTIONS } from "@/lib/constants/courseFilters";
import { cn } from "@/lib/utils/cn";

/**
 * Listing toolbar (Figma: Filter · Level · Category on the left, "Most relevant" on the right).
 * Controlled: the parent owns the filter state (store or local state).
 *
 * @param {object} props
 * @param {{ level: string, category: string, duration: string, sort: string }} props.filters
 * @param {(patch: Partial<{ level: string, category: string, duration: string, sort: string }>) => void} props.onChange
 * @param {{ id: string, label: string }[]} props.levels
 * @param {{ id: string, name: string }[]} props.categories
 * @param {string} [props.className]
 */
export default function CourseToolbar({ filters, onChange, levels, categories, className }) {
  const levelOptions = [
    { value: ALL, label: "All levels" },
    ...levels.map((level) => ({ value: level.id, label: level.label })),
  ];
  const categoryOptions = [
    { value: ALL, label: "All categories" },
    ...categories.map((category) => ({ value: category.id, label: category.name })),
  ];

  return (
    <div
      role="toolbar"
      aria-label="Filter and sort courses"
      className={cn("flex flex-wrap items-center justify-between gap-3", className)}
    >
      <div className="flex flex-wrap items-center gap-4">
        <DropdownSelect
          label="Filter"
          icon={<FilterIcon />}
          options={DURATION_OPTIONS}
          value={filters.duration}
          onChange={(duration) => onChange({ duration })}
        />
        <DropdownSelect
          label="Level"
          icon={<SignalIcon className="size-6" />}
          options={levelOptions}
          value={filters.level}
          onChange={(level) => onChange({ level })}
        />
        <DropdownSelect
          label="Category"
          icon={<CategoryIcon />}
          options={categoryOptions}
          value={filters.category}
          onChange={(category) => onChange({ category })}
        />
      </div>
      <DropdownSelect
        label={SORT_OPTIONS[0].label}
        icon={<SortIcon />}
        options={SORT_OPTIONS}
        value={filters.sort}
        onChange={(sort) => onChange({ sort })}
        placement="bottomRight"
      />
    </div>
  );
}
