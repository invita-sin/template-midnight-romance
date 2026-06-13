"use client";

import { useMemo } from "react";
import type { TemplateConfig } from "@/shared/types";

export function useTemplateConfig(config: TemplateConfig) {
  return useMemo(() => config, [config]);
}
