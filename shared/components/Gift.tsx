"use client";

import { motion } from "framer-motion";
import { Copy, Check, Gift as GiftIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import type { GiftConfig } from "@/shared/types";
import { assetPath } from "@/shared/utils";
import { useScrollAnimation } from "@/shared/hooks";

interface GiftProps {
  config: GiftConfig;
}

function BankCard({ bank, name, number }: { bank: string; name: string; number: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = number;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="p-5 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <p className="text-sm font-semibold mb-1" style={{ color: "var(--gold)" }}>
        {bank}
      </p>
      <p className="text-sm mb-3" style={{ color: "var(--midnight-text)" }}>
        {name}
      </p>
      <div className="flex items-center justify-between gap-2">
        <code className="text-sm font-mono tracking-wider" style={{ color: "var(--midnight-text-secondary)" }}>
          {number}
        </code>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 rounded-lg transition-colors"
          style={{
            background: copied ? "rgba(212,175,55,0.2)" : "rgba(255,255,255,0.08)",
            color: copied ? "var(--gold)" : "var(--midnight-text-secondary)",
          }}
          aria-label={copied ? "Copied" : "Copy account number"}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

export default function Gift({ config }: GiftProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="gift"
      className="relative py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0B1026 50%, #0a0a1a 100%)" }}
    >
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: "rgba(212,175,55,0.1)" }}
          >
            <GiftIcon className="w-7 h-7" style={{ color: "var(--gold)" }} />
          </div>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: "var(--midnight-text)" }}>
          {config.title || "Wedding Gift"}
        </h2>

        {config.message && (
          <p className="text-sm mb-10 max-w-md mx-auto leading-relaxed" style={{ color: "var(--midnight-text-secondary)" }}>
            {config.message}
          </p>
        )}

        {config.bank && config.bank.length > 0 && (
          <div className="space-y-4 mb-8">
            {config.bank.map((acc, i) => (
              <BankCard key={i} bank={acc.bank} name={acc.name} number={acc.number} />
            ))}
          </div>
        )}

        {config.qris && (
          <motion.div
            className="inline-block p-4 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Image
              src={assetPath(config.qris)}
              alt="QRIS"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="text-xs mt-2" style={{ color: "var(--midnight-text-secondary)" }}>
              Scan QR untuk kirim kado
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
