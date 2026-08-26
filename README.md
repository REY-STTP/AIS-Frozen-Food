# 🥟 AIS Frozen Food — Website Landing Page & Katalog Digital

<p align="center">
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" height="45" alt="Next.js" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" height="45" alt="React" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" height="45" alt="Tailwind CSS" />
  <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg" height="45" alt="TypeScript" />
</p>

<p align="center">
  <strong>Website profil &amp; katalog digital interaktif modern untuk AIS Frozen Food — UMKM penyedia aneka makanan beku berkualitas untuk kebutuhan rumah, toko, dan reseller di area Pati &amp; Kudus.</strong>
</p>

<p align="center">
  <a href="#-fitur-utama">Fitur Utama</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-struktur-proyek">Struktur Proyek</a> •
  <a href="#-panduan-instalasi">Instalasi</a> •
  <a href="#-panduan-kustomisasi">Kustomisasi</a> •
  <a href="#-seo--geo">SEO &amp; GEO</a> •
  <a href="#-deploy">Deploy</a>
</p>

---

## 🌟 Tentang Proyek

**AIS Frozen Food** adalah landing page modern berperforma tinggi yang dirancang untuk meningkatkan konversi pemesanan dan mempermudah pelanggan menelusuri katalog. Mengusung desain *artisanal warm* premium (krem hangat, cocok espresso, aksen cokelat — tipografi Playfair Display + Poppins), website ini memberikan kesan brand makanan elegan sekaligus ringan dan responsif di berbagai perangkat.

### 💡 Keunggulan Utama:
- **Order via WhatsApp Otomatis**: Integrasi chat WhatsApp dengan template pesan cerdas yang terisi otomatis sesuai produk/kategori yang dipilih.
- **Katalog Produk per Poster**: Produk dikelompokkan per poster katalog (`posterGroups`) lengkap dengan chip varian rasa — menghindari poster sama tampil berulang.
- **Desain Artisanal**: Kartu produk dengan bentuk *arch* (`rounded-t-full`), top bar, header sticky, hero full-width, dan footer espresso gelap.
- **Aksesibilitas & Performa**: Dukungan penuh `prefers-reduced-motion`, optimasi gambar Next.js Image, dan struktur HTML semantik.
- **SEO & GEO Siap**: JSON-LD (`LocalBusiness` + `FAQPage`), `robots.txt`, `sitemap.xml`, `llms.txt`, meta geo, dan OpenGraph/Twitter Cards.

---

## 🚀 Fitur Utama

| Fitur | Deskripsi |
| :--- | :--- |
| 🔝 **Top Bar & Sticky Header** | Bar alamat/jam/sosmed di atas; header dengan logo, navigasi, dan CTA "Pesan Sekarang". |
| 🖼️ **Hero Full-width** | Background foto toko (`/gallery/toko.jpg`), badge jam buka, judul serif, CTA, dan statistik. |
| 🏷️ **Kenapa Memilih Kami** | Tiga kartu *arch* (Dimsum, Cilok & Cireng, Aneka Lumer) dengan hover lift. |
| 🍱 **Katalog Produk** | Filter kategori (tab) menampilkan kartu per poster lengkap dengan chip varian rasa. |
| ⭐ **Produk Unggulan** | Grid 4 kolom berisi 8 produk unggulan (satu poster unik per kartu). |
| 🤝 **Reseller & Grosir CTA** | Banner espresso khusus program reseller & pembelian grosir. |
| 📍 **Lokasi & Google Maps** | Layout info kiri, peta Maps kanan; kartu Ambil di Toko, Pesan Antar, & Jam Buka. |
| 💬 **Smart WhatsApp** | Tombol di header, tiap kartu produk, footer, dan tombol mengambang (*Floating Button*). |
| ❓ **FAQ** | Accordion 7 pertanyaan (native `<details>`) + skema `FAQPage` untuk mesin AI. |
| 📱 **Responsif & Mobile Friendly** | Optimal dari smartphone (menu drawer) hingga desktop. |
| 🔍 **SEO & GEO Lengkap** | JSON-LD, `robots.txt`, `sitemap.xml`, `llms.txt`, meta geo, OpenGraph & Twitter Cards. |

---

## 🛠️ Tech Stack & Dependensi

