import type { TemplateConfig } from "@/shared/types";
import midnightConfig from "@/config.json";

const TEMPLATES: Record<string, Record<string, TemplateConfig>> = {
  modern: {
    "midnight-romance": midnightConfig as unknown as TemplateConfig,
  },
};

export function getTemplateConfig(
  category: string,
  slug: string
): TemplateConfig | null {
  return TEMPLATES[category]?.[slug] ?? null;
}

export function getAllTemplateSlugs(): {
  category: string;
  slug: string;
}[] {
  return [{ category: "modern", slug: "midnight-romance" }];
}

export function getAllTemplates() {
  return [
    { category: "modern", slug: "midnight-romance", config: midnightConfig as TemplateConfig },
  ];
}

export function getCategories() {
  return ["modern"];
}
