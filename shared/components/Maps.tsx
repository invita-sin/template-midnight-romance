"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { MapsConfig } from "@/shared/types";
import { useScrollAnimation } from "@/shared/hooks";

interface MapsProps {
  config: MapsConfig;
}

export default function Maps({ config }: MapsProps) {
  const location = config.akad || config.reception;
  const { ref, isVisible } = useScrollAnimation(0.2);

  if (!location) return null;

  return (
    <section
      id="maps"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Lokasi
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          Location
        </h2>
        <p className="text-sm mb-2" style={{ color: "var(--midnight-text)" }}>
          {location.venue}
        </p>
        <p className="text-sm mb-8" style={{ color: "var(--midnight-text-secondary)" }}>
          {location.address}
        </p>

        <motion.div
          className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6"
          style={{
            border: "1px solid rgba(212,175,55,0.15)",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src={location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map location"
          />
        </motion.div>

        <motion.a
          href={location.embedUrl.replace("output=embed", "output=classic")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "var(--gold)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink className="w-4 h-4" />
          Buka Google Maps
        </motion.a>
      </motion.div>
    </section>
  );
}
