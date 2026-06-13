const BASE = "/template-midnight-romance";

export function assetPath(path: string | undefined | null): string {
  if (!path) return "";
  if (path.startsWith(BASE)) return path;
  if (path.startsWith("/")) return `${BASE}${path}`;
  return `${BASE}/${path}`;
}
