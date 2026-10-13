import status from "@/data/link-status.json";
import type { Project } from "@/data/projects";

const table = status as Record<string, number>;

/**
 * "live": tier 1 project whose URL returned 200 at build time (the only state that shows a Live badge).
 * "offline": tier 1 URL set but not 200. "none": no URL, or not a tier 1 project.
 */
export function liveState(p: Project): "live" | "offline" | "none" {
  const u = p.links.live;
  if (!u || p.tier !== 1) return "none";
  return table[u] === 200 ? "live" : "offline";
}

/** For tier 3 "Earlier experiments": a plain demo link (never a Live badge). */
export function demoState(p: Project): "ok" | "offline" | "none" {
  const u = p.links.live;
  if (!u) return "none";
  return table[u] === 200 ? "ok" : "offline";
}

/** Browser demo button and badge: shown only when the demo URL returned 200 at build time. */
export function browserDemoState(p: Project): "ok" | "none" {
  const u = p.links.demo;
  if (!u) return "none";
  return table[u] === 200 ? "ok" : "none";
}
