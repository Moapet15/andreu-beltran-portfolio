import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://andreu-beltran-portfolio.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/projectes`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/serveis`,
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/contacte`,
      priority: 0.8,
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/privacitat`,
      priority: 0.3,
      changeFrequency: "yearly",
    },
  ];
}