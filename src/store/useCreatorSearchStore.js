import { create } from "zustand";

/**
 * Search query of the Creators list, shared by the hero search and the grid.
 *
 * @typedef {object} CreatorSearchState
 * @property {string} query
 * @property {number} resetCount incremented by `reset` so the search box clears too
 * @property {(query: string) => void} setQuery
 * @property {() => void} reset
 */

/** @type {import("zustand").UseBoundStore<import("zustand").StoreApi<CreatorSearchState>>} */
export const useCreatorSearchStore = create((set) => ({
  query: "",
  resetCount: 0,
  setQuery: (query) => set({ query }),
  reset: () => set((state) => ({ query: "", resetCount: state.resetCount + 1 })),
}));
