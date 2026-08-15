import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import "./contactSection.css";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function ContactSection() {
  const { pick, t , dir} = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sent

  const contactPoints = [
    {
      icon: FiMail,
      label: t("contact.emailInfoLabel"),
      value: siteConfig.email,
    },
    {
      icon: FiPhone,
      label: t("contact.phoneInfoLabel"),
      value: siteConfig.phone,
    },
    {
      icon: FiMapPin,
      label: t("contact.locationInfoLabel"),
      value: pick(siteConfig.location),
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Front-end only demo: wire this up to your API / email service.
    setStatus("sent");
    setForm(initialForm);
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          align={dir === "rtl" ? "end" : "start"}
        />

        <div className="contact-grid">
          <Reveal direction="end" className="contact-info">
            {contactPoints.map(({ icon: Icon, label, value }) => (
              <div key={label} className="contact-info__item glass-card">
                <span className="contact-info__icon">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="contact-info__label">{label}</p>
                  <p className="contact-info__value">{value}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal
            as="form"
            direction="start"
            className="contact-form glass-card"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="row g-3">
              <div className="col-md-6">
                <label className="contact-form__label" htmlFor="name">
                  {t("contact.nameLabel")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="contact-form__input"
                  placeholder={t("contact.namePlaceholder")}
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="contact-form__label" htmlFor="email">
                  {t("contact.emailLabel")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="contact-form__input"
                  placeholder={t("contact.emailPlaceholder")}
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="contact-form__label" htmlFor="phone">
                  {t("contact.phoneLabel")}
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="contact-form__input"
                  placeholder={t("contact.phonePlaceholder")}
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <label className="contact-form__label" htmlFor="message">
                  {t("contact.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-form__input contact-form__textarea"
                  placeholder={t("contact.messagePlaceholder")}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-gradient contact-form__submit">
              {t("contact.submit")} <FiSend size={15} />
            </button>

            {status === "sent" && (
              <p className="contact-form__success">{t("contact.success")}</p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
