import { useTranslation } from "react-i18next";
import profileImg from "../assets/image/profile.png"
const About = () => {
    const {t} = useTranslation()

  return (
    <section className="about d-flex flex-md-row flex-column align-items-center justify-content-center px-4 py-5">
      <div className="text ">
        <h2 className="pb-4">
          {t("about.title")}
        </h2>
        <p className="lh-lg">
          {t("about.description1")}
          {t("about.description2")}
        </p>
        <button className="btn"></button>
      </div>
      <div className="image">
        <img src={profileImg}  alt="" srcset="" />
      </div>
    </section>
  );
};

export default About;
