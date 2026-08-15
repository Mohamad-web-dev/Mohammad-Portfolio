import { motion } from "framer-motion";
import { FiArrowLeft, FiCode } from "react-icons/fi";

import AnchorLink from "../common/AnchorLink";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import "./hero.css";
import image from "../../assets/img/1profile.webp";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { pick, t } = useLanguage();

  return (
    <section className="hero section">
      <div className="container-page hero__grid">
        <motion.div
          className="hero__avatar glass-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <span className="hero__avatar-tag hero__avatar-tag--start">
            UI LAB
          </span>
          <span className="hero__avatar-tag hero__avatar-tag--end">
            SHIP MODE
          </span>

          <div className="hero__avatar-frame">
            <img
              // width={"300px"}
              // height={"400px"}
              src={image}
              alt="profile"
              className="hero-image"
              style={{ objectFit: "cover" }}
            />
            {/* <span className="hero__avatar-initial">
              {pick(siteConfig.name).charAt(0)}
            </span> */}
          </div>

          <div className="hero__avatar-footer">
            <span className="hero__avatar-label">
              {t("hero.mainSkillLabel")}
            </span>
            <strong>{siteConfig.mainStack}</strong>
          </div>
        </motion.div>

        <motion.div
          className="hero__code glass-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          <div className="hero__code-titlebar">
            <div className="hero__code-dots">
              <span /> <span /> <span />
            </div>
            <span className="hero__code-filename">
              <FiCode size={12} /> profile.ts — Portfolio
            </span>
          </div>

          <div className="hero__code-body">
            <p className="hero__line">
              <span className="hero__kw">const</span>{" "}
              <span className="hero__var">arman</span> = {"{"}
            </p>

            <p className="hero__line hero__indent">
              <span className="hero__prop">name</span>:
            </p>
            <motion.h1
              className="hero__name gradient-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.35 }}
            >
              {pick(siteConfig.name)}
            </motion.h1>

            <p className="hero__line hero__indent">
              <span className="hero__prop">role</span>:
            </p>
            <motion.h2
              className="hero__role"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.5 }}
            >
              {pick(siteConfig.role)}
            </motion.h2>

            <p className="hero__line hero__indent">
              <span className="hero__prop">build</span>:{" "}
              <span className="hero__kw">async</span> () =&gt; {"{"}
            </p>
            <p className="hero__line hero__indent2">
              <span className="hero__prop">bio</span>:
            </p>
            <motion.p
              className="hero__bio"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.65 }}
            >
              {pick(siteConfig.bio)}
            </motion.p>

            <motion.div
              className="hero__cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.8 }}
            >
              <AnchorLink to="projects" className="btn-gradient">
                {t("hero.viewProjects")} <FiArrowLeft size={15} />
              </AnchorLink>
              <AnchorLink to="contact" className="btn-outline-glass">
                {t("hero.contactMe")}
              </AnchorLink>
            </motion.div>

            <span className="hero__cursor" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
