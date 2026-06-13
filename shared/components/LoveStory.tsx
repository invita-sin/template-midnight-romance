"use client";

import { motion } from "framer-motion";
import type { LoveStoryItem } from "@/shared/types";
import { useScrollAnimation } from "@/shared/hooks";

interface LoveStoryProps {
  stories: LoveStoryItem[];
}

function TimelineItem({ item, index }: { item: LoveStoryItem; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start gap-6 md:gap-0"
      style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hidden md:flex md:w-1/2" />

      <div className="relative z-10 flex-shrink-0">
        <div
          className="w-4 h-4 rounded-full border-2"
          style={{ borderColor: "var(--gold)", background: "var(--midnight-bg)" }}
        />
      </div>

      <div
        className="flex-1 md:w-1/2 p-6 rounded-xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(212,175,55,0.15)",
        }}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
          {item.date}
        </span>
        <h3 className="font-serif text-xl mt-1 mb-2" style={{ color: "var(--midnight-text)" }}>
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--midnight-text-secondary)" }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function LoveStory({ stories }: LoveStoryProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="story"
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
          Cerita Cinta
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-4" style={{ color: "var(--midnight-text)" }}>
          Love Story
        </h2>
        <div className="w-16 h-px mx-auto" style={{ background: "var(--gold)" }} />
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        <div
          className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(180deg, var(--gold) 0%, transparent 100%)" }}
        />
        <div className="space-y-12">
          {stories.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
