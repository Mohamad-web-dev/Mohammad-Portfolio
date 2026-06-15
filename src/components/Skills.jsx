import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiNextdotjs, SiTypescript, SiPwa } from "react-icons/si";

const Skills = () => {
  const [skills, setSkills] = useState([
    <FaHtml5 color="#E34F26" size={90} />,
    <FaCss3Alt color="#1572B6" size={90} />,
    <FaBootstrap color="#7952B3" size={90} />,
    <FaJs color="#F7DF1E" size={90} />,
    <FaReact color="#61DAFB" size={90} />,
    <SiNextdotjs size={90} />,
    <SiPwa color="#5A0FC8" size={90} />,
    <SiTypescript color="#3178C6" size={90} />,
    <FaGitAlt color="#F05032" size={90} />,
    <FaGithub size={90} />,
  ]);

  const {t} = useTranslation()

  return (
    <section className="skills-container w-100 d-flex flex-column gap-4 align-items-start justify-content-center px-4 py-5">
      <h2>{t("skills.title")}</h2>
      <div className="slider">
        <div className="slide-track row ">
          {skills.map((icon, index) => (
            <div key={index} className="skill-icon col-3 pb-5">
              <div className="icon">{icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
