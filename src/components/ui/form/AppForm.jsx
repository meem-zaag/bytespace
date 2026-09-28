"use client";

import { Form } from "antd";

/**
 * antd `Form` preset for ByteSpace: vertical labels, no required asterisks (not in the design),
 * validation on blur then on change, scroll to the first error on submit, and `noValidate` so the
 * browser's native checks (e.g. `type="email"`) don't block antd's rules and messages.
 *
 * @param {import("antd").FormProps} props
 */
export default function AppForm({ children, ...rest }) {
  return (
    <Form
      layout="vertical"
      noValidate
      requiredMark={false}
      validateTrigger={["onBlur", "onChange"]}
      scrollToFirstError={{ behavior: "smooth", block: "center" }}
      {...rest}
    >
      {children}
    </Form>
  );
}
