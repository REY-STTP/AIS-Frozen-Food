/**
 * WhatsApp Business Catalog sync (Meta API) — stub untuk Phase 3 task 31.
 * Implementasi penuh butuh: WHATSAPP_TOKEN, CATALOG_ID, dan webhook.
 * File ini menyediakan adapter agar UI bisa call tanpa error di build.
 */

export type CatalogItem = {
  id: string;
  name: string;
  description: string;
  price?: string;
  image_url?: string;
  availability: "in stock" | "out of stock";
};

export async function fetchCatalog(): Promise<CatalogItem[]> {
  // TODO: ganti dengan fetch ke https://graph.facebook.com/v20.0/{catalog_id}/products
  // Untuk sekarang return mock dari lib/products agar build tidak bergantung external API
  const { featuredProducts } = await import("./products");
  return featuredProducts.map((p) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: "Rp50.000",
    image_url: p.image,
    availability: "in stock" as const,
  }));
}

export async function syncCatalogToWhatsApp(): Promise<{ ok: boolean; count: number }> {
  const items = await fetchCatalog();
  // eslint-disable-next-line no-console
  console.log(`[catalog] sync mock ${items.length} items — configure WHATSAPP_TOKEN untuk sync real`);
  return { ok: true, count: items.length };
}
