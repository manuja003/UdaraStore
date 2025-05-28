export interface Furniture {
  id: number;
  name: string;
  image: string;
  category: string;
}

export const furnitureData: Furniture[] = [
  {
    id: 1,
    name: "Modern Sofa",
    image: "/images/IMG-20250505-WA0147.jpg",
    category: "Living Room"
  },
  {
    id: 2,
    name: "Dining Table",
    image: "/images/IMG-20250505-WA0145.jpg",
    category: "Dining Room"
  },
  {
    id: 3,
    name: "Queen Bed",
    image: "/images/IMG-20250505-WA0146.jpg",
    category: "Bedroom"
  },
  {
    id: 4,
    name: "Bookshelf",
    image: "/images/IMG-20250505-WA0143.jpg",
    category: "Living Room"
  },
  {
    id: 5,
    name: "Coffee Table",
    image: "/images/IMG-20250505-WA0144.jpg",
    category: "Living Room"
  },
  {
    id: 6,
    name: "Office Chair",
    image: "/images/IMG-20250505-WA0134.jpg",
    category: "Office"
  }
]; 