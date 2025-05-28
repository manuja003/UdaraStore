export interface Furniture {
  id: number;
  name: string;
  images: string[];
  category: string;
}

export const furnitureData: Furniture[] = [
  {
    id: 1,
    name: "Modern Sofa",
    images: [
      "/images/IMG-20250505-WA0147.jpg",
      "/images/IMG-20250505-WA0143.jpg"
    ],
    category: "Living Room"
  },
  {
    id: 2,
    name: "Dining Table",
    images: [
      "/images/IMG-20250505-WA0145.jpg",
      "/images/IMG-20250505-WA0144.jpg"
    ],
    category: "Dining Room"
  },
  {
    id: 3,
    name: "Table Chair",
    images: [
      "/images/IMG-20250505-WA0145.jpg",
      "/images/IMG-20250505-WA0144.jpg"
    ],
    category: "Chair"
  },
  {
    id: 4,
    name: "Modern Sofa",
    images: [
      "/images/IMG-20250505-WA0147.jpg",
      "/images/IMG-20250505-WA0143.jpg"
    ],
    category: "Living Room"
  }
]; 