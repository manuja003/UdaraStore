export interface Furniture {
  id: number;
  name: string;
  images: string[];
  category: string;
}

export const furnitureData: Furniture[] = [
  {
    id: 1,
    name: "Chair 1",
    images: [
      "/images/furniture/Chair1/1.jpg",
      "/images/furniture/Chair1/2.jpg",
      "/images/furniture/Chair1/3.jpg",
      "/images/furniture/Chair1/4.jpg"
    ],
    category: "Living Room"
  },
  {
    id: 2,
    name: "Chair 2",
    images: [
      "/images/furniture/Chair2/1.jpg",
      "/images/furniture/Chair2/2.jpg",
      "/images/furniture/Chair2/3.jpg"
    ],
    category: "Dining Room"
  },
  {
    id: 3,
    name: "Chair 3",
    images: [
      "/images/furniture/Chair3/1.jpg",
      "/images/furniture/Chair3/2.jpg"
    ],
    category: "Chair"
  },
  {
    id: 4,
    name: "Chair 4",
    images: [
      "/images/furniture/Chair4/1.jpg",
      "/images/furniture/Chair4/2.jpg",
      "/images/furniture/Chair4/3.jpg"
    ],
    category: "Living Room"
  },
  {
    id: 5,
    name: "Chair 5",
    images: [
      "/images/furniture/Chair5/1.jpg",
      "/images/furniture/Chair5/2.jpg",
      "/images/furniture/Chair5/3.jpg"
    ],
    category: "Living Room"
  },{
    id: 6,
    name: "Chair 6",
    images: [
      "/images/furniture/Chair6/1.jpg",
      "/images/furniture/Chair6/2.jpg",
      "/images/furniture/Chair6/3.jpg"
    ],
    category: "Living Room"
  }
]; 