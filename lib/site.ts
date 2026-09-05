const DEFAULT_SITE_URL = "https://www.ais-frozen-food.web.id";

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    const u = new URL(raw);
    if (!["http:", "https:"].includes(u.protocol)) return DEFAULT_SITE_URL;
    return u.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = getSiteUrl();

// Bing Webmaster Tools verification token for the site.
export const BING_SITE_VERIFICATION =
  "251DD7C241139056B7F36D7E05ABA7E2";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
