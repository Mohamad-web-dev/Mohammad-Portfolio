import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const STORAGE_KEY = "portfolio-lang";
const LanguageContext = createContext(null);

function getInitialLang() {
  if (typeof window === "undefined") return "fa";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fa" ? stored : "fa";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);
  const dir = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const toggleLang = () => setLang((prev) => (prev === "fa" ? "en" : "fa"));

  // t("nav.home") -> looks up translations.nav.home[lang], falling back to fa then the key itself.
  const t = useMemo(() => {
    return (path) => {
      const parts = path.split(".");
      let node = translations;
      for (const part of parts) {
        node = node?.[part];
        if (node === undefined) return path;
      }
      return node[lang] ?? node.fa ?? path;
    };
  }, [lang]);

  // pick({fa, en}) -> localized string for the current language, with sensible fallbacks.
  const pick = useMemo(() => {
    return (field) => {
      if (typeof field === "string") return field;
      return field?.[lang] ?? field?.fa ?? "";
    };
  }, [lang]);

  const value = { lang, dir, toggleLang, t, pick };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
