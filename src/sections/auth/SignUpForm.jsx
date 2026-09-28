"use client";

import { App } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthCardHeader from "@/components/auth/AuthCardHeader";
import AuthSwitchLink from "@/components/auth/AuthSwitchLink";
import AppForm from "@/components/ui/form/AppForm";
import FormInput from "@/components/ui/form/FormInput";
import PasswordInput from "@/components/ui/form/PasswordInput";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { EMAIL_RULES, NAME_RULES, NEW_PASSWORD_RULES } from "@/lib/constants/validation";
import { signUp } from "@/lib/services/auth";

/**
 * Sign-up form (Full Name, Email, Password) with client-side validation and a simulated request.
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/auth").auth.signUp} props.content
 */
export default function SignUpForm({ content }) {
  const { message } = App.useApp();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const { fields } = content;

  async function handleFinish(values) {
    setSubmitting(true);
    const result = await signUp(values);
    message.success(result.message);
    router.push(content.successRedirect);
  }

  return (
    <div className="flex flex-col gap-12 sm:gap-[122px]">
      <div className="flex flex-col gap-10">
        <AuthCardHeader eyebrow={content.eyebrow} title={content.title} />
        <AppForm onFinish={handleFinish} disabled={submitting} className="flex flex-col">
          <FormInput
            name="name"
            label={fields.name.label}
            placeholder={fields.name.placeholder}
            autoComplete="name"
            rules={NAME_RULES}
          />
          <FormInput
            name="email"
            type="email"
            label={fields.email.label}
            placeholder={fields.email.placeholder}
            autoComplete="email"
            rules={EMAIL_RULES}
          />
          <PasswordInput
            name="password"
            label={fields.password.label}
            placeholder={fields.password.placeholder}
            autoComplete="new-password"
            rules={NEW_PASSWORD_RULES}
          />
          <SubmitButton loading={submitting} className="self-end">
            {content.submitLabel}
          </SubmitButton>
        </AppForm>
      </div>
      <AuthSwitchLink prompt={content.switchPrompt} link={content.switchLink} />
    </div>
  );
}
