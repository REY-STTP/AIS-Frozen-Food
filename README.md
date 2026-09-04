# 🥟 AIS Frozen Food — Website Landing Page & Katalog Digital

<p align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" height="45" alt="Next.js" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" height="45" alt="React" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" height="45" alt="Tailwind CSS" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg" height="45" alt="TypeScript" />
</p>

<p align="center">
  <strong>Website profil & katalog digital modern untuk AIS Frozen Food — UMKM makanan beku berkualitas untuk rumah, toko, dan reseller di Pati & Kudus.</strong>
</p>

<p align="center">
  <a href="#-fitur-utama">Fitur Utama</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-struktur-proyek">Struktur</a> •
  <a href="#-panduan-instalasi">Instalasi</a> •
  <a href="#-kustomisasi">Kustomisasi</a> •
  <a href="#-seo--geo">SEO & GEO</a> •
  <a href="#-keamanan--performa">Keamanan</a> •
  <a href="#-deploy">Deploy</a>
</p>

---

## 🌟 Tentang Proyek

**AIS Frozen Food** — landing page artisanal warm (cream `#F5F1E8`, espresso `#2A1711`, cocoa `#5D4037`) dengan tipografi Playfair Display + Poppins. Dibangun Next.js 16 App Router, fokus konversi WhatsApp, SEO/GEO, dan performa (LCP <2.5s, CLS <0.1). Peta kini memakai **mapcn.dev** (MapLibre GL + Carto Positron) self-host worker, bukan iframe Google.

---

## 🚀 Fitur Utama

| Fitur | Deskripsi |
| :--- | :--- |
| 🔝 **Top Bar & Sticky Header** | Alamat/jam/sosmed + header sticky, drawer mobile `role=dialog` `aria-modal`, keyboard nav arrow/Home/End di tab produk |
| 🖼️ **Hero** | Foto toko `priority` + `fetchPriority high`, urgency badge `Fresh hari ini / Stok terbatas`, A/B CTA copy & warna (`lib/ab.ts`), stats `dl` |
| 🏷️ **Kenapa Memilih Kami** | 3 kartu arch + hover lift, `prefers-reduced-motion` |
| 🍱 **Katalog Produk** | Tab kategori + kartu per poster + chip varian, `Product`+`Offer`/`AggregateOffer` per item + `ItemList` `Product` kolektif (server, 8 poster), skeleton `animate-pulse` saat ganti tab, badge Fresh/Stok, `aria-label` deskriptif |
| ⭐ **Produk Unggulan** | Grid 4 kolom 8 item, `Product` JSON-LD, Fresh badge, link WA `aria-label` |
| 💬 **Social Proof** | 3 testimoni rating 5 (layout `flex-col flex-1` agar nama tidak geser karena panjang kalimat) + reseller logos + stats 4.9/5 |
| 📝 **Inquiry Form Mini** | `components/inquiry-form.tsx` — nama/WA/catatan → auto `wa.me` link |
| 🎯 **Exit-Intent** | `exit-intent-popup.tsx` (mousemove top ≤8px + scroll-up >60px, sessionStorage) — *StickyCtaBar dihapus* |
| 🤝 **Reseller & Grosir CTA** | Banner espresso program reseller |
| 📍 **Lokasi & Maps (mapcn)** | Info kiri + MapLibre kanan via **mapcn** (`components/ui/map.tsx`): Carto Positron/Dark Matter, `Map` + `MapMarker` + `MarkerPopup` + `MapControls`, marker cocoa `Storefront` + popup `Petunjuk Arah`/`Chat`, lazy `IntersectionObserver` 200px, wrapper `absolute inset-0` + `h-90 lg:h-140` fix mobile putih, placeholder `Memuat peta…`, `geo` sinkron embed `pb` terbaru |
| 💬 **Smart WhatsApp** | `WhatsAppButton` reusable + `floating-whatsapp.tsx` (WA + `tel:+6285226122121` fallback) + tracking `lib/analytics.ts` (Plausible/gtag/dataLayer), tombol lokasi `grid grid-cols-2` kiri-kanan di mobile |
| ❓ **FAQ** | Accordion `<details>` + `FAQPage` JSON-LD |
| 🛡️ **Error Handling** | `app/error.tsx` + `app/global-error.tsx` (`html/body` wrapper) + `app/not-found.tsx` 404 custom (kategori + WA) |
| 📱 **PWA** | `public/manifest.json` + `public/sw.js` cache-first + `pwa-register.tsx`, `themeColor #f5f1e8` |
| 🍪 **Cookie Consent** | `cookie-consent.tsx` localStorage `ais-cookie-consent` |

