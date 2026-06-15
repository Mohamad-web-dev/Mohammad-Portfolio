import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Content from "./layout/Content";

import Navbar from "./layout/Navbar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const [direction, setDirection] = useState("rtl");
  const [menu, setMenu] = useState(false);

  const { i18n } = useTranslation();

  const handelChangeLang = () => {
    if (i18n.language == "fa") {
      i18n.changeLanguage("en");
      setDirection("ltr");
      localStorage.setItem("lang", JSON.stringify("en"));
    } else {
      i18n.changeLanguage("fa")
      setDirection("rtl")
      localStorage.setItem("lang", JSON.stringify("fa"));
    }
  };

  useEffect(()=>{
    if (JSON.parse(localStorage.getItem("lang"))==="fa") {
      i18n.changeLanguage("fa")
      setDirection("rtl")
    } else {
       i18n.changeLanguage("en")
      setDirection("ltr")
    }
  },[])

  return (
    <div className="main-page" style={direction === "rtl" ? {direction:"rtl"} :{direction:"ltr"} }>
      <BrowserRouter>
        <Navbar handelChangeLang={handelChangeLang} menu={menu} setMenu={setMenu} />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
