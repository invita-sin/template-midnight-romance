"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { EventConfig } from "@/shared/types";
import { useScrollAnimation } from "@/shared/hooks";

interface EventProps {
  config: EventConfig;
}

function EventCard({
  title,
  detail,
  index,
}: {
  title: string;
  detail: { date: string; time: string; venue: string; address: string };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      className="p-6 md:p-8 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(212,175,55,0.15)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <h3
        className="font-serif text-xl md:text-2xl text-center mb-6 pb-4"
        style={{ color: "var(--gold)", borderBottom: "1px solid rgba(212,175,55,0.2)" }}
      >
        {title}
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
          <div>
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--midnight-text-secondary)" }}>
              Tanggal
            </p>
            <p style={{ color: "var(--midnight-text)" }}>{detail.date}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
          <div>
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--midnight-text-secondary)" }}>
              Waktu
            </p>
            <p style={{ color: "var(--midnight-text)" }}>{detail.time}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
          <div>
            <p className="text-xs uppercase tracking-wider" style={{ color: "var(--midnight-text-secondary)" }}>
              Lokasi
            </p>
            <p style={{ color: "var(--midnight-text)" }}>{detail.venue}</p>
            <p className="text-sm mt-1" style={{ color: "var(--midnight-text-secondary)" }}>
              {detail.address}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventSection({ config }: EventProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="event"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Acara
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          Event Details
        </h2>
        <div className="w-16 h-px mx-auto" style={{ background: "var(--gold)" }} />
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
        <EventCard title="Akad Nikah" detail={config.akad} index={0} />
        <EventCard title="Resepsi" detail={config.reception} index={1} />
      </div>
    </section>
  );
}
