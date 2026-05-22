"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CakeSlice, Moon, Sun, MapPin } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isHomeTop = pathname === "/" && !isScrolled;

  useEffect(() => {
    const mountTimer = window.setTimeout(() => setMounted(true), 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.clearTimeout(mountTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass py-3 shadow-[0_10px_40px_rgba(32,20,12,0.12)]" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="grid h-11 w-11 place-items-center bg-redclay text-cream">
            <CakeSlice className="h-6 w-6" />
          </span>
          <span className={cn("font-serif text-2xl font-black tracking-tight", isHomeTop ? "text-cream" : "text-foreground")}>
            Modern Bakery
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 text-xs font-black uppercase tracking-[0.16em] transition-colors hover:bg-saffron hover:text-ink",
                pathname === link.href
                  ? "bg-foreground text-background"
                  : isHomeTop
                    ? "text-cream hover:text-ink"
                    : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 bg-redclay px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-cream hover:bg-saffron hover:text-ink"
          >
            <MapPin className="h-4 w-4" />
            Visit
          </Link>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-1 grid h-10 w-10 place-items-center border border-border bg-background hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-primary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
          )}
          <button onClick={toggleMenu} className="grid h-10 w-10 place-items-center bg-redclay text-cream">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full glass border-t border-border py-6 px-4 flex flex-col gap-3 shadow-xl md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-black p-3 uppercase tracking-[0.12em] transition-colors hover:bg-saffron hover:text-ink",
                    pathname === link.href ? "bg-foreground text-background" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
