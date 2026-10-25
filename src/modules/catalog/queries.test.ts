import { expect, test } from "vitest";
import { filterMastersByCategory } from "./queries";
import type { Master } from "./types";

const testMasters: Master[] = [
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
test("повертає всіх майстрів, коли категорію не вказано", () => {
  const result = filterMastersByCategory(testMasters, undefined);

  expect(result).toEqual(testMasters);
});

test("повертає електриків", () => {
  const result = filterMastersByCategory(testMasters, "electric");

  expect(result).toEqual([testMasters[0]]);
});

test("повертає всіх майстрів, коли категорію не вказано", () => {
  const result = filterMastersByCategory(testMasters, "");

  expect(result).toEqual(testMasters);
});

test("повертає пустий массив якщо майстрів серед цієі категоріі нема", () => {
  const result = filterMastersByCategory(testMasters, "painting");

  expect(result).toEqual([]);
});

const emptyMasters: Master[] = [];

test("повертає пустий массив якщо немає майстрів", () => {
  const result = filterMastersByCategory(emptyMasters, "electric");

  expect(result).toEqual([]);
});

test("не змінює вхідний масив та його записи", () => {
  const input = structuredClone(testMasters);
  const before = structuredClone(input);
  filterMastersByCategory(input, "electric");

  expect(input).toEqual(before);
});
