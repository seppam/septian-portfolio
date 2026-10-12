import Image from "next/image";
import type { Project, ProjectImage } from "@/data/projects";
import { ContractsDiagram, PipelineDiagram } from "./Diagrams";

export function Shot({ img, sizes, priority = false }: { img: ProjectImage; sizes: string; priority?: boolean }) {
  return (
    <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} priority={priority} loading={priority ? undefined : "lazy"} />
  );
}

/** Card/case-study visual: screenshots when present, otherwise the drawn diagram, otherwise nothing. */
export function ProjectVisual({ p, variant }: { p: Project; variant: "featured" | "half" | "hero" }) {
  const desktop = p.images?.find((i) => i.kind === "desktop");
  const mobile = p.images?.find((i) => i.kind === "mobile");
  if (desktop || mobile) {
    return (
      <div className="relative">
        {desktop && (
          <div className={`frame ${mobile ? "hidden sm:block sm:w-[88%]" : ""}`}>
            <Shot img={desktop} sizes="(min-width: 960px) 640px, 90vw" />
          </div>
        )}
        {mobile && (
          <div
            className={`frame frame-phone ${
              desktop
                ? "mx-auto w-[200px] sm:absolute sm:-bottom-6 sm:right-0 sm:mx-0 sm:w-[28%] sm:min-w-[120px]"
                : "mx-auto w-[220px]"
            }`}
          >
            <Shot img={mobile} sizes="240px" />
          </div>
        )}
      </div>
    );
  }
  if (p.visual === "pipeline") {
    return (
      <div className="rounded-2xl border hair bg-[var(--surface)] p-3">
        <PipelineDiagram className={`mx-auto h-auto w-full ${variant === "hero" ? "max-w-[460px]" : "max-w-[400px]"}`} />
      </div>
    );
  }
  if (p.visual === "contracts") return <ContractsDiagram className="mx-auto h-auto w-full max-w-[400px]" />;
  return null;
}
