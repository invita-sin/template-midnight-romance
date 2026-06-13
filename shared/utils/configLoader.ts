import { TemplateConfig } from "@/shared/types";

export async function loadTemplateConfig(
  basePath: string
): Promise<TemplateConfig> {
  const res = await fetch(`${basePath}/config.json`);
  if (!res.ok) {
    throw new Error(
      `Failed to load config from ${basePath}/config.json`
    );
  }
  return res.json();
}

export function getTemplateBasePath(
  category: string,
  slug: string
): string {
  return `/templates/${category}/${slug}`;
}
