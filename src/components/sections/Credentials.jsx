import React from "react";
import SectionHeader from "../common/SectionHeader";
import { RevealGroup } from "../common/RevealGroup";
import { useLanguage } from "../../context/LanguageContext";

import credentialsImg from "../../assets/credentialsImg/mohammad-credentials.png";

import "./credentials.css";

const Credentials = () => {
  const { t } = useLanguage();

  return (
    <section id="Credentials" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("credentials.eyebrow")}
          title={t("credentials.title")}
          kicker={t("credentials.kicker")}
          align="center"
        />

        <div className="credentials-container">
          <RevealGroup
            className="row g-4 pb-2 align-items-center justify-content-between"
            amount={0.1}
          >
            <div className="col-lg-6 align-self-center">
              <div className="description d-flex flex-column gap-5">
                <h3>{t("codyadCredentials.title")}</h3>
                <p>
                    {t("codyadCredentials.text")}
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-end justify-content-end">
              <div className="img-credentials align-self-start">
                <img
                  className="image-credentialsImg align-items-start"
                  width={"400px"}
                  height={"400px"}
                  src={credentialsImg}
                  alt=""
                />
              </div>
            </div>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