---

## 🛠️ Tech Stack

**Dependencies:** Next.js 16 (App Router, Turbopack), React 19, Motion 11, @phosphor-icons/react 2, **maplibre-gl 6.7** + **lucide-react** (map controls), Tailwind CSS v4
**Dev:** TypeScript 5, @types/geojson, Tailwind CSS v4 + @tailwindcss/postcss, ESLint 9 + eslint-config-next, Storybook (`.storybook/`, `whatsapp-button.stories.tsx`)
**Lain:** Plausible analytics, Sentry stub (`instrumentation.ts`), next/og OG image, next/web-vitals CWV budgets

---

## 📂 Struktur Proyek

```text
AIS-Frozen-Food/
├── app/
│   ├── layout.tsx            # font swap + preconnect (wa.me/bas emit/cartocdn/unpkg/fonts) + Plausible + WebVitals + CookieConsent + PwaRegister + BreadcrumbList/WebPage speakable + WebSite/Organization/LocalBusiness ld+json, icons 512/192/48+favicon, OG static /og-image.png, Google + Bing verification
│   ├── page.tsx              # + ItemList Product kolektif (server, 8 poster) → Hero → WhyAIS → ProductShowcase → Featured → SocialProof → InquiryForm → Reseller → Delivery → Faq → Contact (tanpa StickyCtaBar)
│   ├── globals.css           # Tailwind v4 tokens cream/cocoa/espresso + shadcn tokens (--background/popover/border) + maplibre overrides (.maplibregl-popup-content/.ctrl-attrib)
│   ├── icon.png + icon-192.png + icon-48.png         # favicon multi-size + maskable
│   ├── error.tsx / global-error.tsx / not-found.tsx
│   ├── robots.ts             # allow:/ disallow /api /login /admin/draft + 17 AI bots (GPTBot/OAI-SearchBot/GoogleOther/Claude/Perplexity/Applebot/FacebookBot/cohere-ai/DuckAssistBot...)
│   └── sitemap.ts            # weekly + lastModified: now + images 11, hanya / (hash #produk tidak di-sitemap)
├── proxy.ts                  # 308 redirect ke NEXT_PUBLIC_SITE_URL host kanonik (www)
├── components/
│   ├── ui/map.tsx            # mapcn — Map/MapMarker/MarkerContent/MarkerPopup/MapControls/MapRoute/MapArc/MapGeoJSON/MapClusterLayer (self-host worker /public/maplibre-gl-worker.mjs)
│   ├── ui/whatsapp-button.tsx + .stories.tsx
│   ├── hero.tsx (A/B, H1 sr-only "AIS Frozen Food —" untuk SERP grounding), product-showcase.tsx (skeleton+urgency, Product Offer per kartu), featured-products.tsx
│   ├── social-proof.tsx (flex-1 layout fix), inquiry-form.tsx
│   ├── exit-intent-popup.tsx, cookie-consent.tsx, pwa-register.tsx, web-vitals.tsx
│   ├── delivery-location.tsx (IntersectionObserver 200px + mapcn Map center geo, wrapper absolute inset-0 h-90/lg:h-140, grid-cols-2 buttons), floating-whatsapp.tsx (tel fallback)
│   ├── seo.tsx (LocalBusiness/Organization/WebSite + alternateName), faq.tsx (FAQPage), navbar.tsx, footer.tsx ...
├── lib/
│   ├── business.ts (mapsUrl/mapsEmbed pb terbaru + geo -6.785022493212046,110.98350267367005), products.ts, site.ts (SITE_URL), whatsapp.ts
│   ├── design-tokens.ts, utils.ts (cn + validateEnv), analytics.ts (track), ab.ts (useAB), catalog.ts (Meta API stub), sentry.ts
├── public/
│   ├── logo.png, icon.png + icon-192.png + icon-48.png, og-image.png (1200×630 static OG/Twitter), manifest.json (short_name AIS Frozen Food, icons 512/192/48), sw.js, llms.txt (90 baris spec, absolute URLs) + llms-full.txt
│   ├── maplibre-gl-worker.mjs + maplibre-gl-shared.mjs (self-host worker, 19KB+492KB, Vercel static)
│   ├── products/produk-1…8.jpg, gallery/toko.jpg
├── docs/
│   ├── API.md (rencana /api/products, /inquiry, /catalog/sync) 
│   └── social-assets.md (banner sizes)
├── .storybook/ (main.ts, preview.ts)
├── .github/workflows/ci.yml (lint→typecheck→build)
├── next.config.ts (images avif/webp, CSP worker-src/self+blob+unpkg, basemaps.cartocdn, plausible, security headers, cache-control)
├── instrumentation.ts (Sentry stub)
└── .env.example / .env.local
```

