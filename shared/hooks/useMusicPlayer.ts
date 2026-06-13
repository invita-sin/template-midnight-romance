"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export function useMusicPlayer(src?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!src) return;
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    const handler = () => setHasInteracted(true);
    document.addEventListener("click", handler, { once: true });
    document.addEventListener("touchstart", handler, { once: true });
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const toggle = useCallback(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (hasInteracted && audioRef.current && !isPlaying) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [hasInteracted]);

  const play = useCallback(() => {
    if (!audioRef.current || isPlaying) return;
    audioRef.current.play().catch(() => {});
    setIsPlaying(true);
  }, [isPlaying]);

  return { isPlaying, toggle, play };
}
