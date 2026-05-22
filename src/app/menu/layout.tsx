import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bakery Menu",
  description:
    "Explore Modern Bakery's menu of fresh pav, breads, veg puffs, biscuits, cakes, pastries, and bakery snacks in Admapur, Kolhapur.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
