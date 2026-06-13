"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import type { CoverConfig } from "@/shared/types";
import { assetPath } from "@/shared/utils";

interface CoverProps {
  config: CoverConfig;
  guestName?: string;
  onOpen: () => void;
}

function Star({ index }: { index: number }) {
  const seed = index * 7.137;
  const size = ((seed * 13.37) % 3) + 1;
  const x = (seed * 7.1) % 100;
  const y = (seed * 3.97) % 100;
  const delay = (seed * 11.23) % 3;

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
      }}
      animate={{
        opacity: [0, 1, 0.3, 1, 0],
        scale: [1, 1.3, 0.8, 1.2, 1],
      }}
      transition={{
        duration: 3 + ((seed * 17.43) % 2),
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function MoonGlow() {
  return (
    <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[200px] h-[200px]">
      <motion.div
        className="w-full h-full rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,198,106,0.3) 0%, rgba(232,198,106,0.1) 40%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,198,106,0.15) 0%, transparent 60%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function Cover({ config, guestName, onOpen }: CoverProps) {
  const [stars] = useState(() => Array.from({ length: 50 }, (_, i) => i));
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="cover"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 30%, #141B3D 60%, #1a1a2e 100%)",
      }}
    >
      <AnimatePresence>
        <MoonGlow />
        {stars.map((i) => (
          <Star key={i} index={i} />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="relative z-10 text-center px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--gold-light)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              The Wedding Of
            </motion.p>

            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-2"
              style={{ color: "var(--midnight-text)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              {config.groomName}
            </motion.h1>

            <motion.p
              className="font-serif text-2xl md:text-3xl my-3"
              style={{ color: "var(--gold)" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              &
            </motion.p>

            <motion.h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: "var(--midnight-text)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {config.brideName}
            </motion.h1>

            {guestName && (
              <motion.p
                className="text-lg md:text-xl mb-8"
                style={{ color: "var(--midnight-text-secondary)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                Dear, {guestName}
              </motion.p>
            )}

            <motion.button
              onClick={onOpen}
              className="group relative px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--gold) 0%, #b8962e 100%)",
                color: "#0a0a1a",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Buka Undangan
              <ChevronDown className="inline-block ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5" style={{ color: "var(--gold)" }} />
      </motion.div>
    </section>
  );
}
