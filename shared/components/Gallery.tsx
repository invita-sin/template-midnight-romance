"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GallerySectionConfig } from "@/shared/types";
import { assetPath } from "@/shared/utils";
import { useScrollAnimation } from "@/shared/hooks";

interface GalleryProps {
  config: GallerySectionConfig;
}

export default function Gallery({ config }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const openLightbox = useCallback((index: number) => setSelectedIndex(index), []);
  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % config.images.length);
  }, [selectedIndex, config.images.length]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + config.images.length) % config.images.length);
  }, [selectedIndex, config.images.length]);

  return (
    <section
      id="gallery"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Galeri
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          {config.title || "Galeri Foto"}
        </h2>
        <div className="w-16 h-px mx-auto" style={{ background: "var(--gold)" }} />
      </motion.div>

      <div className="max-w-5xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
        {config.images.map((src, i) => (
          <motion.button
            key={i}
            className="relative w-full overflow-hidden rounded-xl group cursor-pointer break-inside-avoid"
            style={{ border: "1px solid rgba(212,175,55,0.1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => openLightbox(i)}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src={assetPath(src)}
              alt={`Gallery photo ${i + 1}`}
              width={400}
              height={300 + (i % 3) * 100}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedIndex}
              className="relative max-w-3xl max-h-[80vh] w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={assetPath(config.images[selectedIndex])}
                alt={`Gallery photo ${selectedIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </motion.div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
