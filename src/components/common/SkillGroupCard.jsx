import { useLanguage } from "../../context/LanguageContext";
import "./skillGroupCard.css";

export default function SkillGroupCard({ group }) {
  const { pick } = useLanguage();

  return (
    <article className="skill-card glass-card glass-card--hover">
      <div className="skill-card__head">
        <h3 className="skill-card__title">{pick(group.title)}</h3>
        <span className="skill-card__level">{group.level}%</span>
      </div>

      <p className="skill-card__desc">{pick(group.description)}</p>

      <div className="skill-card__bar">
        <div className="skill-card__bar-fill" style={{ width: `${group.level}%` }} />
      </div>

      <div className="skill-card__tags">
        {group.items.map((item) => (
          <span key={item} className="chip skill-card__tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
