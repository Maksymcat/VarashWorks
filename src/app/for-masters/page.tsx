import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = { title: "Майстрам" };

export default function ForMastersPage() {
  return (
    <section className={styles.page}>
      <h1>Майстрам</h1>
      <p className={styles.lead}>
        Заготовка сторінки про участь у сервісі. Анкету та правила допуску
        додамо на відповідному етапі плану.
      </p>
    </section>
  );
}
