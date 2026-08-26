export const WHATSAPP_NUMBER = "6285226122121";
export const WHATSAPP_DISPLAY = "0852-2612-2121";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Halo AIS Frozen Food, saya ingin bertanya tentang produk frozen food yang tersedia.",
  hero: "Halo AIS Frozen Food, saya tertarik dengan produk frozen food Anda. Mohon informasi produk dan ketersediaannya.",
  reseller: "Halo AIS Frozen Food, saya tertarik untuk ambil produk sebagai reseller/toko. Mohon informasi harga grosir dan ketersediaan.",
  location: "Halo AIS Frozen Food, saya ingin tahu lokasi toko dan cara pengambilan pesanan.",
  contact: "Halo AIS Frozen Food, saya ingin pesan frozen food. Mohon informasi produk, harga, dan ketersediaan.",
  product: (name: string) =>
    `Halo AIS Frozen Food, saya tertarik dengan produk ${name}. Mohon informasi harga dan ketersediaannya.`,
} as const;
