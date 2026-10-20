import { demoMaster } from "./demo-data";

export const getMasterBySlug = (slug: string) => {
  return demoMaster.find((master) => {
    return master.slug === slug;
  });
};
