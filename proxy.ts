import { NextResponse, type NextRequest } from "next/server";

/**
 * Proxy — auto-redirect ke host kanonik dari NEXT_PUBLIC_SITE_URL.
 * - NEXT_PUBLIC_SITE_URL tanpa trailing slash (mis: https://www.ais-frozen-food.web.id)
 * - Jika request host berbeda dari host kanonik, 308 redirect ke kanonik + path
 * - Di-skip untuk: file statis, _next, api, dan localhost/dev
 * Validasi env build-time via lib/utils.ts; di sini fallback aman jika env kosong.
 */
export default function proxy(request: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "";
  if (!siteUrl) return NextResponse.next();

  let canonicalHost: string;
  let canonicalProtocol: string;
  try {
    const u = new URL(siteUrl);
    canonicalHost = u.host;
    canonicalProtocol = u.protocol;
  } catch {
    return NextResponse.next();
  }

  const host = request.headers.get("host") ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");

  if (host.toLowerCase() === canonicalHost.toLowerCase()) {
    if (canonicalProtocol === "https:" && proto === "http") {
      const url = request.nextUrl.clone();
      url.protocol = "https:";
      url.host = canonicalHost;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const isLocal = host.includes("localhost") || host.startsWith("192.168.") || host.startsWith("127.0.0.1");
  if (isLocal) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.protocol = canonicalProtocol;
  url.host = canonicalHost;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|icon-48.png|icon-192.png|logo.png|apple-icon.png|opengraph-image|gallery|products|robots.txt|sitemap.xml|llms.txt|llms-full.txt|manifest.json|sw.js).*)"],
};
