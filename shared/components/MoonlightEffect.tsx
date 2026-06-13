"use client";

import { motion } from "framer-motion";

export default function MoonlightEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      <motion.div
        className="absolute top-[10%] right-[15%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,198,106,0.06) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-[20%] right-[20%] w-[200px] h-[200px] md:w-[350px] md:h-[350px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(232,198,106,0.03) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}
