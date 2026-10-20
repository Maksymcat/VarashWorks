import styles from "./catalog.module.css";

export function CatalogFilters() {
  // TODO(навчання): додай підписані поля категорії та населеного пункту.
  return (
    <section className={styles.panel} aria-labelledby="filters-title">
      <h2 id="filters-title">Фільтри</h2>
      <p>Місце для вибору послуги й населеного пункту.</p>
    </section>
  );
}
