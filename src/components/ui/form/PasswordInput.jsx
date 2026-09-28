"use client";

import { Form, Input } from "antd";

/** Collapse antd's label row to the 17px label + 8px gap from Figma. */
const LABEL_COL = { className: "flex leading-none" };

/**
 * Labelled password field with a show/hide toggle. Must be rendered inside `AppForm`.
 *
 * @param {object} props
 * @param {string} props.name form field name
 * @param {string} props.label visible label
 * @param {import("antd").FormRule[]} [props.rules] antd validation rules
 * @param {string} [props.placeholder]
 * @param {"current-password" | "new-password"} [props.autoComplete="current-password"]
 * @param {string} [props.className] extra classes for the Form.Item
 */
export default function PasswordInput({
  name,
  label,
  rules,
  placeholder,
  autoComplete = "current-password",
  className,
  ...inputProps
}) {
  return (
    <Form.Item
      name={name}
      label={<span className="text-label-s text-neutral-950">{label}</span>}
      labelCol={LABEL_COL}
      rules={rules}
      validateFirst
      className={className}
    >
      <Input.Password
        size="large"
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...inputProps}
      />
    </Form.Item>
  );
}
