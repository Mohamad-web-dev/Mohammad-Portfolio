/**
 * Smoothly scrolls the viewport to the section with the given id,
 * accounting for the sticky navbar via CSS scroll-margin-top on sections.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
