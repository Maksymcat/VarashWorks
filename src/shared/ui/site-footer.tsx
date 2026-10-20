import { siteConfig } from "@/shared/config/site";
import styles from "./site-shell.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p>
        {siteConfig.name} · {siteConfig.tagline}
      </p>
      <p>Робоча назва · Підготовка безкоштовного пілоту</p>
    </footer>
  );
}
