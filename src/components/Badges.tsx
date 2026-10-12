import type { Badge as B, Project } from "@/data/projects";
import { liveState } from "@/lib/links";

const label: Record<B, string> = {
  solo: "Solo",
  team: "Team",
  participant: "Hackathon participant",
  prototype: "Prototype, not submitted",
  notlive: "Not live yet",
  pm: "PM and Lead",
};

export function Badge({ children, kind = "neutral" }: { children: React.ReactNode; kind?: "neutral" | "live" | "warn" }) {
  return (
    <span className={`badge ${kind === "live" ? "badge-live" : kind === "warn" ? "badge-warn" : ""}`}>
      {kind === "live" && <span className="dot" aria-hidden />}
      {children}
    </span>
  );
}

export function BadgeCluster({ p }: { p: Project }) {
  const live = liveState(p);
  return (
    <div className="flex flex-wrap items-center gap-2">
      {live === "live" && <Badge kind="live">Live</Badge>}
      {live === "offline" && <Badge kind="warn">Demo offline</Badge>}
      {p.badges.map((b) => (
        <Badge key={b} kind={b === "prototype" || b === "notlive" ? "warn" : "neutral"}>
          {b === "team" && p.teamLabel ? p.teamLabel : label[b]}
        </Badge>
      ))}
    </div>
  );
}
