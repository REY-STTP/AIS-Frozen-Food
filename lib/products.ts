import { productImage } from "@/lib/images";

export type CategoryId =
  | "dimsum"
  | "frozen"
  | "cilok-cireng"
  | "lumer"
  | "pelengkap";

export type Category = {
  id: CategoryId;
  name: string;
  blurb: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  imageNo: number;
  category: CategoryId;
  featured?: boolean;
  /** Price in IDR (e.g. 35000) — used for structured data */
  price?: number;
  priceCurrency?: string;
};

export const categories: Category[] = [
  {
    id: "dimsum",
    name: "Dimsum",
    blurb: "Dimsum ayam, udang, dan cumi — isi 10 + saus, siap kukus.",
  },
  {
    id: "frozen",
    name: "Frozen Food",
    blurb: "Singkong keju, gemblong, dan timusku — frozen tanpa pengawet, siap goreng.",
  },
  {
    id: "cilok-cireng",
    name: "Cilok & Cireng",
    blurb: "Cilok, cimol, dan cireng khas Sunda — tersedia bumbu kacang & keju.",
  },
  {
    id: "lumer",
    name: "Aneka Lumer",
    blurb: "Pisang & nangka coklat lumer — varian keju, oreo, dan milo.",
  },
  {
    id: "pelengkap",
    name: "Pelengkap",
    blurb: "Saus mentai, sushi nori, dan rice paper untuk usaha maupun rumah.",
  },
];

/*
 * PENTING: mapping imageNo mengikuti isi poster asli di /public/products:
 * 1 = Singkong Keju, Gemblong, Timusku (Almas Frozen Food)
 * 2 = Poster Dimsum: Ayam Ori, Ayam Keju, Ayam Jamur, Kepiting, dll (Ashlan Food)
 * 3 = Poster Dimsum: Ayam Pedas, Udang, Cumi, Roll Tuna, Ekado, dll (Ashlan Food)
 * 4 = Aneka Lumer: Pisang Coklat (Lumer/Keju/Oreo/Milo), Nangka Coklat
 * 5 = Aneka Cilok & Cireng: Cimol Bean, Cilok Bean, Cireng Kriwil
 * 6 = Sushi Nori Roasted Seaweed
 * 7 = Rice Paper (kulit lumpia, isi 10 lembar)
 * 8 = Saus Mentai (250gr / 500gr / 1Kg, Ashlan Food)
 */
