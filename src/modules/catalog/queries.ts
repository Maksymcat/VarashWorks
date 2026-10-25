import { demoMaster } from "./demo-data";

import type { Master } from "./types";

export const getMasterBySlug = (slug: string) => {
  return demoMaster.find((master) => {
    return master.slug === slug;
  });
};
export const filterMastersByCategory = (
  masters: Master[],
  categoryId: string | undefined,
) => {
  if (categoryId === "" || categoryId === undefined) {
    return masters;
  }
  const mastersByCategory = masters.filter(
    (master) => master.categoryId === categoryId,
  );

  return mastersByCategory;
};
