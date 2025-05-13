export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating?: {
    rate: number;
    count: number;
  };
  featured?: boolean;
}

export type ProductCategory = 'all' | 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";
