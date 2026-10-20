import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";

export const metadata: Metadata = { title: "Заготовка профілю" };

export default function MasterProfilePage() {
  // TODO(навчання): прочитай slug з params і знайди відповідного майстра.
  return (
    <section className={styles.page}>
      <Link href="/masters">← До каталогу</Link>
      <h1>Профіль майстра</h1>
      <p className={styles.lead}>
        Заготовка. Тут будуть послуги, територія, умови виїзду й інформація про
        майстра.
      </p>
    </section>
  );
}
