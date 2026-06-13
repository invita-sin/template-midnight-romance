"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { CoupleConfig } from "@/shared/types";
import { assetPath } from "@/shared/utils";
import { useScrollAnimation } from "@/shared/hooks";

interface CoupleProps {
  config: CoupleConfig;
}

function PersonCard({
  person,
  label,
  index,
}: {
  person: { name: string; fullName?: string; photo: string; father?: string; mother?: string };
  label: string;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 ring-2 ring-gold-400/30 ring-offset-4 ring-offset-[#0a0a1a]">
        <Image
          src={assetPath(person.photo)}
          alt={person.fullName || person.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 192px, 224px"
        />
      </div>
      <p className="text-sm tracking-[0.2em] uppercase mb-2" style={{ color: "var(--gold)" }}>
        {label}
      </p>
      <h3 className="font-serif text-2xl md:text-3xl mb-1" style={{ color: "var(--midnight-text)" }}>
        {person.fullName || person.name}
      </h3>
      <p className="text-sm" style={{ color: "var(--midnight-text-secondary)" }}>
        {person.father && `Putra dari ${person.father}`}
        {person.mother && (person.father ? ` & ${person.mother}` : `Putri dari ${person.mother}`)}
      </p>
    </motion.div>
  );
}

export default function Couple({ config }: CoupleProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="couple"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>
          Mempelai
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          Bride & Groom
        </h2>
        <div className="w-16 h-px mx-auto" style={{ background: "var(--gold)" }} />
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <PersonCard person={config.groom} label="Pria" index={0} />
        <PersonCard person={config.bride} label="Wanita" index={1} />
      </div>
    </section>
  );
}
