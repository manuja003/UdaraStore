import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Minimal Leather Backpack",
    price: 109.99,
    description: "A sleek, minimalist leather backpack perfect for daily use. Features a spacious main compartment and multiple pockets for organization.",
    category: "accessories",
    images: [
      "/images/IMG-20250505-WA0147.jpg",
      "/images/IMG-20250505-WA0145.jpg",
      "/images/IMG-20250505-WA0146.jpg"
    ],
    rating: {
      rate: 4.8,
      count: 124
    },
    featured: true
  },
  {
    id: 2,
    title: "Modern Wireless Headphones",
    price: 249.99,
    description: "Premium wireless headphones with noise-cancellation technology and crystal-clear sound quality. Ideal for music enthusiasts and professionals.",
    category: "electronics",
    images: [
      "/images/IMG-20250505-WA0143.jpg",
      "/images/IMG-20250505-WA0144.jpg",
      "/images/IMG-20250505-WA0134.jpg"
    ],
    rating: {
      rate: 4.6,
      count: 87
    },
    featured: true
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Sustainable and eco-friendly organic cotton t-shirt. Breathable, comfortable, and perfect for everyday wear.",
    category: "clothing",
    images: [
      "/images/IMG-20250505-WA0133.jpg",
      "/images/IMG-20250505-WA0132.jpg",
      "/images/IMG-20250505-WA0131.jpg"
    ],
    rating: {
      rate: 4.5,
      count: 256
    }
  },
  {
    id: 4,
    title: "Ceramic Pour-Over Coffee Set",
    price: 79.99,
    description: "Handcrafted ceramic pour-over coffee set for the perfect morning brew. Includes ceramic dripper and matching mug.",
    category: "home",
    images: [
      "/images/IMG-20250505-WA0130.jpg",
      "/images/IMG-20250505-WA0129.jpg",
      "/images/IMG-20250505-WA0128.jpg"
    ],
    rating: {
      rate: 4.7,
      count: 68
    }
  },
  {
    id: 5,
    title: "Minimalist Quartz Watch",
    price: 159.99,
    description: "Elegant minimalist watch with Japanese quartz movement and sapphire crystal glass. Water-resistant and suitable for all occasions.",
    category: "accessories",
    images: [
      "/images/IMG-20250505-WA0127.jpg",
      "/images/IMG-20250505-WA0126.jpg",
      "/images/IMG-20250505-WA0125.jpg"
    ],
    rating: {
      rate: 4.9,
      count: 142
    },
    featured: true
  },
  {
    id: 6,
    title: "Handcrafted Wooden Desk Organizer",
    price: 59.99,
    description: "Beautifully crafted wooden desk organizer with multiple compartments for stationery and accessories. Made from sustainable oak wood.",
    category: "home",
    images: [
      "/images/IMG-20250505-WA0124.jpg",
      "/images/IMG-20250505-WA0123.jpg",
      "/images/IMG-20250505-WA0122.jpg"
    ],
    rating: {
      rate: 4.4,
      count: 93
    }
  },
  {
    id: 7,
    title: "Premium Yoga Mat",
    price: 89.99,
    description: "Eco-friendly, non-slip yoga mat made from natural rubber. Perfect for yoga enthusiasts of all levels.",
    category: "fitness",
    images: [
      "/images/IMG-20250505-WA0121.jpg",
      "/images/IMG-20250505-WA0120.jpg",
      "/images/IMG-20250505-WA0119.jpg"
    ],
    rating: {
      rate: 4.6,
      count: 112
    }
  },
  {
    id: 8,
    title: "Artisanal Scented Candle",
    price: 34.99,
    description: "Hand-poured soy wax candle with essential oil fragrances. Long-burning and perfect for creating a relaxing atmosphere.",
    category: "home",
    images: [
      "/images/IMG-20250505-WA0118.jpg",
      "/images/IMG-20250505-WA0117.jpg",
      "/images/IMG-20250505-WA0116.jpg"
    ],
    rating: {
      rate: 4.8,
      count: 78
    }
  },
  {
    id: 9,
    title: "Smart Water Bottle",
    price: 45.99,
    description: "Stainless steel water bottle with temperature tracking and hydration reminders. Keeps drinks cold for 24 hours or hot for 12 hours.",
    category: "fitness",
    images: [
      "/images/IMG-20250505-WA0115.jpg",
      "/images/IMG-20250505-WA0114.jpg",
      "/images/IMG-20250505-WA0113.jpg"
    ],
    rating: {
      rate: 4.3,
      count: 65
    }
  },
  {
    id: 10,
    title: "Modern Desk Lamp",
    price: 129.99,
    description: "Adjustable LED desk lamp with wireless charging base. Multiple brightness settings and color temperatures for optimal lighting.",
    category: "home",
    images: [
      "/images/IMG-20250505-WA0112.jpg",
      "/images/IMG-20250505-WA0111.jpg",
      "/images/IMG-20250505-WA0147.jpg"
    ],
    rating: {
      rate: 4.7,
      count: 53
    }
  },
  {
    id: 11,
    title: "Natural Linen Throw Blanket",
    price: 79.99,
    description: "Soft, lightweight throw blanket made from 100% natural linen. Perfect for adding texture and warmth to any space.",
    category: "home",
    images: [
      "/images/IMG-20250505-WA0145.jpg",
      "/images/IMG-20250505-WA0146.jpg",
      "/images/IMG-20250505-WA0143.jpg"
    ],
    rating: {
      rate: 4.5,
      count: 87
    }
  },
  {
    id: 12,
    title: "Premium Leather Wallet",
    price: 89.99,
    description: "Handcrafted genuine leather wallet with RFID protection. Features multiple card slots and a sleek, minimalist design.",
    category: "accessories",
    images: [
      "/images/IMG-20250505-WA0144.jpg",
      "/images/IMG-20250505-WA0134.jpg",
      "/images/IMG-20250505-WA0133.jpg"
    ],
    rating: {
      rate: 4.8,
      count: 106
    }
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string = 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};
