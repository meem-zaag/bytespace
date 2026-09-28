"use client";

import { Form, Input } from "antd";

/** Collapse antd's label row to the 17px label + 8px gap from Figma. */
const LABEL_COL = { className: "flex leading-none" };

/**
 * Labelled text field (Figma "Full Name", "Email"): 52px tall, 12px radius, 18px text.
 * Must be rendered inside `AppForm`.
 *
 * @param {object} props
 * @param {string} props.name form field name
 * @param {string} props.label visible label
 * @param {import("antd").FormRule[]} [props.rules] antd validation rules
 * @param {string} [props.placeholder]
 * @param {string} [props.type="text"] input type (e.g. "email")
 * @param {string} [props.autoComplete]
 * @param {string} [props.className] extra classes for the Form.Item
 */
export default function FormInput({
  name,
  label,
  rules,
  placeholder,
  type = "text",
  autoComplete,
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
      <Input
        size="large"
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...inputProps}
      />
    </Form.Item>
  );
}
