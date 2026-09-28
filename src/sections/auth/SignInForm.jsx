"use client";

import { App } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthCardHeader from "@/components/auth/AuthCardHeader";
import AuthSwitchLink from "@/components/auth/AuthSwitchLink";
import SocialSignIn from "@/components/auth/SocialSignIn";
import AppForm from "@/components/ui/form/AppForm";
import FormInput from "@/components/ui/form/FormInput";
import PasswordInput from "@/components/ui/form/PasswordInput";
import SubmitButton from "@/components/ui/form/SubmitButton";
import { EMAIL_RULES, PASSWORD_RULES } from "@/lib/constants/validation";
import { signIn, signInWithProvider } from "@/lib/services/auth";

/**
 * Sign-in form (Email, Password) + social providers, all simulated (see `lib/services/auth.js`).
 *
 * @param {object} props
 * @param {typeof import("@/lib/data/auth").auth.signIn} props.content
 */
export default function SignInForm({ content }) {
  const { message } = App.useApp();
  const router = useRouter();
  const [pending, setPending] = useState(null);
  const busy = pending !== null;
  const { fields } = content;

  async function finish(request, key) {
    setPending(key);
    const result = await request();
    message.success(result.message);
    router.push(content.successRedirect);
  }

  return (
    <div className="flex flex-1 flex-col justify-between gap-12">
      <div className="flex flex-col gap-10">
        <AuthCardHeader eyebrow={content.eyebrow} title={content.title} />
        <AppForm
          onFinish={(values) => finish(() => signIn(values), "email")}
          disabled={busy}
          className="flex flex-col"
        >
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
            rules={PASSWORD_RULES}
          />
          <SubmitButton loading={pending === "email"} className="self-end">
            {content.submitLabel}
          </SubmitButton>
        </AppForm>
      </div>
      <SocialSignIn
        dividerLabel={content.dividerLabel}
        providers={content.providers}
        pending={pending}
        disabled={busy}
        onSelect={(provider) => finish(() => signInWithProvider(provider), provider)}
      />
      <AuthSwitchLink prompt={content.switchPrompt} link={content.switchLink} tone="muted" />
    </div>
  );
}
