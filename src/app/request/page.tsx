import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = { title: "Залишити заявку" };

export default function RequestPage() {
  // TODO(навчання): форму й підтвердження номера реалізуємо окремими кроками.
  return (
    <section className={styles.page}>
      <h1>Залишити заявку</h1>
      <p className={styles.lead}>
        Заготовка форми. Зараз заявки не приймаються й контакти не збираються.
      </p>
    </section>
  );
}
