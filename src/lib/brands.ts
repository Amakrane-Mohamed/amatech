export const brandsContent = {
  eyebrow: "Partnering with the world's leading enterprises",
  heading: "Supported by many companies around the world",
} as const;

export type BrandLogo = {
  id: string;
  name: string;
};

export const brandLogos: BrandLogo[] = [
  { id: "brand-1", name: "Logoipsum" },
  { id: "brand-2", name: "Logoipsum" },
  { id: "brand-3", name: "Logoipsum" },
  { id: "brand-4", name: "Logoipsum" },
  { id: "brand-5", name: "Logoipsum" },
];
