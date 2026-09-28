import Link from "next/link";
import { cn } from "@/lib/utils/cn";

/**
 * "Already have an account? Login" line at the bottom of the auth card.
 *
 * @param {object} props
 * @param {string} props.prompt
 * @param {{ label: string, href: string }} props.link
 * @param {"default" | "muted"} [props.tone="default"] prompt color (sign-in uses a lighter grey)
 */
export default function AuthSwitchLink({ prompt, link, tone = "default" }) {
  return (
    <p
      className={cn(
        "text-center text-body-m",
        tone === "muted" ? "text-neutral-400" : "text-neutral-700",
      )}
    >
      {prompt}{" "}
      <Link href={link.href} className="rounded-sm text-primary-800 hover:underline">
        {link.label}
      </Link>
    </p>
  );
}
