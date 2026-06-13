"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import TemplateRenderer from "@/shared/components/TemplateRenderer";
import config from "@/config.json";
import type { TemplateConfig } from "@/shared/types/config";

function HomeContent() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") || undefined;

  return <TemplateRenderer config={config as TemplateConfig} guestName={guestName} />;
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
