import Link from "next/link";
import { siteConfig } from "@/shared/config/site";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.page}>
      <p className={styles.eyebrow}>ВАРАШ І ПОРУЧ</p>
      <h1>{siteConfig.tagline}</h1>
      <p className={styles.lead}>Головна сторінка сервісу</p>
      <div className={styles.actions}>
        <Link className={styles.primaryLink} href="/masters">
          Знайти майстра
        </Link>
        <Link className={styles.secondaryLink} href="/request">
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}
