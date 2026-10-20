import type { Metadata } from "next";
import { CatalogFilters } from "@/modules/catalog/components/catalog-filters";
import { CatalogResults } from "@/modules/catalog/components/catalog-results";
import styles from "../page.module.css";

export const metadata: Metadata = { title: "Каталог майстрів" };

export default function MastersPage() {
  return (
    <div className={styles.page}>
      <h1>Каталог майстрів</h1>
      <p className={styles.lead}>
        Заготовка сторінки. Пошук і дані ще не підключені.
      </p>
      <div className={styles.catalog}>
        <CatalogFilters />
        <CatalogResults />
      </div>
    </div>
  );
}
