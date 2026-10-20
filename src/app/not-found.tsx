import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <h1>Сторінку не знайдено</h1>
      <p className={styles.lead}>
        Перевірте адресу або поверніться на головну.
      </p>
      <Link href="/">На головну</Link>
    </section>
  );
}
