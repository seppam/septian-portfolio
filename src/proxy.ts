import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { caseStudyProjects } from "@/data/projects";

// Unknown URLs get the site's own 404 page, in the right language, with a real 404 status:
//   /anything -> English, /id/anything -> Indonesian.
const slugs = new Set(caseStudyProjects().map((p) => p.slug));

function known(pathname: string): boolean {
  const path = pathname.replace(/^\/(id|en)(?=\/|$)/, "") || "/";
  if (path === "/") return true;
  if (/^\/(work\/[^/]+\/)?opengraph-image(-[\w]+)?$/.test(path)) return true;
  const m = path.match(/^\/work\/([^/]+)$/);
  return !!m && slugs.has(m[1]);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (/\.[a-z0-9]+$/i.test(pathname)) return NextResponse.next(); // files: sitemap.xml, images, video
  if (known(pathname) && pathname !== "/not-found-page") return NextResponse.next();
  const lang = pathname === "/id" || pathname.startsWith("/id/") ? "id" : "en";
  const url = request.nextUrl.clone();
  url.pathname = `/${lang}/not-found-page`;
  url.search = "";
  return NextResponse.rewrite(url, { status: 404 });
}

export const config = { matcher: ["/((?!_next/|api/).*)"] };
