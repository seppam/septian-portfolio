import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

export async function renderOg(opts: { eyebrow: string; title: string; chips?: string[]; footer: string }) {
  const photo = await readFile(join(process.cwd(), "public/images/profile-og.jpg"));
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fafaf7", color: "#14181a", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1, padding: "64px 56px 56px 72px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 32, color: "#4a5258", letterSpacing: 1 }}>{opts.eyebrow}</div>
            <div style={{ display: "flex", fontSize: opts.title.length > 40 ? 58 : 72, fontWeight: 700, lineHeight: 1.08, marginTop: 24, letterSpacing: -1.5 }}>{opts.title}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", gap: 14, marginBottom: 28 }}>
              {(opts.chips ?? []).map((c) => (
                <div key={c} style={{ display: "flex", fontSize: 28, padding: "6px 18px", borderRadius: 999, background: "#e4f4ec", color: "#0b5740" }}>{c}</div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: 32, color: "#0f6b4f", fontWeight: 600 }}>{opts.footer}</div>
          </div>
        </div>
        <div style={{ display: "flex", width: 420, background: "#0f6b4f", alignItems: "center", justifyContent: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={340} height={425} alt="" style={{ borderRadius: 24, objectFit: "cover" }} />
        </div>
      </div>
    ),
    ogSize,
  );
}
