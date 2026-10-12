import status from "@/data/link-status.json";
import type { Project } from "@/data/projects";

const table = status as Record<string, number>;

/** "live": URL returned 200 at build time. "offline": URL set but not 200 (paused). "none": no URL. */
export function liveState(p: Project): "live" | "offline" | "none" {
  const u = p.links.live;
  if (!u) return "none";
  return table[u] === 200 ? "live" : "offline";
}
