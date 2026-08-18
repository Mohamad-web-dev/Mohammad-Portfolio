import weatherImage from "../assets/projectImage/weather-app.webp";
import panelImage from "../assets/projectImage/panel-admin.webp";
import todoImage from "../assets/projectImage/todo-app.webp";

export const projects = [
  {
    id: "admin-dashboard",
    title: { fa: "داشبورد ادمین React", en: "React Admin Dashboard" },
    description: {
      fa: "پنل مدیریت مدرن و ریسپانسیو با React، شامل مدیریت کاربران، محصولات، سفارش‌ها، تخفیف‌ها، نقش‌ها و مجوزها با اتصال به بک‌اند اختصاصی از طریق REST API." ,
      en: "A modern, responsive admin panel built with React, featuring management of users, products, orders, discounts, roles, and permissions, and connected to a dedicated backend via REST API.",
    },
    tags: [
      "Recharts",
      "bootstrap",
      "React-Icons",
      "Redux-Toolkit",
      "React-Router",
      "Axios",
      "Vite",
      "React",
    ],
    demoUrl: "https://nazaripaneladmin.vercel.app/",
    accent: "from-violet",
    imageUrl: panelImage,
  },
  {
    id: "weather-app",
    title: { fa: " وب اپلیکیشن آب‌وهوا", en: "Weather web App" },
    description: {
      fa: "پروژه اپ آب و هوا شناسی که دارای api آنلاین و استفاده شده از تکنولوژی rest full api و ری اکت پیشرفته و چند زبانه بودن که از زبان انگلیسی و فارسی پشتیبانی می‌شود استفاده شده",
      en: "A weather-app demo showing live conditions with smooth animations and a minimal design.",
    },
    tags: [
      "bootstrap",
      "React-Icons",
      "Redux-Toolkit",
      "Axios",
      "Vite",
      "React",
    ],    demoUrl: "https://mohammadweather.vercel.app/",
    accent: "from-violet",
    imageUrl: weatherImage,
  },
  {
    id: "todo-app",
    title: { fa: "وب اپلیکیشن لیست کار ها", en: "wep app write work" },
    description: {
      fa: "اپلیکیشن لیست کارها با قابلیت های بسیار زیاد که شامل لیست کار ها ، تاریخ زمان لیست ، عملیات انجام شده و نشده ، سرچ و نمایش تعداد وحذف کار ها را داریم",
      en: "A feature-rich to-do list application that includes task lists, date and time tracking, management of completed and pending tasks, search functionality, task counting, and task deletion.",
    },
    tags: [
      "bootstrap",
      "Redux-Toolkit",
      "Axios",
      "Vite",
      "React",
    ],    demoUrl: "https://writework.vercel.app/",
    accent: "from-pink",
    imageUrl: todoImage,
  },
];

export const experience = [
  {
    id: "panel-admin",
    company: "panel admin",
    companyEn: "panel admin",
    role: { fa: "توسعه‌دهنده فرانت‌اند", en: "Frontend Developer" },
    period: { fa: "تیر ۱۴۰۵ – تا کنون", en: "July 2026 – persent" },
    status: { fa: "منتشر شده", en: "Live" },
    statusType: "live",
    category: "frontend",
    description: {
      fa: "پنل مدیریت مدرن و ریسپانسیو با React، شامل مدیریت کاربران، محصولات، سفارش‌ها، تخفیف‌ها، نقش‌ها و مجوزها با اتصال به بک‌اند اختصاصی از طریق REST API.",
      en: "A modern, responsive admin panel built with React, featuring management of users, products, orders, discounts, roles, and permissions, and connected to a dedicated backend via REST API.",
    },
    stack: ["React", "Javascript", "Bootstrap", "Framer Motion" , "Html" , "CSS" , "i18n"],
  },
  {
    id: "Mohammad.dev",
    company: "Mohammad.dev",
    role: { fa: "توسعه‌دهنده react.js", en: "react.js Developer" },
    period: { fa: "خرداد ۱۴۰۵ – تیر ۱۴۰۵", en: "June 2026 – July 2026" },
    status: { fa: "منتشر شده", en: "Live" },
    statusType: "live",
    category: "frontend",
    description: {
      fa: "توسعه اپلیکیشن‌های وب سریع و مقیاس‌پذیر با react.js با تمرکز بر ساختار تمیز صفحات، تجربه کاربری روان و بهینه‌سازی فنی برای سئو.",
      en: "Building fast, scalable web apps with Next.js, focused on clean page structure, smooth UX, and technical SEO.",
    },
    stack: ["React", "Javascript", "Bootstrap", "SEO", "Html", "CSS"],
  },
  {
    id: "weather-app",
    company: "weather-app",
    companyEn: "weather-app",
    role: {
      fa: "طراح و توسعه‌دهنده فرانت‌اند (فریلنس)",
      en: "Frontend Designer & Developer (Freelance)",
    },
    period: { fa: "اردیبهشت ۱۴۰۵ – خرداد ۱۴۰۵", en: "May 2026 – June 2026" },
    status: { fa: "پایان یافته", en: "Completed" },
    statusType: "done",
    category: "frontend",
    description: {
      fa: "طراحی و پیاده‌سازی کامل UI و معماری فرانت‌اند با استفاده از React و Bootstrap؛ ساخت کامپوننت‌های ماژولار و صفحات داینامیک؛ اتصال به API با Axios؛ مدیریت فرم‌ها با Formik و خلق انیمیشن‌های تعاملی.",
      en: "Designed and built the full UI and frontend architecture with React and Bootstrap; modular components, dynamic pages, Axios API integration, Formik forms, and interactive animations.",
    },
    stack: ["React", "Bootstrap", "Axios", "Javascript" , "Formik" , "i18n" , "Html" , "CSS" ,"React-Router" , "Redux-Toolkit"],
  },
  {
    id: "todo-app",
    company: "todo-app",
    companyEn: "todo-app",
    role: {
      fa: "طراح و توسعه‌دهنده فرانت‌اند (فریلنس)",
      en: "Frontend Designer & Developer (Freelance)",
    },
    period: { fa: "فروردین ۱۴۰۵ – اردیبهشت ۱۴۰۵", en: "April 2026 – May 2026" },
    status: { fa: "پایان یافته", en: "Completed" },
    statusType: "done",
    category: "frontend",
    description: {
      fa: "طراحی و پیاده‌سازی کامل UI و معماری فرانت‌اند با استفاده از React و Bootstrap؛ ساخت کامپوننت‌های ماژولار و صفحات داینامیک؛ اتصال به API با Axios؛ مدیریت فرم‌ها با Formik و خلق انیمیشن‌های تعاملی.",
      en: "Designed and built the full UI and frontend architecture with React and Bootstrap; modular components, dynamic pages, Axios API integration, Formik forms, and interactive animations.",
    },
    stack: ["React", "Bootstrap", "Formik", "Html" , "CSS" , "Redux-Toolkit"],
  },
];
