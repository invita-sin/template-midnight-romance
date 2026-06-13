"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, Heart, BookOpen, CalendarDays, Image as ImageIcon, Gift, MessageCircle } from "lucide-react";

const NAV_ITEMS = [
  { id: "cover", label: "Home", icon: Home },
  { id: "couple", label: "Couple", icon: Heart },
  { id: "story", label: "Story", icon: BookOpen },
  { id: "event", label: "Event", icon: CalendarDays },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "gift", label: "Gift", icon: Gift },
  { id: "rsvp", label: "RSVP", icon: MessageCircle },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("cover");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {isVisible && (
        <motion.nav
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex items-center gap-1 px-2 py-2 rounded-full"
            style={{
              background: "rgba(10,10,26,0.8)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(212,175,55,0.2)",
            }}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative p-2.5 rounded-full transition-all"
                  style={{
                    background: isActive ? "rgba(212,175,55,0.15)" : "transparent",
                    color: isActive ? "var(--gold)" : "var(--midnight-text-secondary)",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </>
  );
}