---

## 💻 Panduan Instalasi

**Prasyarat:** Node 18.18+ (20 LTS rekomen), npm/pnpm/yarn

```bash
git clone <repo-url>
cd AIS-Frozen-Food
npm install
cp .env.example .env.local   # isi NEXT_PUBLIC_SITE_URL https://www.domain-anda.com (www, https, tanpa slash)
npm run dev                  # http://localhost:3000
npm run typecheck
npm run lint
npm run build && npm start
```

**Validasi:** `npm run build` harus `✓ Generating static pages (8/8)` + `ƒ Proxy`.

---

## ⚙️ Kustomisasi

**1. Usaha — `lib/business.ts`**
```ts
export const business = { name:"AIS Frozen Food", tagline:"...", hours:"08.00–20.00", addressShort:"Lumpur, Bumirejo", mapsUrl:"https://www.google.com/maps/place/AIS+FROZEN+FOOD/@-6.785022493212046,110.98350267367005,17z", mapsEmbed:"https://www.google.com/maps/embed?pb=...", geo:{lat:-6.785022493212046,lng:110.98350267367005} } as const;
```

**2. Produk — `lib/products.ts`** per `posterGroup` (`imageNo` → `produk-N.jpg`, `variants` chip)

**3. WhatsApp — `lib/whatsapp.ts`**
```ts
export const WHATSAPP_NUMBER="6285226122121";
```

**4. URL — `.env.local`**
```ini
NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com
# WHATSAPP_TOKEN=... (catalog sync)
# SENTRY_DSN=... (Sentry)
# NEXT_PUBLIC_PLAUSIBLE_DOMAIN=...
```
`lib/site.ts` fallback `https://www.ais-frozen-food.web.id`. Selalu `www` agar `proxy.ts` 308 konsisten. Google verification di `app/layout.tsx` `verification.google` + Bing verification `msvalidate.01` via `verification.other`.

**5. Desain tokens — `lib/design-tokens.ts`** (cream/espresso/cocoa/sand, spacing, typography)

**6. Peta — `components/ui/map.tsx` + `lib/business.ts:geo`** ganti `center`/`zoom` atau `styles` Carto → OpenFreeMap, worker sudah self-host di `public/`.

---

## 🔍 SEO & GEO

