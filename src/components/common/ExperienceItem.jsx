import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import { useLanguage } from "../../context/LanguageContext";
import "./experienceItem.css";

export default function ExperienceItem({ item, side = "start", index = 0 }) {
  const { pick } = useLanguage();

  return (
    <div className={`experience-item experience-item--${side}`}>
      <span className={`experience-item__node experience-item__node--${item.statusType}`} />

      <Reveal direction={side === "start" ? "end" : "start"} delay={index * 0.05}>
        <span className={`status-badge status-badge--${item.statusType}`}>
          <span className={`status-dot status-dot--${item.statusType}`} />
          {pick(item.status)}
        </span>

        <article className="experience-item__card glass-card glass-card--hover">
          <div className="experience-item__head">
            <h3 className="experience-item__company">
              {item.company} <FiExternalLink size={13} />
            </h3>
            <span className="experience-item__period">{pick(item.period)}</span>
          </div>

          <p className="experience-item__role">{pick(item.role)}</p>
          <p className="experience-item__desc">{pick(item.description)}</p>

          <div className="experience-item__stack">
            {item.stack.map((tech) => (
              <span key={tech} className="chip experience-item__chip">
                {tech}
              </span>
            ))}
          </div>
        </article>
      </Reveal>
    </div>
  );
}
