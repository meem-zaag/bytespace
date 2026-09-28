"use client";

import { Form } from "antd";

/**
 * antd `Form` preset for ByteSpace: vertical labels, no required asterisks (not in the design),
 * validation on blur then on change, and scroll to the first error on submit.
 *
 * @param {import("antd").FormProps} props
 */
export default function AppForm({ children, ...rest }) {
  return (
    <Form
      layout="vertical"
      requiredMark={false}
      validateTrigger={["onBlur", "onChange"]}
      scrollToFirstError={{ behavior: "smooth", block: "center" }}
      {...rest}
    >
      {children}
    </Form>
  );
}
