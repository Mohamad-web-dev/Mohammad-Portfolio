import { siteConfig } from "../../../data/siteConfig";
import { socialLinks } from "../../../data/social";
import { useLanguage } from "../../../context/LanguageContext";
import "./footer.css";

export default function Footer() {
  const { pick, t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container-page site-footer__inner">
        <div>
          <p className="site-footer__brand">{siteConfig.handle}</p>
          <p className="site-footer__tagline">
            {pick(siteConfig.role)} — {pick(siteConfig.location)}
          </p>
        </div>

        <div className="site-footer__social">
          {socialLinks.map(({ id, url, name, Icon }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={pick(name)}
              className="icon-btn"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        <p className="site-footer__copy">
          © {new Date().getFullYear()} {t("footer.rights")}{" "}
          {pick(siteConfig.name)} {t("footer.reservedSuffix")}
        </p>
      </div>
    </footer>
  );
}
