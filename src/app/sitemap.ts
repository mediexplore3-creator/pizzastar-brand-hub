import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pizzastarweb.netlify.app";

  const posts = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const routes = ["", "/blog", "/download", "/about", "/contact", "/privacy", "/terms", "/disclaimer"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return [...routes, ...posts];
}
