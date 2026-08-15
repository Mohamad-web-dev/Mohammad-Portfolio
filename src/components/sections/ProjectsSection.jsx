import SectionHeader from "../common/SectionHeader";
import ProjectCard from "../common/ProjectCard";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { projects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          kicker={t("projects.kicker")}
          align="center"
        />

        <RevealGroup className="row g-4" amount={0.08}>
          {projects.map((project) => (
            <RevealItem key={project.id} className="col-sm-6 col-lg-4">
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
