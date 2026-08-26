import type { CategoryId } from "@/lib/products";

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  category: CategoryId;
  featured?: boolean;
};

export const productImage = (n: number) => `/products/produk-${n}.jpg`;

export type ImageMeta = { w: number; h: number };

export const imageMeta: Record<number, ImageMeta> = {
  1: { w: 905, h: 1280 },
  2: { w: 905, h: 1280 },
  3: { w: 905, h: 1280 },
  4: { w: 925, h: 1280 },
  5: { w: 947, h: 1280 },
  6: { w: 1080, h: 967 },
  7: { w: 1200, h: 1600 },
  8: { w: 960, h: 1280 },
};

export const productAspectRatio = (n: number): string =>
  `${imageMeta[n].w} / ${imageMeta[n].h}`;

export const productImageMeta = (n: number): ImageMeta => imageMeta[n];