- **JSON-LD:** `WebSite` (`AIS Frozen Food` + `alternateName`, `SearchAction`) + `Organization` + `LocalBusiness/GroceryStore` (`seo.tsx`), `FAQPage` (`faq.tsx`), `Product`+`Offer`/`AggregateOffer` per kartu + `ItemList` kolektif 8 poster (`page.tsx`), `BreadcrumbList` (`Beranda → #produk`), `WebPage` `speakable` `["#produk","#faq","h1"]`
- **Routes:** `robots.ts` (allow:/ + 17 AI bots) + `sitemap.ts` (weekly `lastModified: now` + 11 images) + `public/llms.txt` (90 baris spec, absolute URLs + harga) + `public/llms-full.txt` + `manifest.json` (icons 512/192/48)
- **Meta:** `metadataBase: SITE_URL`, `alternates.canonical`, `openGraph` `siteName: AIS Frozen Food` + `twitter` (keduanya reference static `/og-image.png` 1200×630), `geo.region ID-JT`, `verification.google` + `verification.other.msvalidate.01` (Bing Webmaster), `llms.txt` hint `<link alternate>`
- **Favicon:** `icon.png 512 maskable` + `icon-192.png` + `icon-48.png` + `favicon.ico any` + `apple-icon.png 180` (next.config cache 86400, proxy exclude)
- **Aksesibilitas:** `sr-only` brand di H1 + `sr-only` → visible `dt`, `aria-modal`/`role=dialog`, `aria-label` deskriptif per produk, `tabIndex` 0/-1, kontras AA, map marker `aria-hidden` + popup accessible
- **Validasi:** Google Rich Results Test (WebSite/ItemList), Schema Validator, Search Console `ndkQkr...`, Bing Webmaster Tools (msvalidate.01), Favicon `google.com/s2/favicons?domain=`, OG Debugger (static `/og-image.png`)

---

## 🔒 Keamanan & Performa

- **Headers `next.config.ts:8`:** CSP `default-src 'self'` + `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google.com https://maps.googleapis.com https://unpkg.com https://plausible.io` + `connect-src ... https://basemaps.cartocdn.com https://*.basemaps.cartocdn.com https://unpkg.com https://plausible.io` + `worker-src 'self' blob: https://unpkg.com` + `img-src ... https://*.basemaps.cartocdn.com` + `style-src`/`frame-src`/`font-src`, `X-Frame-Options SAMEORIGIN`, `X-Content-Type-Options nosniff`, `Referrer-Policy strict-origin-when-cross-origin`, `Permissions-Policy`, `Cache-Control` `public, max-age=31536000, immutable` untuk `/products/*` & `/gallery/*`
- **Images:** `qualities [60,85]` + `formats avif/webp`, hero `priority` + `fetchPriority high`
- **Fonts:** `next/font` `display:swap` (preload default) + `preconnect` wa.me/basemit.cartocdn/unpkg/google/fonts.gstatic + `static.fonts.githubusercontent.com` + `dns-prefetch plausible.io`
- **Maps:** MapLibre self-host `public/maplibre-gl-worker.mjs` + `maplibre-gl-shared.mjs` + `IntersectionObserver` lazy (200px) + `MapMarker`/`MapControls` (Carto Positron), bukan iframe; fallback `mapsEmbed` pb tetap di `business.ts` untuk SEO
- **Proxy:** 308 ke `NEXT_PUBLIC_SITE_URL` host kanonik, skip localhost, enforce https
- **Web Vitals:** `components/web-vitals.tsx` `useReportWebVitals` budgets LCP 2.5s CLS 0.1, `track` ke Plausible/gtag
- **Analytics:** `lib/analytics.ts` `trackWhatsAppClick`/`trackTelClick` di `WhatsAppButton` + `floating-whatsapp`

---

## 🚢 Deploy

**Vercel (rekomen):** Push → Import → env `NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com` → Deploy. Worker self-host di `public/` otomatis ter-serve, tidak perlu `worker-src` unpkg (tetap di-allow untuk fallback). Atur Google Site Verification sudah di `layout.tsx`.

**Netlify:** Build `npm run build`, publish `.next`, env sama.

**VPS/Docker:** `npm run build && npm run start -p 3000`. Pastikan `proxy.ts` 308 aktif & headers CSP ter-apply.

---

## 📄 Lisensi

Untuk **AIS Frozen Food** — hak merek & aset milik pemilik usaha.

<p align="center">Dibuat dengan ❤️ untuk UMKM Indonesia</p>
