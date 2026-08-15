import { FiArrowUpLeft } from "react-icons/fi";

import SectionHeader from "../common/SectionHeader";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { socialLinks } from "../../data/social";
import { useLanguage } from "../../context/LanguageContext";
import "./socialSection.css";

export default function SocialSection() {
  const { pick, t } = useLanguage();

  return (
    <section id="social" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("social.eyebrow")}
          title={t("social.title")}
          kicker={t("social.kicker")}
          align="center"
        />

        <RevealGroup className="social-grid" amount={0.15}>
          {socialLinks.map((item) => (
            <RevealItem key={item.id}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="social-card glass-card glass-card--hover"
                style={{ "--social-color": item.color }}
              >
                <span className="social-card__icon">
                  <item.Icon size={22} />
                </span>
                <span className="social-card__body">
                  <span className="social-card__name">{pick(item.name)}</span>
                  <span className="social-card__handle">{pick(item.handle)}</span>
                </span>
                <span className="social-card__arrow">
                  <FiArrowUpLeft size={16} />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
