import { MasterCard } from "./master-card";
import styles from "./catalog.module.css";

export function CatalogResults() {
  // TODO(навчання): покажи список із даних та окремий стан без результатів.
  return (
    <section className={styles.results} aria-labelledby="results-title">
      <h2 id="results-title">Майстри</h2>
      <MasterCard name={"Олексій(демо)"} speciality={"Складання меблів"} />
    </section>
  );
}
