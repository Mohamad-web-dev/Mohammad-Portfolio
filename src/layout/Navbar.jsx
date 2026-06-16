import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = ({ menu, setMenu, handelChangeLang }) => {
  const [innerWidthPJ, setInnerWidthPJ] = useState(window.innerWidth);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setInnerWidthPJ(window.innerWidth);
      console.log(menu);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handelSetMenu = () => {
    setMenu(true);
  };
  const handelDeleteMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {innerWidthPJ <= 450 ? (
        <>
          <div className="navbar-mb">
            <button
              onClick={handelSetMenu}
              className=" menu-btn  border-0 text-white"
            >
              <FaBars size={25} />
            </button>
            <div className="title">
              <h1 className="title-part fs-5">Mohammad-web-dev</h1>
            </div>
          </div>
          <div
            onClick={handelDeleteMenu}
            className={`bg ${menu ? "active" : ""}`}
          >
            <div className="navbar">
              <div className="right-part">
                <ul className="list">
                  <li className="list-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "isActive-navItem" : ""
                      }
                      to="/"
                    >
                      {t("navbar.home")}
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "isActive-navItem" : ""
                      }
                      to="/about"
                    >
                      {t("navbar.about")}
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "isActive-navItem" : ""
                      }
                      to="/skill"
                    >
                      {t("navbar.skills")}
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "isActive-navItem" : ""
                      }
                      to="/project"
                    >
                      {t("navbar.projects")}
                    </NavLink>
                  </li>
                  <li className="list-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "isActive-navItem" : ""
                      }
                      to="/contact"
                    >
                      {t("navbar.contact")}
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="left-part">
                <button
                  type="button"
                  onClick={handelChangeLang}
                  className="button-chang-ln px-3 px-xl-4"
                >
                  {i18n.language === "en" ? "فارسی" : "English"}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="navbar">
          <div className="right-part">
            <ul className="list">
              <li className="list-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "isActive-navItem" : ""
                  }
                  to="/"
                >
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "isActive-navItem" : ""
                  }
                  to="/about"
                >
                  {t("navbar.about")}
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "isActive-navItem" : ""
                  }
                  to="/skill"
                >
                  {t("navbar.skills")}
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "isActive-navItem" : ""
                  }
                  to="/project"
                >
                  {t("navbar.projects")}
                </NavLink>
              </li>
              <li className="list-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "isActive-navItem" : ""
                  }
                  to="/contact"
                >
                  {t("navbar.contact")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="left-part">
            <button
              type="button"
              onClick={handelChangeLang}
              className="button-chang-ln px-3 px-xl-4"
            >
              {i18n.language === "fa" ? "English" : "فارسی"}
            </button>
          </div>
          <h1 className="title-part fs-5">Mohammad-web-dev</h1>
        </div>
      )}
    </>
  );
};

export default Navbar;
