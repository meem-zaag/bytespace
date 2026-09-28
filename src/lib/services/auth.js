import { wait } from "@/lib/utils/wait";

/**
 * Authentication service. There is no backend in this static build: these functions simulate
 * the requests (no credentials are stored or sent anywhere) and are the single place to plug in
 * a real API later.
 */

/**
 * @param {{ name: string, email: string, password: string }} values
 * @returns {Promise<{ ok: true, message: string }>}
 */
export async function signUp({ name }) {
  await wait(900);
  const firstName = name.trim().split(/\s+/)[0];
  return { ok: true, message: `Welcome to ByteSpace, ${firstName}! Your account is ready.` };
}

/**
 * @param {{ email: string, password: string }} values
 * @returns {Promise<{ ok: true, message: string }>}
 */
export async function signIn() {
  await wait(900);
  return { ok: true, message: "Welcome back! You're signed in." };
}
