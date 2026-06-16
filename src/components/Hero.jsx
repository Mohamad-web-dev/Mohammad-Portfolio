import { Link } from "react-router-dom";
import profileImg from "../assets/image/profile1.webp";
import {
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Hero = () => {

  const {t} = useTranslation()

  return (
    <header className="hero">
      <div className="name-part d-flex flex-column justify-content-between align-items-start">
        <p className=" fs-lg-3">
          {t("hero.greeting")}<br />
          <strong>{t("hero.name")}</strong> <br/> {t("hero.job")}
        </p>
        <div className="icons d-flex flex-column gap-3 align-items-center justify-content-center">
          <a href="https://www.instagram.com/mmad._.wd"  target="_blank">
            <FaInstagram size={20} color="#E4405F" />
          </a>
          <a href="https://wa.me/989906881286" target="_blank">
            {" "}
            <FaWhatsapp size={20} color="#25D366" />
          </a>
          <a href="https://t.me/989906881286" target="_blank">
            {" "}
            <FaTelegramPlane size={20} color="#229ED9" />
          </a>
          <a href="tel:+989906881286" target="_blank">
            <FaPhoneAlt size={20} color="#ffffff" />
          </a>
        </div>
      </div>

      <div className="profile-img">
        <img src={profileImg} alt="" srcset="" />
      </div>
      <div className="introduction">
        <p className="text-profile">
          {t("hero.description")}
        </p>
        <div className="buttons d-flex flex-column ">
          <a
            className="button-hero px-3 rounded"
            href=".../public/resume.pdf"
            download="Mohammad_Nazari_CV.pdf"
          >
            {t("hero.downloadResume")}
          </a>
          <Link to={"/project"} className="button-hero px-3 rounded">
            {t("hero.viewProjects")}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
