export type Master = {
  id: string;
  slug: string;
  name: string;
  speciality: string;
  categoryId: categoryId;
};

type categoryId =
  "electric" | "plumbing" | "Різноробочий" | "painting" | "Збірник меблів";
