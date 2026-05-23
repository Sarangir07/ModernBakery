"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, Flame, Star } from "lucide-react";

const signatures = [
  {
    name: "Twisted Veg Puff",
    note: "Flaky, spicy, and irresistibly twisted for a perfect bite",
    price: "Rs. 60",
    time: "All day",
    label: "Best seller",
    texture: "Crisp layers",
    image:
      "https://images.unsplash.com/photo-1718915867296-6c8a2fabfbb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sliced Bread",
    note: "Soft, fresh, and perfect for sandwiches or toast",
    price: "Rs. 30",
    time: "All day",
    label: "Fresh loaf",
    texture: "Soft crumb",
    image:
      "https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rusk",
    note: "Crispy, golden, and perfect for dunking in tea",
    price: "Rs. 40",
    time: "All day",
    label: "Tea partner",
    texture: "Golden crunch",
    image:
      "https://images.unsplash.com/photo-1684081856180-d1ec0662cd0f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-cream">
        <Image
          src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fresh bakery snacks"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,18,11,.92)_0%,rgba(26,18,11,.72)_42%,rgba(26,18,11,.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

        <div className="container relative z-10 mx-auto flex min-h-[78vh] items-end px-4 pb-12 pt-28 md:px-8 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 border border-cream/25 bg-cream/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-saffron">
              <Flame className="h-4 w-4" />
              Taste Beyond Ordinary
            </div>
            <h1 className="max-w-4xl text-3xl font-black leading-[0.95] text-cream md:text-5xl lg:text-6xl">
              Freshly Baked Daily
              <span className="block text-saffron">Authentic Flavors You’ll Love.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/82 md:text-xl">
              From oven-fresh breads to delicious handcrafted desserts, our bakery delivers authentic flavors and freshness daily for a truly delightful experience
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 bg-saffron px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-ink hover:bg-cream"
              >
                See today&apos;s menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-cream/30 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-cream hover:bg-cream hover:text-ink"
              >
                Find the bakery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-secondary/45 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-8">
          <div className="mb-12 grid gap-6 md:grid-cols-[.7fr_1.3fr] md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-redclay">
                Signature shelf
              </p>
              <div className="mt-5 h-1 w-24 bg-saffron" />
            </div>
            <div>
              <h2 className="text-4xl font-black leading-tight text-foreground md:text-6xl">
                Explore Our Signature Delights
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                A tighter showcase of customer favorites, designed like a
                premium bakery shelf instead of ordinary product cards.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {signatures.map((product, i) => (
              <motion.article
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative overflow-hidden border border-border bg-card shadow-[0_18px_55px_rgba(58,38,24,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[18px_18px_0_var(--saffron)]"
              >
                <div className="absolute left-0 top-0 z-10 bg-redclay px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-cream">
                  0{i + 1}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-90" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-2 inline-flex bg-cream px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-ink">
                        {product.label}
                      </p>
                      <h3 className="text-3xl font-black leading-tight text-cream">
                        {product.name}
                      </h3>
                    </div>
                    <div className="shrink-0 bg-saffron px-4 py-3 text-right text-ink">
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] opacity-75">
                        From
                      </p>
                      <p className="text-lg font-black">{product.price}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      <Clock3 className="h-4 w-4 text-redclay" />
                      {product.time}
                    </div>
                    <div className="flex text-saffron">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-lg leading-8 text-muted-foreground">{product.note}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-redclay">
                      {product.texture}
                    </span>
                    <Link
                      href="/menu"
                      className="inline-flex h-10 w-10 items-center justify-center bg-secondary text-foreground transition-colors hover:bg-redclay hover:text-cream"
                      aria-label={`View ${product.name} in menu`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-redclay py-16 text-cream md:py-20">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[1fr_.8fr] md:items-center md:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-saffron">
              Weekend counter combo
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Puff, biscuit, chai. No ceremony required.
            </h2>
          </div>
          <div className="border border-cream/25 bg-cream/10 p-6">
            <p className="text-lg leading-8 text-cream/86">
              Ask for the snack box and get complimentary masala chai with every
              purchase this weekend.
            </p>
            <Link
              href="/menu"
              className="mt-6 inline-flex items-center gap-2 bg-cream px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-redclay hover:bg-saffron hover:text-ink"
            >
              Order now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                text: "The veg puffs are ridiculously flaky. I take a box home every time I pass through.",
              },
              {
                name: "Rahul Patil",
                text: "Fresh pav in the evening changed our misal nights. Soft, warm, perfect.",
              },
              {
                name: "Neha Gupta",
                text: "It feels like the bakery counter I grew up with, just cleaner and more thoughtful.",
              },
            ].map((testimonial, i) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-l-4 border-redclay bg-secondary p-7"
              >
                <div className="mb-5 flex text-saffron">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg leading-8 text-foreground">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <figcaption className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
                  {testimonial.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
