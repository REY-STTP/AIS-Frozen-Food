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

**AIS Frozen Food** — landing page artisanal warm (cream `#F5F1E8`, espresso `#2A1711`, cocoa `#5D4037`) dengan tipografi Playfair Display + Poppins. Dibangun Next.js 16 App Router, fokus konversi WhatsApp, SEO/GEO, dan performa (LCP <2.5s, CLS <0.1).

---

## 🚀 Fitur Utama

| Fitur | Deskripsi |
| :--- | :--- |
| 🔝 **Top Bar & Sticky Header** | Alamat/jam/sosmed + header sticky, drawer mobile `role=dialog` `aria-modal`, keyboard nav arrow/Home/End di tab produk |
| 🖼️ **Hero** | Foto toko `priority` + `fetchPriority high`, urgency badge `Fresh hari ini / Stok terbatas`, A/B CTA copy & warna (`lib/ab.ts`), stats `dl` |
| 🏷️ **Kenapa Memilih Kami** | 3 kartu arch + hover lift, `prefers-reduced-motion` |
| 🍱 **Katalog Produk** | Tab kategori + kartu per poster + chip varian, `Product` JSON-LD per item, skeleton `animate-pulse` saat ganti tab, badge Fresh/Stok, `aria-label` deskriptif |
| ⭐ **Produk Unggulan** | Grid 4 kolom 8 item, `Product` JSON-LD, Fresh badge, link WA `aria-label` |
| 💬 **Social Proof** | 3 testimoni rating 5 (layout `flex-col flex-1` agar nama tidak geser karena panjang kalimat) + reseller logos + stats 4.9/5 |
| 📝 **Inquiry Form Mini** | `components/inquiry-form.tsx` — nama/WA/catatan → auto `wa.me` link |
| 🎯 **Exit-Intent + Sticky Bar** | `exit-intent-popup.tsx` (mousemove top ≤8px + scroll-up >60px, sessionStorage) + `sticky-cta-bar.tsx` thumb-friendly `tel:` + WA |
| 🤝 **Reseller & Grosir CTA** | Banner espresso program reseller |
| 📍 **Lokasi & Maps** | Info kiri + Maps kanan lazy via `IntersectionObserver` 200px, `allow="autoplay"` + `referrerPolicy`, placeholder `Memuat peta…` |
| 💬 **Smart WhatsApp** | `WhatsAppButton` reusable + `floating-whatsapp.tsx` (WA + `tel:+6285226122121` fallback) + tracking `lib/analytics.ts` (Plausible/gtag/dataLayer) |
| ❓ **FAQ** | Accordion `<details>` + `FAQPage` JSON-LD |
| 🛡️ **Error Handling** | `app/error.tsx` + `app/global-error.tsx` (`html/body` wrapper) + `app/not-found.tsx` 404 custom (kategori + WA) |
| 📱 **PWA** | `public/manifest.json` + `public/sw.js` cache-first + `pwa-register.tsx`, `themeColor #f5f1e8` |
| 🍪 **Cookie Consent** | `cookie-consent.tsx` localStorage `ais-cookie-consent` |

---

## 🛠️ Tech Stack

**Dependencies:** Next.js 16 (App Router, Turbopack), React 19, Motion 11, @phosphor-icons/react 2
**Dev:** TypeScript 5, Tailwind CSS v4 + @tailwindcss/postcss, ESLint 9 + eslint-config-next, Storybook (`.storybook/`, `whatsapp-button.stories.tsx`)
**Lain:** Plausible analytics, Sentry stub (`instrumentation.ts`), next/og OG image, next/web-vitals CWV budgets

---

## 📂 Struktur Proyek

