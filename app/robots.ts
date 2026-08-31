import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/login", "/admin", "/draft", "/_not-found"],
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Anthropic-AI", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
