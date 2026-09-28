"use client";

import { Dropdown } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import AppButton from "@/components/ui/AppButton";
import SearchInput from "@/components/ui/form/SearchInput";
import { cn } from "@/lib/utils/cn";

/**
 * Hero search with a lime scope picker ("Courses ⌄" in Figma). Submitting searches within the
 * current scope: `onSearch` handles the page's own scope in place, other scopes navigate to their
 * page with `?q=`.
 *
 * @param {object} props
 * @param {{ label: string, placeholder: string, scopes: { value: string, label: string, href: string }[] }} props.search
 * @param {string} props.currentScope scope handled on this page
 * @param {string} [props.defaultQuery=""]
 * @param {(query: string) => void} props.onSearch
 * @param {string} [props.className]
 */
export default function ScopedSearch({
  search,
  currentScope,
  defaultQuery = "",
  onSearch,
  className,
}) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultQuery);
  const [scope, setScope] = useState(currentScope);
  const selected = search.scopes.find((item) => item.value === scope);

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = query.trim();
    if (scope === currentScope) {
      onSearch(trimmed);
      return;
    }
    router.push(trimmed ? `${selected.href}?q=${encodeURIComponent(trimmed)}` : selected.href);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-4",
        className,
      )}
    >
      <SearchInput
        ariaLabel={search.label}
        placeholder={search.placeholder}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          if (!event.target.value && scope === currentScope) onSearch("");
        }}
        className="sm:w-[461px]"
      />
      <Dropdown
        trigger={["click"]}
        placement="bottomRight"
        menu={{
          items: search.scopes.map((item) => ({ key: item.value, label: item.label })),
          selectable: true,
          selectedKeys: [scope],
          onClick: ({ key }) => setScope(key),
        }}
      >
        <AppButton
          icon={<ChevronDownIcon />}
          iconPosition="end"
          aria-label={`Search in: ${selected.label}`}
          className="sm:w-[147px]"
        >
          {selected.label}
        </AppButton>
      </Dropdown>
    </form>
  );
}
