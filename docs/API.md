# AIS Frozen Food — API Docs (rencana CMS / admin)

> Saat ini situs adalah static tanpa backend. Dokumen ini menyiapkan kontrak jika nanti integrasi CMS / admin panel.

## Base
- Env: `NEXT_PUBLIC_SITE_URL` (canonical)
- Format: JSON, `Content-Type: application/json`

## Endpoints (rencana)

### GET /api/products
List produk. Sumber saat ini `lib/products.ts`.
```json
[{ "id": "dimsum-ayam-ori", "name": "Dimsum Ayam Ori", "category": "dimsum", "image": "/products/produk-1.jpg", "description": "...", "availability": "in stock" }]
```

### GET /api/products/:slug
Detail produk + `Product` JSON-LD.

### POST /api/inquiry
Body: `{ name, wa, note, productId? }`
→ server generate `waLink()` + forward ke WhatsApp Business API (optional). Saat ini client-side `components/inquiry-form.tsx` generate wa.me link tanpa simpan.

### POST /api/catalog/sync
Trigger `lib/catalog.ts` `syncCatalogToWhatsApp()` → Meta Graph API `/{catalog_id}/products`. Butuh `WHATSAPP_TOKEN`, `CATALOG_ID`.

## Auth (rencana)
- Admin: NextAuth / JWT, route ` /admin` + ` /login` → `robots: noindex` (Phase 5 task 47)
- Rate limit: proxy `X-Forwarded-For`

## Webhook (rencana)
- `POST /api/webhook/whatsapp` untuk status pengiriman.

## Catatan
- `llms.txt` & `sitemap.xml` auto dari `SITE_URL`.
- Cache: `Cache-Control: public, max-age=60` untuk API, `immutable` untuk assets.
