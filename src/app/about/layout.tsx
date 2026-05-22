import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Bakery",
  description:
    "Learn about Modern Bakery in Admapur, Kolhapur, our fresh-first baking approach, ingredients, and everyday bakery counter.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
