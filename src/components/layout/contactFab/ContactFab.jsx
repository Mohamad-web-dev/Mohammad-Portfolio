import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageCircle, FiX } from "react-icons/fi";

import { useLanguage } from "../../../context/LanguageContext";
import "./contactFab.css";
import { socialLinks } from "../../../data/social";

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  const { pick, t } = useLanguage();

  return (
    <div
      className="contact-fab d-flex flex-column align-items-center gap-2"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AnimatePresence>
        {open && (
          <motion.div className="contact-fab__list d-flex flex-column align-items-center gap-2">
            {socialLinks.map(({ id, url, name, Icon, color }, index) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={pick(name)}
                className="contact-fab__item"
                style={{ "--fab-color": color }}
                initial={{ opacity: 0, y: 14, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.6 }}
                transition={{ duration: 0.25, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
              >
                <Icon size={17} />
                <span className="contact-fab__tooltip">{pick(name)}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="contact-fab__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={t("contactFab.label")}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -45 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
            className="d-inline-flex"
          >
            {open ? <FiX size={22} /> : <FiMessageCircle size={22} />}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
