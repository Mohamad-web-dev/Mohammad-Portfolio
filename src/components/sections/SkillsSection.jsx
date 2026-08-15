import SectionHeader from "../common/SectionHeader";
import SkillGroupCard from "../common/SkillGroupCard";
import TechStack from "./TechStack";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { skillGroups } from "../../data/techStack";
import { useLanguage } from "../../context/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          kicker={t("skills.kicker")}
          align="center"
        />

        <RevealGroup className="row g-4 mb-5 pb-2" amount={0.1}>
          {skillGroups.map((group) => (
            <RevealItem key={group.title.fa} className="col-lg-4">
              <SkillGroupCard group={group} />
            </RevealItem>
          ))}
        </RevealGroup>

        <TechStack />
      </div>
    </section>
  );
}
