"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { RSVPConfig } from "@/shared/types";
import { useScrollAnimation } from "@/shared/hooks";

interface RSVPProps {
  config: RSVPConfig;
}

export default function RSVP({ config }: RSVPProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="rsvp"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          RSVP
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          Konfirmasi Kehadiran
        </h2>
        <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--midnight-text-secondary)" }}>
          Kehadiran Anda sangat berarti bagi kami.
          {config.deadline && (
            <> Mohon konfirmasi sebelum <span style={{ color: "var(--gold)" }}>{config.deadline}</span>.</>
          )}
        </p>

        <motion.a
          href={config.formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            color: "#fff",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5" />
          {config.label || "Konfirmasi via WhatsApp"}
        </motion.a>
      </motion.div>
    </section>
  );
}
