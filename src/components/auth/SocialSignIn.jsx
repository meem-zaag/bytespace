"use client";

import FacebookIcon from "@/components/icons/FacebookIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";

const ICONS = { facebook: FacebookIcon, google: GoogleIcon };

/**
 * "or" divider + square social sign-in buttons (Figma: 72px, 24px radius, `ink-200` border).
 *
 * @param {object} props
 * @param {string} props.dividerLabel
 * @param {{ id: "facebook" | "google", label: string }[]} props.providers
 * @param {(provider: "facebook" | "google") => void} props.onSelect
 * @param {string | null} [props.pending] provider currently signing in
 * @param {boolean} [props.disabled=false]
 */
export default function SocialSignIn({
  dividerLabel,
  providers,
  onSelect,
  pending,
  disabled = false,
}) {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px] text-body-l text-neutral-500">
        <span className="h-px flex-1 bg-ink-200" />
        {dividerLabel}
        <span className="h-px flex-1 bg-ink-200" />
      </div>
      <ul className="flex gap-4">
        {providers.map((provider) => {
          const Icon = ICONS[provider.id];
          return (
            <li key={provider.id}>
              <button
                type="button"
                aria-label={provider.label}
                aria-busy={pending === provider.id}
                disabled={disabled}
                onClick={() => onSelect(provider.id)}
                className="flex size-18 cursor-pointer items-center justify-center rounded-3xl border border-ink-200 text-black transition-colors hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-60 aria-busy:animate-pulse"
              >
                <Icon className="size-10" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
