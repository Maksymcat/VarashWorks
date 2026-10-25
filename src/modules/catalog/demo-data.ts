import type { Master } from "./types";

export const demoMaster: Master[] = [
  {
    id: "asd321",
    slug: "Заболоття",
    name: "Oleg",
    speciality: "електро-Слюсар",
    categoryId: "electric",
  },
  {
    id: "1233",
    slug: "Полиці",
    name: "Максим",
    speciality: "Електрик",
    categoryId: "electric",
  },
  {
    id: "вфів",
    slug: "Вараш",
    name: "Саша",
    speciality: "Сантехнік",
    categoryId: "plumbing",
  },
];

export const demoCategories = [
  { id: "electric", name: "Електрика" },
  { id: "plumbing", name: "Сантехніка" },
  { id: "painting", name: "Маляр" },
];
