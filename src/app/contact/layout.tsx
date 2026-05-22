import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Modern Bakery",
  description:
    "Contact Modern Bakery in Admapur, Kolhapur for fresh pav timing, cakes, bulk snack boxes, bakery orders, and directions.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
