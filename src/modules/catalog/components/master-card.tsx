import Link from "next/link";
import styles from "./catalog.module.css";
type MasterCardProps = {
name: string,
speciality: string }
export function MasterCard({name, speciality}: MasterCardProps) {
  // TODO(навчання): визнач тип майстра й передай дані через props.
  return (
    <article className={styles.panel}>
      <h3>Заготовка картки</h3>
      <p>{name} {speciality}, територія та доступність майстра.</p>
      <Link href="/masters/example">Відкрити заготовку профілю</Link>
    </article>
  );
}
