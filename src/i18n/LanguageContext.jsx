import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "fa";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "fa" ? stored : "fa";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      isFa: lang === "fa",
      toggleLang: () => setLang((prev) => (prev === "fa" ? "en" : "fa")),
      /** Pick the right field from a { fa, en } bilingual object. */
      pick: (bilingual) => (bilingual ? bilingual[lang] ?? bilingual.fa : ""),
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
