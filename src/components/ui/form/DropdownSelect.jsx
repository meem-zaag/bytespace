"use client";

import { Dropdown } from "antd";
import AppButton from "@/components/ui/AppButton";
import { cn } from "@/lib/utils/cn";

/** Long lists (e.g. categories) scroll inside a 400px menu instead of growing with the viewport. */
const MENU_CLASS =
  "max-h-[400px] overscroll-contain [scrollbar-color:var(--color-neutral-300)_transparent] [scrollbar-width:thin]";

/**
 * Outline pill button that opens an antd single-select menu (toolbar filters and sorting).
 * Shows `label` until a non-default option is picked, then the option's label, highlighted.
 *
 * @param {object} props
 * @param {string} props.label button text for the default option (e.g. "Level")
 * @param {import("react").ReactNode} [props.icon] leading icon
 * @param {{ value: string, label: string }[]} props.options first option is the default
 * @param {string} props.value
 * @param {(value: string) => void} props.onChange
 * @param {boolean} [props.showSelection=true] reflect the picked option in the button text
 * @param {"bottomLeft" | "bottomRight"} [props.placement="bottomLeft"]
 * @param {string} [props.className]
 */
export default function DropdownSelect({
  label,
  icon,
  options,
  value,
  onChange,
  showSelection = true,
  placement = "bottomLeft",
  className,
}) {
  const selected = options.find((option) => option.value === value);
  const isDefault = value === options[0].value;
  const text = showSelection && selected && !isDefault ? selected.label : label;

  return (
    <Dropdown
      trigger={["click"]}
      placement={placement}
      menu={{
        className: MENU_CLASS,
        items: options.map((option) => ({ key: option.value, label: option.label })),
        selectable: true,
        selectedKeys: [value],
        onClick: ({ key }) => onChange(key),
      }}
    >
      <AppButton
        variant="outline"
        size="toolbar"
        icon={<span className="inline-flex text-neutral-950">{icon}</span>}
        aria-label={`${label}: ${selected?.label ?? ""}`}
        className={cn(
          !isDefault && showSelection && "border-primary-800 text-neutral-950",
          className,
        )}
      >
        {text}
      </AppButton>
    </Dropdown>
  );
}
