import SectionHeader from "../common/SectionHeader";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { techStack } from "../../data/techStack";
import { useLanguage } from "../../context/LanguageContext";
import "./techStack.css";

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <div className="tech-stack">
      <SectionHeader eyebrow={t("techStack.eyebrow")} title={t("techStack.title")} align="center" />

      <RevealGroup className="tech-stack__grid" amount={0.05}>
        {techStack.map((tech) => (
          <RevealItem key={tech.name} className="tech-stack__item">
            <span
              className="tech-stack__icon"
              style={{ background: `${tech.color}1a`, color: tech.color }}
            >
              <tech.Icon size={16} />
            </span>
            {tech.name}
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
