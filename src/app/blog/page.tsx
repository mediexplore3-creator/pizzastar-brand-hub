import BlogClient from "@/components/blog/BlogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Blog & Food Trends | Pizza Star India 🍕",
  description: "Dive into the world of Indian fusion pizza. Explore recipes, kitchen tips, street food trends, and exclusive brand news.",
};

export default function BlogPage() {
  return <BlogClient />;
}
