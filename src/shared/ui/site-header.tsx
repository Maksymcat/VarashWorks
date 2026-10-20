import Link from "next/link";
import { siteConfig } from "@/shared/config/site";
import styles from "./site-shell.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href="/">
        {siteConfig.name}
      </Link>
      <nav className={styles.navigation} aria-label="Основна навігація">
        <Link href="/masters">Каталог</Link>
        <Link href="/request">Залишити заявку</Link>
        <Link href="/for-masters">Майстрам</Link>
      </nav>
      <p className={styles.notice}>Навчальний каркас · сервіс ще не працює</p>
    </header>
  );
}
