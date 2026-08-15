import { FiExternalLink } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import "./projectCard.css";

export default function ProjectCard({ project }) {
  const { pick, t } = useLanguage();
  const title = pick(project.title);

  return (
    <article className={`project-card glass-card glass-card--hover project-card--${project.accent}`}>
      <div className="project-card__media">
        {/* <span className="project-card__glyph">{title.charAt(0)}</span> */}
        <img width={"100%"} height={"200px"} style={{objectFit:"cover"}} src={project.imageUrl} alt="weather-app" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{pick(project.description)}</p>

        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="chip project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <a href={project.demoUrl} className="project-card__link" target="_blank" rel="noreferrer">
          {t("projects.livePreview")} <FiExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}
