"use client";

import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import { useMusicPlayer } from "@/shared/hooks";

interface MusicPlayerProps {
  src?: string;
}

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const { isPlaying, toggle } = useMusicPlayer(src);

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(212,175,55,0.3)",
        color: isPlaying ? "var(--gold)" : "var(--midnight-text-secondary)",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Music className="w-5 h-5" />
        </motion.div>
      ) : (
        <VolumeX className="w-5 h-5" />
      )}
    </motion.button>
  );
}
