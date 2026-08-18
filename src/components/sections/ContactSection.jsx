import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";

import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import { siteConfig } from "../../data/siteConfig";
import { useLanguage } from "../../context/LanguageContext";
import "./contactSection.css";
import { ErrorMessage, FastField, Form, Formik } from "formik";
import Input from "../common/Input";

const initialForm = { name: "", email: "", phone: "", message: "" };

const validation = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "نام الزامی است";
  } else if (!/^[a-zA-Z\u0600-\u06FF\s]+$/.test(values.name)) {
    errors.name = "نام فقط باید شامل حروف فارسی و انگلیسی باشد";
  }

  if (!values.email.trim()) {
    errors.email = "ایمیل الزامی است";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "ایمیل معتبر نیست";
  }

  if (values.phone && !/^09\d{9}$/.test(values.phone)) {
    errors.phone = "شماره موبایل معتبر نیست";
  }

  if (!values.message.trim()) {
    errors.message = "پیام الزامی است";
  }

  return errors;
};

export default function ContactSection() {
  const { pick, t, dir } = useLanguage();
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

  const handleSubmit = async (values, { resetForm }) => {
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/myegblpw", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("ارسال فرم ناموفق بود");
      }

      setStatus("sent");
      resetForm();

      setTimeout(() => {
        setStatus("idle");
      }, 3500);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
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

          <Formik
            initialValues={initialForm}
            onSubmit={handleSubmit}
            validate={validation}
          >
            <Reveal direction="start" className="contact-form glass-card">
              <Form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <Input
                      name={"name"}
                      label={t("contact.nameLabel")}
                      placeholder={t("contact.namePlaceholder")}
                      component={"input"}
                      type={"text"}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      name={"email"}
                      label={t("contact.emailLabel")}
                      placeholder={t("contact.emailPlaceholder")}
                      component={"input"}
                      type={"email"}
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      name={"phone"}
                      label={t("contact.phoneLabel")}
                      placeholder={t("contact.phonePlaceholder")}
                      component={"input"}
                      type={"tel"}
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      name={"message"}
                      label={t("contact.messageLabel")}
                      placeholder={t("contact.messagePlaceholder")}
                      component={"textarea"}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-gradient contact-form__submit"
                  disabled={status === "sending"}
                >
                  {status === "sending"
                    ? "در حال ارسال..."
                    : t("contact.submit")}

                  {status !== "sending" && <FiSend size={15} />}
                </button>
                {status === "sent" && (
                  <p className="contact-form__success">
                    {t("contact.success")}
                  </p>
                )}
              </Form>
            </Reveal>
          </Formik>
        </div>
      </div>
    </section>
  );
}
