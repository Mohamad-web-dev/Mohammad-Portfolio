export default function SectionHeader({
  eyebrow,
  title,
  kicker,
  align = "start",
}) {
  return (
    <div className={`section-header text-${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      <div
        className={`section-divider ${align === "center" ? "mx-auto" : ""}`}
      />
      {kicker && (
        <p className={`section-kicker ${align === "center" ? "mx-auto" : ""}`}>
          {kicker}
        </p>
      )}
    </div>
  );
}
