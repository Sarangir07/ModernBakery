"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Pastries", "Breads", "Cakes", "Beverages"];

const products = [
  { id: 1, name: "Veg Puff (Khari)", category: "Pastries", price: "Rs. 25", desc: "Flaky, buttery, and baked to perfection with spiced potato filling.", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Dil Pasand", category: "Pastries", price: "Rs. 45", desc: "Traditional sweet pastry filled with coconut and tutti frutti.", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Fresh Pav Bread", category: "Breads", price: "Rs. 40", desc: "Soft, fluffy pav baked fresh every morning.", image: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Fruit Biscuits", category: "Pastries", price: "Rs. 120", desc: "Iconic fruit biscuits with a perfect crunch.", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Mawa Cake", category: "Cakes", price: "Rs. 30", desc: "Classic Irani bakery style dense and rich mawa cake.", image: "https://images.unsplash.com/photo-1713791780761-1fe145b3dc76?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Black Forest Pastry", category: "Cakes", price: "Rs. 60", desc: "The evergreen favorite chocolate and cherry cream cake.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Plum Cake", category: "Cakes", price: "Rs. 150", desc: "Rich traditional plum cake loaded with dry fruits.", image: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Masala Chai", category: "Beverages", price: "Rs. 20", desc: "Hot, spiced Indian tea perfect with biscuits.", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=600&auto=format&fit=crop" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background pt-24">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="mb-12 grid gap-6 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-redclay">Bakery counter</p>
            <h1 className="text-5xl font-black leading-none text-foreground md:text-7xl">Today&apos;s Menu</h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Search the shelf, filter by craving, and build a quick bakery order
            around what is fresh right now.
          </p>
        </div>

        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-3 text-xs font-black uppercase tracking-[0.16em] transition-all duration-300",
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-foreground hover:bg-saffron hover:text-ink"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full text-foreground md:w-80">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-border bg-card py-3 pl-10 pr-4 outline-none transition-shadow focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col overflow-hidden border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--saffron)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-4 top-4 bg-saffron px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-ink">
                    {product.price}
                  </div>
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-redclay">{product.category}</p>
                  <h3 className="mb-2 text-2xl font-black text-foreground">{product.name}</h3>
                  <p className="mb-6 flex-grow text-sm leading-6 text-muted-foreground">{product.desc}</p>
                  <button className="flex w-full items-center justify-center gap-2 bg-redclay py-3 text-sm font-black uppercase tracking-[0.16em] text-cream transition-colors hover:bg-saffron hover:text-ink">
                    <ShoppingCart className="h-4 w-4" /> Add
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-xl">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
