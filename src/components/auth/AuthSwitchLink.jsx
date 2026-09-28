import Link from "next/link";

/**
 * "Already have an account? Login" line at the bottom of the auth card.
 *
 * @param {object} props
 * @param {string} props.prompt
 * @param {{ label: string, href: string }} props.link
 */
export default function AuthSwitchLink({ prompt, link }) {
  return (
    <p className="text-center text-body-m text-neutral-700">
      {prompt}{" "}
      <Link href={link.href} className="rounded-sm text-primary-800 hover:underline">
        {link.label}
      </Link>
    </p>
  );
}
