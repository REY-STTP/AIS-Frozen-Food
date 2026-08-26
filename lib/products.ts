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
  },
  {
    id: "dimsum-ayam-keju",
    name: "Dimsum Ayam Keju",
    description: "Dimsum ayam dengan isian keju lumer. Isi 10 + saus.",
    image: productImage(2),
    imageNo: 2,
    category: "dimsum",
  },
  {
    id: "dimsum-udang",
    name: "Dimsum Udang",
    description: "Dimsum udang segar, manis alami. Isi 10 + saus.",
    image: productImage(3),
    imageNo: 3,
    category: "dimsum",
    featured: true,
  },
  {
    id: "dimsum-ayam-pedas",
    name: "Dimsum Ayam Pedas",
    description: "Dimsum ayam pedas untuk pencinta spicy. Isi 10 + saus.",
    image: productImage(3),
    imageNo: 3,
    category: "dimsum",
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
  },
  {
    id: "gemblong-cotot",
    name: "Gemblong Cotot",
    description: "Gemblong kenyal khas Salatiga, frozen tanpa pengawet.",
    image: productImage(1),
    imageNo: 1,
    category: "frozen",
  },
  {
    id: "timusku",
    name: "Timusku",
    description: "Timusku renyah gurih, camilan khas Salatiga siap goreng.",
    image: productImage(1),
    imageNo: 1,
    category: "frozen",
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
  },
  {
    id: "nangka-coklat",
    name: "Nangka Coklat",
    description: "Nangka renyah balut coklat lumer yang manis.",
    image: productImage(4),
    imageNo: 4,
    category: "lumer",
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
  },
  {
    id: "cireng-kriwil",
    name: "Cireng Kriwil Bean",
    description: "Cireng kriwil renyah, tersedia original dan sambal rujak.",
    image: productImage(5),
    imageNo: 5,
    category: "cilok-cireng",
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
  },
  {
    id: "rice-paper",
    name: "Rice Paper",
    description: "Kulit lumpia segar untuk spring roll — isi 10 lembar.",
    image: productImage(7),
    imageNo: 7,
    category: "pelengkap",
    featured: true,
  },
  {
    id: "saus-mentai",
    name: "Saus Mentai",
    description: "Saus mentai pedas gurih — tersedia 250gr, 500gr, dan 1kg.",
    image: productImage(8),
    imageNo: 8,
    category: "pelengkap",
    featured: true,
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
  },
  {
    imageNo: 1,
    category: "frozen",
    title: "Aneka Siap Goreng",
    description: "Frozen tanpa pengawet, tinggal goreng langsung di rumah.",
    variants: ["Singkong Keju", "Gemblong Cotot", "Timusku"],
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
  },
  {
    imageNo: 6,
    category: "pelengkap",
    title: "Sushi Nori",
    description: "Roasted seaweed halal untuk sushi, onigiri, dan gimbap.",
    variants: [],
  },
  {
    imageNo: 7,
    category: "pelengkap",
    title: "Rice Paper",
    description: "Kulit lumpia segar untuk spring roll — isi 10 lembar.",
    variants: [],
  },
  {
    imageNo: 8,
    category: "pelengkap",
    title: "Saus Mentai",
    description: "Saus mentai pedas gurih, cocok untuk dimsum dan sushi.",
    variants: ["250gr", "500gr", "1Kg"],
  },
];

export function posterGroupsByCategory(id: CategoryId): PosterGroup[] {
  return posterGroups.filter((g) => g.category === id);
}
