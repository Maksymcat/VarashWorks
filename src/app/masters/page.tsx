import type { Metadata } from "next";
import Link from "next/link";
import { CatalogFilters } from "@/modules/catalog/components/catalog-filters";
import { CatalogResults } from "@/modules/catalog/components/catalog-results";
import { demoCategories, demoMaster } from "@/modules/catalog/demo-data";
import { filterMastersByCategory } from "@/modules/catalog/queries";
import styles from "../page.module.css";

export const metadata: Metadata = { title: "Каталог майстрів" };

type MastersPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function MastersPage(props: MastersPageProps) {
  const query = await props.searchParams;
  const rawCategory = query.category;
  const categoryId = typeof rawCategory === "string" ? rawCategory : "";
  const hasInvalidCategory =
    Array.isArray(rawCategory) ||
    (categoryId !== "" &&
      !demoCategories.some((category) => category.id === categoryId));

  const masters = hasInvalidCategory
    ? []
    : filterMastersByCategory(demoMaster, categoryId);

  return (
    <div className={styles.page}>
      <h1>Каталог майстрів</h1>
      <p className={styles.lead}>Демонстраційний каталог послуг і майстрів.</p>
      <div className={styles.catalog}>
        <CatalogFilters
          categories={demoCategories}
          selectedCategory={hasInvalidCategory ? "" : categoryId}
        />
        {hasInvalidCategory ? (
          <section aria-labelledby="category-error-title">
            <h2 id="category-error-title">Не вдалося застосувати фільтр</h2>
            <p>Укажіть одну категорію з доступного переліку.</p>
            <Link href="/masters">Очистити фільтр</Link>
          </section>
        ) : (
          <CatalogResults masters={masters} />
        )}
      </div>
    </div>
  );
}
