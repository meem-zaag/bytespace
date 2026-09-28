"use client";

import { App, Form, Input } from "antd";
import { useState } from "react";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { subscribeToNewsletter } from "@/lib/services/newsletter";

const EMAIL_RULES = [
  { required: true, message: "Please enter your email" },
  { type: "email", message: "Please enter a valid email address" },
];

/**
 * Footer newsletter signup: pill email field + lime submit, with validation and a simulated request.
 *
 * @param {object} props
 * @param {string} props.placeholder
 * @param {string} props.submitLabel
 */
export default function NewsletterForm({ placeholder, submitLabel }) {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const { message } = App.useApp();

  async function handleFinish(values) {
    setSubmitting(true);
    const result = await subscribeToNewsletter(values);
    setSubmitting(false);
    message.success(result.message);
    form.resetFields();
  }

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      requiredMark={false}
      validateTrigger="onSubmit"
      noValidate
      className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
    >
      <Form.Item name="email" rules={EMAIL_RULES} className="mb-0 w-full sm:w-94">
        <Input
          type="email"
          autoComplete="email"
          aria-label="Email address"
          placeholder={placeholder}
          className="h-13 rounded-full border-neutral-200 px-6 text-body-m placeholder:text-neutral-950"
        />
      </Form.Item>
      <SubmitButton loading={submitting} className="self-start">
        {submitLabel}
      </SubmitButton>
    </Form>
  );
}
