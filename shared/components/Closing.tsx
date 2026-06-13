"use client";

import { motion } from "framer-motion";
import type { CoverConfig } from "@/shared/types";
import { useScrollAnimation } from "@/shared/hooks";

interface ClosingProps {
  groomName: string;
  brideName: string;
}

export default function Closing({ groomName, brideName }: ClosingProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 40%, #141B3D 70%, #0a0a1a 100%)",
      }}
    >
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: "var(--gold)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Terima Kasih
        </motion.p>

        <motion.h2
          className="font-serif text-3xl md:text-5xl mb-6 leading-tight"
          style={{ color: "var(--midnight-text)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Merupakan Suatu Kehormatan
          <br />Apabila Bapak/Ibu/Saudara/i
          <br />Berkenan Hadir
        </motion.h2>

        <motion.div
          className="w-16 h-px mx-auto my-8"
          style={{ background: "var(--gold)" }}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        <motion.p
          className="font-serif text-2xl md:text-3xl mb-4"
          style={{ color: "var(--midnight-text)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {groomName} & {brideName}
        </motion.p>

        <motion.p
          className="text-sm leading-relaxed"
          style={{ color: "var(--midnight-text-secondary)" }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Doa restu dan kehadiran Anda adalah hadiah terindah bagi kami.
        </motion.p>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(10,10,26,0.5) 50%, #0a0a1a 100%)",
        }}
      />
    </section>
  );
}
