import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    title: "Buddha Statue - Serene Meditation",
    price: 89.99,
    description: "Handcrafted Buddha statue made from premium resin. Perfect for meditation spaces and home decor. Brings peace and tranquility to any room.",
    category: "statues",
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
    title: "Decorative Ceramic Plate Set",
    price: 129.99,
    description: "Set of 4 hand-painted ceramic plates with intricate patterns. Perfect for both display and serving. Each piece is unique and handcrafted.",
    category: "plates",
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
    title: "Handmade Lamp Shade - Floral Pattern",
    price: 79.99,
    description: "Beautiful handcrafted lamp shade featuring delicate floral patterns. Creates a warm, inviting atmosphere in any room.",
    category: "lamp-shades",
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
    title: "Scented Soy Wax Candle - Lavender",
    price: 34.99,
    description: "Hand-poured soy wax candle with natural lavender essential oils. Long-lasting and creates a calming atmosphere.",
    category: "candles",
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
    title: "Silver Pendant Necklace",
    price: 159.99,
    description: "Elegant sterling silver pendant necklace with unique design. Perfect for both casual and formal occasions.",
    category: "jewelry",
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
    title: "Abstract Wall Art Print",
    price: 149.99,
    description: "Modern abstract art print on premium canvas. Adds a contemporary touch to any living space.",
    category: "pictures",
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
    title: "Ganesha Statue - Prosperity",
    price: 119.99,
    description: "Handcrafted Ganesha statue symbolizing prosperity and good fortune. Perfect for home or office decor.",
    category: "statues",
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
    title: "Decorative Plate - Mandala Design",
    price: 69.99,
    description: "Hand-painted decorative plate featuring intricate mandala patterns. Perfect for wall display or table centerpiece.",
    category: "plates",
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
    title: "Vintage Style Lamp Shade",
    price: 89.99,
    description: "Classic vintage-style lamp shade with elegant patterns. Creates a warm, nostalgic atmosphere.",
    category: "lamp-shades",
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
    title: "Gold-Plated Earrings",
    price: 79.99,
    description: "Elegant gold-plated earrings with unique design. Perfect for adding a touch of sophistication to any outfit.",
    category: "jewelry",
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
    title: "Landscape Wall Art",
    price: 199.99,
    description: "Beautiful landscape art print on premium canvas. Brings the beauty of nature into your home.",
    category: "pictures",
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
    title: "Aromatherapy Candle Set",
    price: 59.99,
    description: "Set of 3 scented soy wax candles with different essential oil blends. Perfect for creating a relaxing atmosphere.",
    category: "candles",
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
