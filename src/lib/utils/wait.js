/**
 * Resolves after `ms` milliseconds. Used by the simulated services to mimic network latency.
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */
export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
