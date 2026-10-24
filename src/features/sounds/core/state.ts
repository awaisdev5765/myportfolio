import { ref } from "vue";

/**
 * Shared audio state, kept in its own module so that both the Howler
 * composables and low-level sound utilities can import it without
 * creating circular imports.
 */
export const howlerUnlocked = ref(false);
export const soundsEnabled = ref(
  typeof window === "undefined" ? true : localStorage.getItem("portfolio-soundsEnabled") !== "false",
);
