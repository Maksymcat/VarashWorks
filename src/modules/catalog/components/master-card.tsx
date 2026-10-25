import Link from "next/link";
import styles from "./catalog.module.css";
type MasterCardProps = {
  name: string;
  speciality: string;
  slug: string;
  id: string;
};
export function MasterCard({ name, speciality, slug, id }: MasterCardProps) {
  return (
    <article className={styles.panel}>
      <h3> {name}</h3>
      <p>
        {speciality}, {slug} {id}
      </p>
      <Link href={`/masters/${slug}`}>Відкрити заготовку профілю</Link>
    </article>
  );
}
