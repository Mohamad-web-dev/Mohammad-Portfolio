# ARMAN.DEV — پرتفولیو شخصی دوزبانه

پرتفولیوی توسعه‌دهنده، تک‌صفحه‌ای (single page)، دوزبانه (فارسی/انگلیسی)، با React + Bootstrap.

## اجرا

```bash
npm install
npm run dev       # اجرای محیط توسعه
npm run build     # ساخت نسخه‌ی نهایی در پوشه dist
npm run preview   # پیش‌نمایش نسخه‌ی build شده
```

## پشته‌ی فنی

- **React 19 + Vite** — رندر و باندلینگ
- **Bootstrap 5.3** — گرید (row/col/g-*)؛ جهت راست‌به‌چپ/چپ‌به‌راست کاملاً از طریق attribute استاندارد `dir` کنترل می‌شود
- **framer-motion** — انیمیشن‌های ورود‌به‌دید هنگام اسکرول، تب‌های سوابق کاری، و منوی شناور تماس
- **react-icons** — آیکن‌های Feather و آیکون‌های برند واقعی (Simple Icons)
- **Vazirmatn Variable + JetBrains Mono** — فونت فارسی/لاتین و مونو، به‌صورت self-hosted

## دوزبانگی (i18n)

- زبان از طریق دکمه‌ی `FA`/`EN` در نوار بالا تغییر می‌کند و در `localStorage` ذخیره می‌شود.
- `src/context/LanguageContext.jsx` مقدار `lang`، `dir`، `t()` (برای متن‌های ثابت رابط کاربری) و `pick()` (برای فیلدهای دوزبانه‌ی داده‌محور مثل `{ fa: "...", en: "..." }`) را فراهم می‌کند.
- متن‌های ثابت رابط کاربری در `src/data/translations.js` است.
- محتوای صفحه (پروژه‌ها، سوابق کاری، فروشگاه، مهارت‌ها، شبکه‌های اجتماعی، پروفایل) در `src/data/*.js` به‌صورت `{ fa, en }` تعریف شده‌اند.
- برای افزودن متن جدید: یک کلید در `translations.js` اضافه کنید و با `t("namespace.key")` صدا بزنید؛ برای داده‌های جدید، فیلد را به‌صورت `{ fa: "...", en: "..." }` بنویسید و با `pick(field)` بخوانید.

## ساختار پوشه‌ها

```
src/
  assets/          تصاویر و فایل‌های استاتیک
  context/         LanguageContext (دوزبانگی)
  components/
    layout/        Navbar، Footer، دکمه رزومه، دکمه شناور تماس (ContactFab)، دنبال‌کننده موس
    common/         کارت‌های قابل استفاده‌مجدد + Reveal/RevealGroup (انیمیشن اسکرول)
    sections/       بخش‌های صفحه (Hero، فروشگاه، پروژه‌ها، سوابق کاری، مهارت‌ها، شبکه‌های اجتماعی، تماس)
  data/             محتوای دوزبانه‌ی سایت + دیکشنری ترجمه‌ها
  hooks/            هوک‌های سفارشی (useTheme)
  utils/            توابع کمکی (اسکرول نرم)
  styles/           توکن‌های طراحی (variables.css) و استایل سراسری (global.css)
```

## دکمه‌های شناور (Fixed)

- **دانلود رزومه** — گوشه‌ی شروع صفحه (بسته به جهت زبان)؛ فایل را در `public/resume.pdf` جایگزین کنید.
- **ارتباط سریع (ContactFab)** — گوشه‌ی دیگر صفحه؛ با هاور (دسکتاپ) یا لمس (موبایل) باز می‌شود و پنج آیکون واتساپ، اینستاگرام، لینکدین، تلگرام و گیت‌هاب را نمایش می‌دهد. لینک‌ها از `src/data/siteConfig.js` (بخش `social`) خوانده می‌شوند.

## سئو

- متادیتای کامل (title، description، keywords، canonical، Open Graph، Twitter Card، hreflang فارسی/انگلیسی) در `index.html`.
- داده‌ی ساختاریافته‌ی JSON-LD (Person + WebSite) در `index.html`.
- `public/robots.txt` و `public/sitemap.xml` آماده‌اند — قبل از انتشار، آدرس `arman.dev` را در همه‌ی این فایل‌ها با دامنه‌ی واقعی خودتان جایگزین کنید (`index.html`، `robots.txt`، `sitemap.xml`).
- فقط یک `<h1>` در کل صفحه وجود دارد (نام در بخش Hero) و بقیه‌ی عنوان‌ها `<h2>`/`<h3>` هستند.
- برای تصویر Open Graph، فایلی به نام `og-cover.png` (۱۲۰۰×۶۳۰) در `public/` قرار دهید.

## شخصی‌سازی

- اطلاعات پروفایل، شبکه‌های اجتماعی و لینک‌ها: `src/data/siteConfig.js`
- پروژه‌ها و سوابق کاری: `src/data/projects.js`
- مهارت‌ها و تکنولوژی‌ها: `src/data/techStack.js`
- محصولات فروشگاه: `src/data/shopItems.js`
- شبکه‌های اجتماعی: `src/data/social.js`
- رنگ‌ها، فونت‌ها و شعاع گوشه‌ها: `src/styles/variables.css`
