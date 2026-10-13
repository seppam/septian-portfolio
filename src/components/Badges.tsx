import type { Project } from "@/data/projects";
import { ui, type Lang } from "@/data/i18n";
import { liveState } from "@/lib/links";

export function Badge({ children, kind = "neutral" }: { children: React.ReactNode; kind?: "neutral" | "live" | "warn" }) {
  return (
    <span className={`badge ${kind === "live" ? "badge-live" : kind === "warn" ? "badge-warn" : ""}`}>
      {kind === "live" && <span className="dot" aria-hidden />}
      {children}
    </span>
  );
}

export function BadgeCluster({ p, lang }: { p: Project; lang: Lang }) {
  const live = liveState(p);
  return (
    <div className="flex flex-wrap items-center gap-2">
      {live === "live" && <Badge kind="live">{ui.badge.live[lang]}</Badge>}
      {live === "offline" && <Badge kind="warn">{ui.badge.offline[lang]}</Badge>}
      {p.badges.map((b) => (
        <Badge key={b} kind={b === "prototype" || b === "notlive" ? "warn" : "neutral"}>
          {b === "team" && p.teamLabel ? p.teamLabel[lang] : ui.badge[b][lang]}
        </Badge>
      ))}
    </div>
  );
}
