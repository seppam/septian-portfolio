import { ogSize, renderOg } from "@/lib/og";
import { SITE_URL } from "@/data/site";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "Muhamad Septian Pamungkas, full-stack developer and systems analyst";

export default function Image() {
  return renderOg({
    eyebrow: "Muhamad Septian Pamungkas",
    title: "Full-stack developer, systems analyst, AI application builder",
    footer: SITE_URL.replace(/^https?:\/\//, ""),
  });
}
