import { SiGithub, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { siteConfig } from "./siteConfig";

export const socialLinks = [
  {
    id: "whatsapp",
    name: { fa: "واتساپ", en: "WhatsApp" },
    handle: { fa: "گفت‌وگوی سریع", en: "Quick chat" },
    url: siteConfig.social.whatsapp,
    Icon: SiWhatsapp,
    color: "#25D366",
  },
  {
    id: "instagram",
    name: { fa: "اینستاگرام", en: "Instagram" },
    handle: { fa: "پشت‌صحنه کارها", en: "Behind the scenes" },
    url: siteConfig.social.instagram,
    Icon: SiInstagram,
    color: "#E1306C",
  },
  {
    id: "linkedin",
    name: { fa: "لینکدین", en: "LinkedIn" },
    handle: { fa: "رزومه و سوابق حرفه‌ای", en: "Resume & work history" },
    url: siteConfig.social.linkedin,
    Icon: FaLinkedin,
    color: "#0A66C2",
  },
  {
    id: "telegram",
    name: { fa: "تلگرام", en: "Telegram" },
    handle: { fa: "ارتباط مستقیم", en: "Direct message" },
    url: siteConfig.social.telegram,
    Icon: SiTelegram,
    color: "#26A5E4",
  },
  {
    id: "github",
    name: { fa: "گیت‌هاب", en: "GitHub" },
    handle: { fa: "سورس‌ پروژه‌ها", en: "Project source code" },
    url: siteConfig.social.github,
    Icon: SiGithub,
    color: "#181717",
  },
];
