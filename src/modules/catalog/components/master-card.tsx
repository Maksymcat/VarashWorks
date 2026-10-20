import Link from "next/link";
import styles from "./catalog.module.css";
type MasterCardProps = {
  name: string;
  speciality: string;
  slug: string;
  id: string;
};
export function MasterCard({ name, speciality, slug, id }: MasterCardProps) {
  // TODO(навчання): покажи ім'я в заголовку й підключи адресу за slug.
  return (
    <article className={styles.panel}>
      <h3>Заготовка картки</h3>
      <p>
        {name} {speciality}, {slug} {id}
      </p>
      <Link href="/masters/example">Відкрити заготовку профілю</Link>
    </article>
  );
}