```text
AIS-Frozen-Food/
├── app/
│   ├── layout.tsx            # font swap + preconnect wa.me/google/fonts.gstatic + Plausible + WebVitals + CookieConsent + PwaRegister + BreadcrumbList ld+json
│   ├── page.tsx              # Hero → WhyAIS → ProductShowcase → Featured → SocialProof → InquiryForm → Reseller → Delivery → Faq → Contact
│   ├── globals.css           # Tailwind v4 tokens cream/cocoa/espresso
│   ├── icon.png / opengraph-image.tsx  # OG 1200×630 next/og
│   ├── error.tsx / global-error.tsx / not-found.tsx
│   ├── robots.ts             # allow:/ disallow /api /login /admin /draft
│   └── sitemap.ts            # hanya / (hash #produk tidak di-sitemap, siap /produk/[slug])
├── proxy.ts                  # 308 redirect ke NEXT_PUBLIC_SITE_URL host kanonik (www)
├── components/
│   ├── ui/whatsapp-button.tsx + .stories.tsx
│   ├── hero.tsx (A/B), product-showcase.tsx (skeleton+urgency), featured-products.tsx
│   ├── social-proof.tsx (flex-1 layout fix), inquiry-form.tsx
│   ├── exit-intent-popup.tsx, sticky-cta-bar.tsx, cookie-consent.tsx, pwa-register.tsx, web-vitals.tsx
│   ├── delivery-location.tsx (IntersectionObserver), floating-whatsapp.tsx (tel fallback)
│   ├── seo.tsx, faq.tsx, navbar.tsx, footer.tsx ...
├── lib/
│   ├── business.ts, products.ts, site.ts (SITE_URL), whatsapp.ts
│   ├── design-tokens.ts, utils.ts (validateEnv), analytics.ts (track), ab.ts (useAB), catalog.ts (Meta API stub), sentry.ts
├── public/
│   ├── logo.png, icon.png, manifest.json, sw.js, llms.txt
│   ├── products/produk-1…8.jpg, gallery/toko.jpg
├── docs/
│   ├── API.md (rencana /api/products, /inquiry, /catalog/sync) 
│   └── social-assets.md (banner sizes)
├── .storybook/ (main.ts, preview.ts)
├── .github/workflows/ci.yml (lint→typecheck→build)
├── next.config.ts (images avif/webp, CSP, security headers, cache-control)
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

**Validasi:** `npm run build` harus `✓ Generating static pages (7/7)` + `ƒ Proxy`.

---

## ⚙️ Kustomisasi

**1. Usaha — `lib/business.ts`**
```ts
export const business = { name:"AIS Frozen Food", tagline:"...", hours:"08.00–20.00", addressShort:"Lumpur, Bumirejo", ... } as const;
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
`lib/site.ts` fallback `https://www.ais-frozen-food.vercel.app`. Selalu `www` agar `proxy.ts` 308 konsisten. Google verification di `app/layout.tsx:77` `verification.google`.

**5. Desain tokens — `lib/design-tokens.ts`** (cream/espresso/cocoa/sand, spacing, typography)

---

## 🔍 SEO & GEO

- **JSON-LD:** `LocalBusiness` (`seo.tsx`), `FAQPage` (`faq.tsx`), `Product`+`Offer` per kartu, `BreadcrumbList` (`Beranda → #produk`)
- **Routes:** `robots.ts` + `sitemap.ts` (hanya `/`, hash tidak di-sitemap) + `public/llms.txt` + `manifest.json`
- **Meta:** `metadataBase: SITE_URL`, `alternates.canonical`, `openGraph` + `twitter` + `app/opengraph-image.tsx`, `geo.region ID-JT`, `verification.google`
- **Aksesibilitas:** `sr-only` → visible `dt`, `aria-modal`/`role=dialog`, `aria-label` deskriptif per produk, `tabIndex` 0/-1, kontras `text-espresso-700` AA
- **Validasi:** Google Rich Results Test, Schema Validator, Search Console (meta tag `ndkQkr...`)

---

## 🔒 Keamanan & Performa

- **Headers `next.config.ts:8`:** CSP `default-src 'self'` + `script-src`/`style-src`/`frame-src`/`connect-src`/`img-src`, `X-Frame-Options SAMEORIGIN`, `X-Content-Type-Options nosniff`, `Referrer-Policy strict-origin-when-cross-origin`, `Permissions-Policy`, `Cache-Control` `public, max-age=31536000, immutable` untuk `/products/*` & `/gallery/*`
- **Images:** `qualities [60,85]` + `formats avif/webp`, hero `priority` + `fetchPriority high`
- **Fonts:** `next/font` `display:swap` (preload default) + `preconnect` wa.me/google/fonts.gstatic + `static.fonts.githubusercontent.com` + `dns-prefetch plausible.io`
- **Maps:** `IntersectionObserver` lazy (200px) + `loading=lazy` + `allow="autoplay; clipboard-write; ..."`
- **Proxy:** 308 ke `NEXT_PUBLIC_SITE_URL` host kanonik, skip localhost, enforce https
- **Web Vitals:** `components/web-vitals.tsx` `useReportWebVitals` budgets LCP 2.5s CLS 0.1, `track` ke Plausible/gtag
- **Analytics:** `lib/analytics.ts` `trackWhatsAppClick`/`trackTelClick` di `WhatsAppButton` + `floating-whatsapp`

---

## 🚢 Deploy

**Vercel (rekomen):** Push → Import → env `NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com` → Deploy. Atur Google Site Verification sudah di `layout.tsx`.

**Netlify:** Build `npm run build`, publish `.next`, env sama.

**VPS/Docker:** `npm run build && npm run start -p 3000`. Pastikan `proxy.ts` 308 aktif & headers CSP ter-apply.

---

## 📄 Lisensi

Untuk **AIS Frozen Food** — hak merek & aset milik pemilik usaha.

<p align="center">Dibuat dengan ❤️ untuk UMKM Indonesia</p>
