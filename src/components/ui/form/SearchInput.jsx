"use client";

import { Input } from "antd";
import SearchIcon from "@/components/icons/SearchIcon";
import { cn } from "@/lib/utils/cn";

/**
 * White pill search field from the hero panels (52px, 24px radius, grey search icon).
 * Works as a plain input inside a native `<form>` (via `name`) or controlled via `value`/`onChange`.
 *
 * @param {object} props
 * @param {string} props.ariaLabel accessible name (the design has no visible label)
 * @param {string} [props.name]
 * @param {string} [props.placeholder]
 * @param {string} [props.value]
 * @param {string} [props.defaultValue]
 * @param {(event: import("react").ChangeEvent<HTMLInputElement>) => void} [props.onChange]
 * @param {string} [props.className]
 */
export default function SearchInput({ ariaLabel, className, ...rest }) {
  return (
    <Input
      type="search"
      size="large"
      variant="borderless"
      allowClear
      aria-label={ariaLabel}
      prefix={<SearchIcon className="text-neutral-400" />}
      classNames={{ prefix: "me-2" }}
      className={cn("rounded-3xl bg-white px-6 focus-within:bg-white hover:bg-white", className)}
      {...rest}
    />
  );
}
