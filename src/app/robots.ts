import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Це вказівка пошуковим роботам, а не захист приватних даних.
  return { rules: { userAgent: "*", disallow: "/" } };
}
