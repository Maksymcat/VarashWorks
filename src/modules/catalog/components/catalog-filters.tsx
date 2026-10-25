import styles from "./catalog.module.css";

type CatalogFiltersProps = {
  categories: { id: string; name: string }[];
  selectedCategory: string;
};

export function CatalogFilters({
  categories,
  selectedCategory,
}: CatalogFiltersProps) {
  // TODO(навчання): додай підписані поля категорії та населеного пункту.
  return (
    <section className={styles.panel} aria-labelledby="filters-title">
      <h2 id="filters-title">Фільтри</h2>

      <label htmlFor="category">Категорія послуг</label>
      <form action="/masters" method="get">
        <select id="category" name="category" defaultValue={selectedCategory}>
          <option value="">Усі категорії</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>{" "}
        <button type="submit">Застосувати</button>{" "}
        <a href="/masters">Очистити фільтр</a>
      </form>
    </section>
  );
}