### Dependensi Utama (`dependencies`)
- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) — SSR, routing modern, optimasi gambar.
- **UI Library**: [React 19](https://react.dev/) & [React DOM 19](https://react.dev/).
- **Animasi**: [Motion](https://motion.dev/) — transisi layout & micro-interaction (respect `prefers-reduced-motion`).
- **Ikon**: [@phosphor-icons/react](https://phosphoricons.com/) — ikon SVG konsisten, mendukung SSR.

### Dependensi Pengembangan (`devDependencies`)
- **Bahasa**: [TypeScript 5](https://www.typescriptlang.org/).
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` + `postcss`.
- **Linting**: [ESLint 9](https://eslint.org/) dengan `eslint-config-next`.
- **Tipografi**: Google Fonts (*Playfair Display* serif + *Poppins* sans) via `next/font`.

---

## 📂 Struktur Proyek

```text
AIS-Frozen-Food/
├── app/
│   ├── globals.css           # Tema Tailwind v4, token warna cream/cocoa/espresso, font
│   ├── icon.png              # Favicon resolusi tinggi
│   ├── layout.tsx            # Root layout, metadata SEO, font, JSON-LD, Floating WhatsApp
│   ├── page.tsx              # Halaman utama (komposisi section)
│   ├── robots.ts             # Route /robots.txt
│   └── sitemap.ts            # Route /sitemap.xml
├── components/
│   ├── ui/
│   │   ├── container.tsx             # Wrapper layout (max-w konsisten)
│   │   └── whatsapp-button.tsx       # Tombol WhatsApp reusable (varian primary/outline/cream)
│   ├── site-topbar.tsx       # Bar alamat, jam, & ikon sosmed
│   ├── navbar.tsx            # Header sticky + drawer mobile
│   ├── hero.tsx              # Hero full-width background foto toko
│   ├── why-ais.tsx           # 3 kartu arch "Kenapa Memilih Kami"
│   ├── product-showcase.tsx  # Tab kategori + kartu poster + chip varian
│   ├── featured-products.tsx # Grid 4 kolom produk unggulan
│   ├── reseller-cta.tsx      # Banner CTA reseller/grosir
│   ├── delivery-location.tsx # Info kiri + Google Maps kanan
│   ├── contact-cta.tsx       # Ajakan pemesanan cepat
│   ├── footer.tsx            # Footer espresso gelap
│   ├── floating-whatsapp.tsx # Tombol WA melayang kanan bawah
│   ├── seo.tsx               # JSON-LD LocalBusiness
│   └── faq.tsx               # Section FAQ + JSON-LD FAQPage
├── lib/
│   ├── business.ts           # Profil usaha (alamat, jam, maps, sosmed)
│   ├── images.ts             # Metadata rasio aspek & helper URL produk
│   ├── products.ts           # Kategori, daftar produk, & posterGroups
│   ├── site.ts               # Resolusi SITE_URL dari env (dengan fallback)
│   ├── utils.ts              # Utility (cn / classnames helper)
│   └── whatsapp.ts           # Nomor WA & generator link pesan
├── public/
│   ├── logo.png              # Logo AIS Frozen Food
│   ├── gallery/toko.jpg      # Foto toko (background hero)
│   ├── products/             # Poster katalog: produk-1.jpg … produk-8.jpg
│   └── llms.txt              # Ringkasan untuk mesin AI (GEO)
├── .env.example              # Template variabel lingkungan (NEXT_PUBLIC_SITE_URL)
├── eslint.config.mjs         # Konfigurasi ESLint
├── next.config.ts            # Konfigurasi Next.js
├── package.json              # Dependensi & script
├── postcss.config.mjs        # PostCSS untuk Tailwind v4
└── tsconfig.json             # Konfigurasi TypeScript
```

---

## 💻 Panduan Instalasi & Menjalankan Proyek

### Prasyarat:
- **Node.js** (versi 18.18.0+; direkomendasikan LTS 20+)
- Manajer paket: **npm**, **pnpm**, atau **yarn**

### Langkah-langkah:

1. **Clone repositori**
   ```bash
   git clone <repo-url>
   cd AIS-Frozen-Food
   ```

2. **Install dependensi**
   ```bash
   npm install
   ```

3. **(Opsional) Siapkan environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local, isi NEXT_PUBLIC_SITE_URL dengan domain www Anda
   ```

4. **Jalankan development server**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000).

5. **Script Perintah Lainnya**
   ```bash
   npm run typecheck   # Type checking TypeScript
   npm run lint        # Linting dengan ESLint
   npm run build       # Build mode produksi
   npm run start       # Jalankan server produksi
   ```

---

## ⚙️ Panduan Kustomisasi

Seluruh data bisnis, produk, dan tautan WhatsApp tersentralisasi di `lib/` sehingga mudah diperbarui tanpa mengubah komponen.

### 1. Data Usaha & Kontak — `lib/business.ts`
```typescript
export const business = {
  name: "AIS Frozen Food",
  tagline: "Frozen Food Favorit untuk Rumah & Usaha",
  hours: "Setiap hari · 08.00–20.00 WIB",
  addressShort: "Lumpur, Bumirejo, Margorejo, Pati",
  addressFull: "Lumpur, Bumirejo, Kec. Margorejo, Kabupaten Pati, Jawa Tengah",
  whatsappDisplay: "0852-2612-2121",
  tiktok: "@ais.frozen.food",
  tiktokUrl: "https://www.tiktok.com/@ais.frozen.food",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lumpur+Bumirejo+Margorejo+Pati",
  mapsEmbed: "https://www.google.com/maps?q=...",
  serviceArea: "Pati – Kudus",
} as const;
```

### 2. Katalog Produk — `lib/products.ts`
Produk dikelompokkan per **poster** agar satu poster tidak tampil berulang. Setiap grup punya `imageNo` (merujuk `produk-N.jpg`), `title`, `description`, dan daftar `variants` (tampil sebagai chip):
```typescript
export const posterGroups: PosterGroup[] = [
  {
    imageNo: 1,
    category: "frozen",
    title: "Aneka Siap Goreng",
    description: "Frozen tanpa pengawet, tinggal goreng langsung di rumah.",
    variants: ["Singkong Keju", "Gemblong Cotot", "Timusku"],
  },
  // ...
];
```
> **Pemetaan poster:** `1` = Singkong Keju/Gemblong/Timusku, `2` & `3` = Dimsum, `4` = Aneka Lumer, `5` = Cilok & Cireng, `6` = Sushi Nori, `7` = Rice Paper, `8` = Saus Mentai. Ganti file `public/products/produk-N.jpg` sesuai nomor tersebut.

### 3. Nomor WhatsApp & Template Chat — `lib/whatsapp.ts`
```typescript
export const WHATSAPP_NUMBER = "6285226122121"; // Tanpa tanda +
export const WHATSAPP_DISPLAY = "0852-2612-2121";
```

### 4. URL Situs (Canonical, OG, Sitemap, JSON-LD) — `.env`
Atur di `.env.local` (lihat `.env.example`):
```
NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com
```
Jika kosong, kode fallback ke `https://www.ais-frozen-food.vercel.app` (lihat `lib/site.ts`). Selalu gunakan versi `www.` agar konsisten.

### 5. Logo & Favicon
- `public/logo.png` — logo (tampil di navbar & footer).
- `app/icon.png` — ikon tab browser.

---

## 🔍 SEO & GEO

Proyek ini dioptimasi untuk mesin pencari tradisional maupun *Generative Engine* (ChatGPT, Gemini, Perplexity):

- **JSON-LD**: `LocalBusiness` (`components/seo.tsx`, disuntik di `layout.tsx`) dan `FAQPage` (`components/faq.tsx`) — membantu rich result & kutipan AI.
- **`app/robots.ts`** → `/robots.txt` (mengizinkan crawl + menunjuk sitemap).
- **`app/sitemap.ts`** → `/sitemap.xml` (URL situs utama).
- **`public/llms.txt`** → ringkasan bisnis, produk, layanan, & kontak dalam teks polos untuk dibaca LLM.
- **Meta geo**: `geo.region: ID-JT`, `geo.placename: Pati` (di `layout.tsx`).
- **OpenGraph & Twitter Cards** dengan gambar poster produk.
- **Semantik**: heading berjenjang, `alt` pada gambar, `aria-label` pada ikon, `prefers-reduced-motion`.

> Tips: setelah deploy, validasi dengan **Google Rich Results Test**, **Schema Markup Validator**, dan daftarkan di **Google Search Console**.

---

## 🚢 Panduan Deploy

### Opsi 1: Vercel (Sangat Direkomendasikan)
1. Push kode ke repositori Git.
2. Impor ke [Vercel](https://vercel.com).
3. Vercel otomatis mendeteksi Next.js → klik **Deploy**.
4. Di *Environment Variables*, tambahkan `NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com`.

### Opsi 2: Netlify
1. Hubungkan repositori ke [Netlify](https://netlify.com).
2. Build command: `npm run build`, publish directory: `.next`.
3. Tambahkan env `NEXT_PUBLIC_SITE_URL` di pengaturan situs.

### Opsi 3: VPS / Docker / Self-hosted
```bash
npm run build
npm run start -p 3000
```

---

## 📄 Lisensi

Proyek ini dikembangkan untuk **AIS Frozen Food**. Seluruh hak cipta merek, aset visual produk, dan materi konten adalah milik pemilik usaha.

<p align="center">
  Dibuat dengan ❤️ untuk kemajuan UMKM Indonesia
</p>
