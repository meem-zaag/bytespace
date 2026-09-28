/**
 * Whether a nav link should be highlighted for the current pathname.
 * The home link only matches "/", other links also match their nested pages.
 *
 * @param {string} pathname
 * @param {string} href
 * @returns {boolean}
 */
export function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
