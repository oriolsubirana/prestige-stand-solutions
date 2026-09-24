import { es } from "./es";
import { en } from "./en";

export const defaultLang = "es";
export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;

const dictionaries = { es, en } as const;

export const isLang = (value: unknown): value is Lang => typeof value === "string" && value in languages;

export const getLang = (locale: string | undefined): Lang => (isLang(locale) ? locale : defaultLang);

export const useTranslations = (lang: Lang) => dictionaries[lang];

/** "/" → "/" for Spanish, "/en/" for English */
export const localePath = (lang: Lang, path = "/") => (lang === defaultLang ? path : `/${lang}${path}`);