export const products: Product[] = [
  // Dimsum (poster 2 & 3)
  {
    id: "dimsum-ayam-ori",
    name: "Dimsum Ayam Ori",
    description: "Dimsum ayam klasik, lembut dan gurih. Isi 10 + saus.",
    image: productImage(2),
    imageNo: 2,
    category: "dimsum",
    featured: true,
    price: 35000,
    priceCurrency: "IDR",
  },
  {
    id: "dimsum-ayam-keju",
    name: "Dimsum Ayam Keju",
    description: "Dimsum ayam dengan isian keju lumer. Isi 10 + saus.",
    image: productImage(2),
    imageNo: 2,
    category: "dimsum",
    price: 38000,
    priceCurrency: "IDR",
  },
  {
    id: "dimsum-udang",
    name: "Dimsum Udang",
    description: "Dimsum udang segar, manis alami. Isi 10 + saus.",
    image: productImage(3),
    imageNo: 3,
    category: "dimsum",
    featured: true,
    price: 40000,
    priceCurrency: "IDR",
  },
  {
    id: "dimsum-ayam-pedas",
    name: "Dimsum Ayam Pedas",
    description: "Dimsum ayam pedas untuk pencinta spicy. Isi 10 + saus.",
    image: productImage(3),
    imageNo: 3,
    category: "dimsum",
    price: 38000,
    priceCurrency: "IDR",
  },

  // Frozen Food (poster 1)
  {
    id: "singkong-keju",
    name: "Singkong Keju",
    description: "Singkong renyah taburan keju gurih, siap digoreng.",
    image: productImage(1),
    imageNo: 1,
    category: "frozen",
    featured: true,
    price: 28000,
    priceCurrency: "IDR",
  },
  {
    id: "gemblong-cotot",
    name: "Gemblong Cotot",
    description: "Gemblong kenyal khas Salatiga, frozen tanpa pengawet.",
    image: productImage(1),
    imageNo: 1,
    category: "frozen",
    price: 26000,
    priceCurrency: "IDR",
  },
  {
    id: "timusku",
    name: "Timusku",
    description: "Timusku renyah gurih, camilan khas Salatiga siap goreng.",
    image: productImage(1),
    imageNo: 1,
    category: "frozen",
    price: 27000,
    priceCurrency: "IDR",
  },

  // Aneka Lumer (poster 4)
  {
    id: "pisang-coklat",
    name: "Pisang Coklat",
    description: "Pisang lumer balut coklat — varian lumer, keju, oreo, dan milo.",
    image: productImage(4),
    imageNo: 4,
    category: "lumer",
    featured: true,
    price: 32000,
    priceCurrency: "IDR",
  },
  {
    id: "nangka-coklat",
    name: "Nangka Coklat",
    description: "Nangka renyah balut coklat lumer yang manis.",
    image: productImage(4),
    imageNo: 4,
    category: "lumer",
    price: 30000,
    priceCurrency: "IDR",
  },

  // Cilok & Cireng (poster 5)
  {
    id: "cimol-cilok",
    name: "Cimol / Cilok Bean",
    description: "Cimol dan cilok kenyal — tersedia kopong, keju, dan bumbu kacang.",
    image: productImage(5),
    imageNo: 5,
    category: "cilok-cireng",
    featured: true,
    price: 25000,
    priceCurrency: "IDR",
  },
  {
    id: "cireng-kriwil",
    name: "Cireng Kriwil Bean",
    description: "Cireng kriwil renyah, tersedia original dan sambal rujak.",
    image: productImage(5),
    imageNo: 5,
    category: "cilok-cireng",
    price: 26000,
    priceCurrency: "IDR",
  },

  // Pelengkap (foto 6, 7, 8)
  {
    id: "sushi-nori",
    name: "Sushi Nori",
    description: "Roasted seaweed halal untuk sushi, onigiri, dan gimbap.",
    image: productImage(6),
    imageNo: 6,
    category: "pelengkap",
    featured: true,
    price: 38000,
    priceCurrency: "IDR",
  },
  {
    id: "rice-paper",
    name: "Rice Paper",
    description: "Kulit lumpia segar untuk spring roll — isi 10 lembar.",
    image: productImage(7),
    imageNo: 7,
    category: "pelengkap",
    featured: true,
    price: 30000,
    priceCurrency: "IDR",
  },
  {
    id: "saus-mentai",
    name: "Saus Mentai",
    description: "Saus mentai pedas gurih — tersedia 250gr, 500gr, dan 1kg.",
    image: productImage(8),
    imageNo: 8,
    category: "pelengkap",
    featured: true,
    price: 55000,
    priceCurrency: "IDR",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function productsByCategory(id: CategoryId): Product[] {
  return products.filter((p) => p.category === id);
}

/*
 * Kelompok produk per poster — dipakai ProductShowcase agar poster yang sama
 * tidak tampil berulang. Varian ditampilkan sebagai chip di dalam kartu.
 */
export type PosterGroup = {
  imageNo: number;
  category: CategoryId;
  title: string;
  description: string;
  variants: string[];
  /** Base price in IDR for structured data */
  price?: number;
  lowPrice?: number;
  highPrice?: number;
  priceCurrency?: string;
};

export const posterGroups: PosterGroup[] = [
  {
    imageNo: 2,
    category: "dimsum",
    title: "Dimsum Klasik",
    description: "Dimsum ayam favorit keluarga, isi 10 + saus.",
    variants: [
      "Dimsum Ayam Ori",
      "Dimsum Ayam Keju",
      "Dimsum Ayam Jamur",
      "Dimsum Ayam Kepiting",
    ],
    price: 35000,
    lowPrice: 35000,
    highPrice: 40000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 3,
    category: "dimsum",
    title: "Dimsum Spesial",
    description: "Varian dimsum premium, isi 10 + saus.",
    variants: [
      "Dimsum Udang",
      "Dimsum Ayam Pedas",
      "Dimsum Cumi",
      "Roll Tuna",
      "Ekado Telur",
    ],
    price: 38000,
    lowPrice: 38000,
    highPrice: 45000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 1,
    category: "frozen",
    title: "Aneka Siap Goreng",
    description: "Frozen tanpa pengawet, tinggal goreng langsung di rumah.",
    variants: ["Singkong Keju", "Gemblong Cotot", "Timusku"],
    price: 28000,
    lowPrice: 25000,
    highPrice: 30000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 4,
    category: "lumer",
    title: "Pisang & Nangka Coklat",
    description: "Cemilan lumer balut coklat premium, frozen.",
    variants: [
      "Pisang Coklat Lumer",
      "Pisang Coklat Keju",
      "Pisang Coklat Oreo",
      "Pisang Coklat Milo",
      "Nangka Coklat",
    ],
    price: 32000,
    lowPrice: 30000,
    highPrice: 35000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 5,
    category: "cilok-cireng",
    title: "Cilok, Cimol & Cireng",
    description: "Camilan kenyal khas Sunda, frozen tanpa pengawet.",
    variants: [
      "Cimol Bean Kopong",
      "Cimol Bean Keju",
      "Cilok Bean Bumbu Kacang",
      "Cireng Kriwil Original",
      "Cireng Sambel Rujak",
    ],
    price: 25000,
    lowPrice: 25000,
    highPrice: 28000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 6,
    category: "pelengkap",
    title: "Sushi Nori",
    description: "Roasted seaweed halal untuk sushi, onigiri, dan gimbap.",
    variants: [],
    price: 38000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 7,
    category: "pelengkap",
    title: "Rice Paper",
    description: "Kulit lumpia segar untuk spring roll — isi 10 lembar.",
    variants: [],
    price: 30000,
    priceCurrency: "IDR",
  },
  {
    imageNo: 8,
    category: "pelengkap",
    title: "Saus Mentai",
    description: "Saus mentai pedas gurih, cocok untuk dimsum dan sushi.",
    variants: ["250gr", "500gr", "1Kg"],
    price: 55000,
    lowPrice: 35000,
    highPrice: 95000,
    priceCurrency: "IDR",
  },
];

export function posterGroupsByCategory(id: CategoryId): PosterGroup[] {
  return posterGroups.filter((g) => g.category === id);
}
