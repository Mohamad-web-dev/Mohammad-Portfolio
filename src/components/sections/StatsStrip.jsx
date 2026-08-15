import { FiCheckCircle, FiMapPin, FiTrendingUp } from "react-icons/fi";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import "./statsStrip.css";

export default function StatsStrip() {
  const { pick, t } = useLanguage();

  const stats = [
    { icon: FiCheckCircle, label: t("stats.statusLabel"), value: pick(siteConfig.availability) },
    { icon: FiTrendingUp, label: t("stats.focusLabel"), value: t("stats.focusValue") },
    { icon: FiMapPin, label: t("stats.locationLabel"), value: pick(siteConfig.location) },
  ];

  return (
    <RevealGroup className="container-page stats-strip">
      {stats.map(({ icon: Icon, label, value }) => (
        <RevealItem key={label} className="stats-strip__item glass-card glass-card--hover">
          <span className="stats-strip__icon">
            <Icon size={16} />
          </span>
          <div>
            <p className="stats-strip__label">{label}</p>
            <p className="stats-strip__value">{value}</p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
