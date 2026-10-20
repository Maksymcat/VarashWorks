import { MasterCard } from "./master-card";
import styles from "./catalog.module.css";
import { demoMaster } from "../demo-data";

export function CatalogResults() {
  // TODO(навчання): додай окремий стан без результатів.
  return (
    <section className={styles.results} aria-labelledby="results-title">
      <h2 id="results-title">Майстри</h2>
      <p>Навчальні дані: усі майстри в цьому списку вигадані.</p>
      {demoMaster.map((master) => (
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
