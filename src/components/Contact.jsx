import {
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import Map from "./Map";
import { useTranslation } from "react-i18next";

const Contact = () => {

  const {t} = useTranslation()
  return (
    <section className="contact not-last: w-100 h-100 py-5 px-lg-5 px-3">
      <h2 className=" fw-bolder">{t("contact.title")}</h2>
      <div className="container mt-5">
        <div className="row gap-4 gap-md-0">
          <div className="col-12 col-md-4 content-box  d-flex flex-column gap-3 justify-content-start align-items-center">
            <h4 className="title-contact">{t("contact.socialMedia")}</h4>
            <ul className="d-flex flex-md-column flex-row gap-4 gap-sm-5  gap-md-3">
              <li className="list-item">
                <a href="https://www.instagram.com/mmad._.wd"  target="_blank" className="link-list-item">
                  {" "}
                  <FaInstagram color="#E1306C" size={30} />
                </a>
              </li>
              <li className="list-item">
                <a href="https://t.me/989906881286"  target="_blank" className="link-list-item">
                  {" "}
                  <FaTelegramPlane color="#24A1DE" size={30} />{" "}
                </a>
              </li>
              <li className="list-item">
                <a href="https://wa.me/989906881286"  target="_blank" className="link-list-item">
                  <FaWhatsapp color="#25D366" size={30} />
                </a>
              </li>
              <li className="list-item">
                <a href="https://github.com/Mohamad-web-dev"  target="_blank" className="link-list-item">
                  {" "}
                  <FaGithub color="#ffffff" size={30} />
                </a>
              </li>
              <li className="list-item">
                <a href="https://www.linkedin.com/in/mohammad-nazari-38a815415/"  target="_blank" className="link-list-item">
                  {" "}
                  <FaLinkedinIn color="#0A66C2" size={30} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 content-box d-flex flex-column gap-3 justify-content-start align-items-center">
            <h4 className="title-contact">{t("contact.location")}</h4>
            <div className="location">
              <Map />
            </div>
          </div>
          <div className="col-12 col-md-4 content-box d-flex flex-column gap-3 justify-content-start align-items-center">
            <h4 className="title-contact">{t("contact.phone")}</h4>
            <div className="d-flex flex-row align-items-center justify-content-center gap-3">
              <h4>09906881286</h4>
              <a href="tel:+989906881286" target="_blank">
                <FaPhoneAlt size={30} color="#25D366" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
