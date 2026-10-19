import type { IconName } from "../components/Icon.astro";

export const contact = {
  email: "contact@prestigestandsolutions.com",
  web: "www.prestigestandsolutions.com",
} as const;

// Icons pair by index with the translated lists in src/i18n
export const serviceIcons: IconName[] = ["pen-nib", "cube"];
export const extraIcons: IconName[] = ["clipboard-text", "monitor-play", "chart-line-up"];
export const sectorIcons: IconName[] = [
  "flask",
  "fork-knife",
  "cpu",
  "drop",
  "gear-six",
  "car-profile",
  "first-aid-kit",
  "t-shirt",
  "lightning",
  "airplane-tilt",
];
