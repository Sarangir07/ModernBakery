import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery Gallery",
  description:
    "See fresh breads, puffs, cakes, biscuits, and bakery counter photos from Modern Bakery in Admapur, Kolhapur.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
