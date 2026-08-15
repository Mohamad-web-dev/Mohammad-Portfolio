import { FiCheck, FiShoppingBag, FiShield } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";
import "./shopCard.css";

export default function ShopCard({ item }) {
  const { pick, t } = useLanguage();

  return (
    <article className="shop-card glass-card glass-card--hover">
      <div className="shop-card__media">
        <span className="shop-card__badge">
          <FiShield size={13} /> {pick(item.badge)}
        </span>
        <div className="shop-card__preview" aria-hidden="true">
          <span className="shop-card__dot" />
          <span className="shop-card__dot" />
          <span className="shop-card__dot" />
        </div>
      </div>

      <div className="shop-card__body">
        <h3 className="shop-card__title">{pick(item.title)}</h3>
        <p className="shop-card__desc">{pick(item.description)}</p>

        <ul className="shop-card__features">
          {item.features.map((feature) => (
            <li key={pick(feature)}>
              <FiCheck size={14} /> {pick(feature)}
            </li>
          ))}
        </ul>

        <div className="shop-card__footer">
          <div className="shop-card__price">
            <span>{item.currency}</span>
            <strong>{item.price.toLocaleString("en-US")}</strong>
          </div>
          <button type="button" className="btn-gradient shop-card__cta">
            <FiShoppingBag size={15} /> {t("shop.cta")}
          </button>
        </div>
      </div>
    </article>
  );
}
