import { wait } from "@/lib/utils/wait";

/**
 * Subscribes an email to the newsletter.
 * There is no backend yet: this simulates the request so the UI can be completed, and is the
 * single place to swap in a real API call later.
 *
 * @param {{ email: string }} values
 * @returns {Promise<{ ok: true, message: string }>}
 */
export async function subscribeToNewsletter({ email }) {
  await wait(700);
  return { ok: true, message: `Thanks! ${email} is now subscribed to ByteSpace updates.` };
}
