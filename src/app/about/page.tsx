"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col pt-20">
      {/* Hero Section */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden">
        <div className="absolute inset-0 z-0 bg-ink/72" />
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556217684-25cb278775df?q=80&w=2000&auto=format&fit=crop')" }}
        />
        <div className="container relative z-10 mx-auto px-4 pb-16 text-cream md:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 max-w-3xl text-5xl font-black leading-none md:text-7xl"
          >
            From Our Oven to Your Heart.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl leading-8 text-cream/82"
          >
            Welcome to our bakery, where every treat is crafted with freshness, passion, and authentic flavors.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-redclay">Our way</p>
              <h2 className="mb-6 text-4xl font-black leading-tight text-foreground md:text-6xl">Fresh first, familiar always.</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a simple passion — to serve everyone authentic flavors without ever compromising on quality. Every item we create is carefully baked with freshness, premium ingredients, and a taste that can be felt in every single bite.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over time, our dedication, consistency, and love for baking helped us become a place people trust and enjoy. Today, we continue creating sweet moments and unforgettable experiences for every customer who walks into our bakery.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="relative h-[500px] w-full overflow-hidden border border-border shadow-[16px_16px_0_var(--saffron)]">
                <Image 
                  src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1000&auto=format&fit=crop"
                  alt="Baker kneading dough"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="mb-16 text-center text-4xl font-black text-foreground">What Guides The Counter</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Leaf, title: "Premium Ingredients", desc: "Sourced locally and globally for the perfect taste." },
              { icon: Heart, title: "Baked with Love", desc: "Every item is handcrafted with passion and care." },
              { icon: Clock, title: "Fresh Daily", desc: "Baked fresh every morning, never day-old." },
              { icon: Award, title: "Master Craftsmanship", desc: "Techniques perfected over decades of experience." },
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border bg-background p-6 text-center transition-shadow hover:shadow-[10px_10px_0_var(--saffron)]"
              >
                <div className="mb-6 inline-flex bg-saffron p-4 text-ink">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-black text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
