"use client";

import { motion } from "framer-motion";
import { useCountdown, useScrollAnimation } from "@/shared/hooks";
import type { CountdownConfig } from "@/shared/types";

interface CountdownProps {
  config: CountdownConfig;
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(212,175,55,0.2)",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="font-serif text-3xl md:text-4xl font-bold"
          style={{ color: "var(--gold)" }}
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </motion.div>
      <span className="text-xs uppercase tracking-wider mt-2" style={{ color: "var(--midnight-text-secondary)" }}>
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection({ config }: CountdownProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(config.eventDate);
  const { ref, isVisible } = useScrollAnimation(0.2);

  if (isExpired) return null;

  return (
    <section
      id="countdown"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Countdown
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-8" style={{ color: "var(--midnight-text)" }}>
          {config.label || "Menuju Hari Bahagia"}
        </h2>

        <div className="flex justify-center gap-4 md:gap-6">
          <TimeBlock value={days} label="Hari" />
          <TimeBlock value={hours} label="Jam" />
          <TimeBlock value={minutes} label="Menit" />
          <TimeBlock value={seconds} label="Detik" />
        </div>
      </motion.div>
    </section>
  );
}
