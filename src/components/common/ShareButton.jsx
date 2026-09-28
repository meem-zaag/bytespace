"use client";

import { App } from "antd";
import ShareIcon from "@/components/icons/ShareIcon";
import AppButton from "@/components/ui/AppButton";

/**
 * Lime "Share" pill: uses the native share sheet when available, otherwise copies the page URL.
 *
 * @param {object} props
 * @param {string} props.title shared title
 * @param {string} [props.label="Share"]
 * @param {string} [props.className]
 */
export default function ShareButton({ title, label = "Share", className }) {
  const { message } = App.useApp();

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // The user closed the share sheet; nothing to do.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      message.success("Link copied to clipboard");
    } catch {
      message.error("Couldn't copy the link. Please copy it from the address bar.");
    }
  }

  return (
    <AppButton size="md" icon={<ShareIcon />} onClick={handleShare} className={className}>
      {label}
    </AppButton>
  );
}
