"use client";

import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        <Loader2 className="h-12 w-12 text-primary animate-spin" />
        <p className="text-primary font-serif font-medium text-lg animate-pulse">
          Baking your experience...
        </p>
      </motion.div>
    </div>
  );
}
