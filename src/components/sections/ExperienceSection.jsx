import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

import SectionHeader from "../common/SectionHeader";
import ExperienceItem from "../common/ExperienceItem";
import { experience } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";
import "./experienceSection.css";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: t("experience.tabAll") },
    { id: "frontend", label: t("experience.tabFrontend") },
    { id: "backend", label: t("experience.tabBackend") },
  ];

  const filtered = useMemo(() => {
    if (activeTab === "all") return experience;
    return experience.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <section id="experience" className="section experience-section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("experience.eyebrow")}
          title={t("experience.title")}
          kicker={t("experience.kicker")}
          align="center"
        />

        <div className="experience-tabs" role="tablist" aria-label="Experience filter">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`experience-tabs__btn ${activeTab === tab.id ? "experience-tabs__btn--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="experience-timeline-wrap">
          <span className="experience-timeline__anchor">
            <FiBriefcase size={18} />
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="experience-timeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  item={item}
                  side={index % 2 === 0 ? "start" : "end"}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
