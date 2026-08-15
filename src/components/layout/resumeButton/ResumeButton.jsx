import { FiDownload } from "react-icons/fi";
import { useLanguage } from "../../../context/LanguageContext";
import "./resumeButton.css";

export default function ResumeButton() {
  const { t } = useLanguage();

  return (
    <a
      href="/resume.pdf"
      download="Mohammad_Nazari_CV.pdf"
      className="resume-fab"
    >
      <FiDownload size={15} />
      {t("resume.download")}
    </a>
  );
}
