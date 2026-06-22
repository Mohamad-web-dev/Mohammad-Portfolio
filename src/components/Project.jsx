import { useState } from "react";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  const ProjectData = [
    {
      number: "01",
      category: t("projects.project1.type"),
      title: t("projects.project1.title"),
      tech: t("projects.project1.technologies"),
      image: "../images/1.webp",
      urlSite:"#"
    },
    {
      number: "02",
      category: t("projects.project2.type"),
      title: t("projects.project2.title"),
      tech: t("projects.project2.technologies"),
      image: "../images/2.webp",
      urlSite:"#"
    },
    {
      number: "03",
      category: t("projects.project3.type"),
      title: t("projects.project3.title"),
      tech: t("projects.project3.technologies"),
      image: "../images/3.webp",
      urlSite:"#"
    },
    {
      number: "04",
      category: t("projects.project4.type"),
      title: t("projects.project4.title"),
      tech: t("projects.project4.technologies"),
      image: "../images/4.webp",
      urlSite:"https://mohammadweather.vercel.app/"
    },
    {
      number: "05",
      category: t("projects.project5.type"),
      title: t("projects.project5.title"),
      tech: t("projects.project5.technologies"),
      image: "../images/5.webp",
      urlSite:"https://mohammadwebdev.vercel.app/"
    },
  ];



  return (
    <section className="projects-section py-5">
      <div className="container">
        <h2>{t("projects.title")}</h2>

        <div className="row g-4">
          {ProjectData.map((item, index) => (
            <div
              className="col-lg-4 col-12 col-sm-6  position-relative"
              key={item.number}
            >
              <div className="project-card">
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="number">{item.number}</h1>

                  <span className="category">{item.category}</span>
                </div>

                <h2 className="title mt-3">{item.title}</h2>

                <p className="text-secondary mt-4">
                  {t("projects.project1.technologyTitle")}
                </p>

                <p className="tech">{item.tech}</p>

                <div className="image-box">
                  <a href={item.urlSite} className="link-site-image"  target="_blank" >

                  <img
                    src={item.image}
                    className="img-fluid object-cover"
                    alt="image from website"
                  />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
