"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import type { TemplateConfig } from "@/shared/types";
import Cover from "./Cover";
import Couple from "./Couple";
import CountdownSection from "./Countdown";
import LoveStory from "./LoveStory";
import EventSection from "./Event";
import Gallery from "./Gallery";
import Gift from "./Gift";
import RSVP from "./RSVP";
import Maps from "./Maps";
import MusicPlayer from "./MusicPlayer";
import Closing from "./Closing";
import Starfield from "./Starfield";
import MoonlightEffect from "./MoonlightEffect";
import FloatingNav from "./FloatingNav";

interface TemplateRendererProps {
  config: TemplateConfig;
  guestName?: string;
}

export default function TemplateRenderer({ config, guestName }: TemplateRendererProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const sections = useMemo(() => {
    if (!isOpen) {
      return (
        <>
          <Cover
            config={config.cover}
            guestName={guestName}
            onOpen={handleOpen}
          />
        </>
      );
    }

    return (
      <>
        <Cover
          config={config.cover}
          guestName={guestName}
          onOpen={handleOpen}
        />
        <Couple config={config.couple} />
        <CountdownSection config={config.countdown} />
        <LoveStory stories={config.loveStory} />
        <EventSection config={config.event} />
        <Gallery config={config.gallery} />
        <Gift config={config.gift} />
        <RSVP config={config.rsvp} />
        <Maps config={config.maps} />
        <Closing groomName={config.couple.groom.name} brideName={config.couple.bride.name} />
      </>
    );
  }, [isOpen, config, guestName, handleOpen]);

  if (!mounted) {
    return (
      <main
        className="relative min-h-screen"
        style={{
          background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 30%, #141B3D 60%, #1a1a2e 100%)",
        }}
      />
    );
  }

  return (
    <main className="relative min-h-screen">
      <Starfield />
      <MoonlightEffect />
      {sections}
      <MusicPlayer src={config.music.src} />
      {isOpen && <FloatingNav />}
    </main>
  );
}
