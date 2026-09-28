import { create } from "zustand";

/**
 * Open state of the mobile navigation drawer, shared by the header toggle and the drawer.
 *
 * @typedef {object} MobileMenuState
 * @property {boolean} open
 * @property {() => void} openMenu
 * @property {() => void} closeMenu
 */

/** @type {import("zustand").UseBoundStore<import("zustand").StoreApi<MobileMenuState>>} */
export const useMobileMenuStore = create((set) => ({
  open: false,
  openMenu: () => set({ open: true }),
  closeMenu: () => set({ open: false }),
}));
