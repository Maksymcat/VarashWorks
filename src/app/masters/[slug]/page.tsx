import type { Metadata } from "next";
import Link from "next/link";
import styles from "../../page.module.css";
import { getMasterBySlug } from "@/modules/catalog/queries";
import { notFound } from "next/navigation";

export type Params = {
  slug: string;
};

type ProfilePageProps = {
  params: Promise<Params>;
};
export async function generateMetadata(
  props: ProfilePageProps,
): Promise<Metadata> {
  const routeParams = await props.params;
  const slug = decodeURIComponent(routeParams.slug);

  const master = getMasterBySlug(slug);

  if (master === undefined) {
    notFound();
  }
  return {
    title: `${master.name} — ${master.speciality}`,
  };
}
export default async function MasterProfilePage(props: ProfilePageProps) {
  const routeParams = await props.params;
  const slug = decodeURIComponent(routeParams.slug);

  const master = getMasterBySlug(slug);
  if (master === undefined) {
    notFound();
  }
  return (
    <section className={styles.page}>
      <Link href="/masters">← До каталогу</Link>
      <h1>{master?.name}</h1>
      <p className={styles.lead}>
        {master?.speciality} {master?.slug}
      </p>
    </section>
  );
}
