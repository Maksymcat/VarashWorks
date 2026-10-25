import { MasterCard } from "./master-card";
import styles from "./catalog.module.css";
import type { Master } from "../types";

type CatalogResultsProps = {
  masters: Master[];
};

export function CatalogResults({ masters }: CatalogResultsProps) {
  return (
    <section className={styles.results} aria-labelledby="results-title">
      <h2 id="results-title">Майстри</h2>
      <p>Навчальні дані: усі майстри в цьому списку вигадані.</p>
      {masters.length === 0 && <p>У цій категорії поки немає демо-майстрів.</p>}
      {masters.map((master) => (
        <MasterCard
          key={master.id}
          name={master.name}
          speciality={master.speciality}
          slug={master.slug}
          id={master.id}
        />
      ))}
    </section>
  );
}
