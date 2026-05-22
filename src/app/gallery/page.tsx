"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=1000&auto=format&fit=crop", alt: "Plum Cakes", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop", alt: "Veg Puffs & Samosas", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop", alt: "Bakery Showcase", aspect: "aspect-video" },
  { src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop", alt: "Black Forest Pastry", aspect: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Fresh Pav Selection", aspect: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000&auto=format&fit=crop", alt: "Baking Process", aspect: "aspect-[4/5]" },
  { src: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=1000&auto=format&fit=crop", alt: "Masala Chai", aspect: "aspect-video" },
  { src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop", alt: "Karachi Biscuits", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <div className="flex min-h-screen flex-col bg-background pt-24">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="mb-16 grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-redclay">From the racks</p>
            <h1 className="text-5xl font-black leading-none text-foreground md:text-7xl">Gallery</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            A visual shelf of fresh bakes, counter moments, and the everyday
            rhythm behind Modern Bakery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className={`group relative mb-6 w-full cursor-pointer overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--saffron)] ${img.aspect} break-inside-avoid`}
            >
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="bg-saffron px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
