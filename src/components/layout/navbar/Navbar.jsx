import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX, FiZap } from "react-icons/fi";

import { navLinks, siteConfig } from "../../../data/siteConfig";
import { useTheme } from "../../../hooks/useTheme";
import { useLanguage } from "../../../context/LanguageContext";
import { scrollToSection } from "../../../utils/scroll";
import "./navbar.css";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, pick, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(navLinks[0].id);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav link for whichever section is most in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
      <div className="container-page site-nav__inner">
        <div className="site-nav__brand">
          <a
            href="#home"
            className="site-nav__brand-link"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className="site-nav__brand-name">{siteConfig.handle}</span>
            <span className="site-nav__brand-icon">MD</span>
          </a>
          <button
            type="button"
            className="icon-btn site-nav__burger"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

        <nav
          className={`site-nav__links ${open ? "site-nav__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`site-nav__link ${activeId === link.id ? "site-nav__link--active" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                handleNavClick(link.id);
              }}
            >
              {link.live && <span className="status-dot status-dot--live" />}
              {pick(link.label)}
            </a>
          ))}
        </nav>
        <div className="site-nav__utils">
          <button
            type="button"
            className="icon-btn"
            aria-label="Toggle light / dark theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            type="button"
            className="icon-btn icon-btn--lang"
            onClick={toggleLang}
            aria-label="Switch language"
            lang={lang === "fa" ? "en" : "fa"}
          >
            {t("common.langSwitchTo")}
          </button>
        </div>
      </div>
    </header>
  );
}
