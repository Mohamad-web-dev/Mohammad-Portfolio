import SectionHeader from "../common/SectionHeader";
import ShopCard from "../common/ShopCard";
import { RevealGroup, RevealItem } from "../common/RevealGroup";
import { shopItems } from "../../data/shopItems";
import { useLanguage } from "../../context/LanguageContext";

export default function ShopSection() {
  const { t } = useLanguage();

  return (
    <section id="shop" className="section">
      <div className="container-page">
        <SectionHeader
          eyebrow={t("shop.eyebrow")}
          title={t("shop.title")}
          kicker={t("shop.kicker")}
          align="center"
        />

        <RevealGroup className="row g-4" amount={0.1}>
          {shopItems.map((item) => (
            <RevealItem key={item.id} className="col-md-6">
              <ShopCard item={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
