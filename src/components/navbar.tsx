"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, MapPin } from "lucide-react";
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
        isScrolled
          ? "border-b border-border bg-background py-2 shadow-[0_10px_40px_rgba(32,20,12,0.12)]"
          : "border-b border-cream/15 bg-ink/80 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="z-50 flex items-center" aria-label="Modern Bakery home">
          <Image
            src="/modern-bakery-logo.png"
            alt="Modern Bakery"
            width={152}
            height={152}
            priority
            className={cn(
              "h-14 w-14 object-contain transition-all duration-300 md:h-24 md:w-24",
              isHomeTop ? "drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]" : "drop-shadow-sm"
            )}
          />
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
