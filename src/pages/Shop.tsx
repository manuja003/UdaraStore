import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import { useLocation } from 'react-router-dom';

const categories = [
  { label: 'Statues', value: 'statues' },
  { label: 'Plates', value: 'plates' },
  { label: 'Lamp Shades', value: 'lamp-shades' },
  { label: 'Candles', value: 'candles' },
  { label: 'Jewelry', value: 'jewelry' },
  { label: 'Pictures', value: 'pictures' },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Shop = () => {
  const query = useQuery();
  const initialCategory = query.get('category') || 'all';
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setSelectedCategory(query.get('category') || 'all');
    // eslint-disable-next-line
  }, [useLocation().search]);

  useEffect(() => {
    let filtered = selectedCategory === 'all'
      ? [...products]
      : products.filter((p) => (p.category || '').toLowerCase().replace(/\s/g, '-') === selectedCategory);
    // Sort products based on sorting option
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating?.rate || 0) - (a.rating?.rate || 0));
        break;
      default:
        // Default to featured/newest
        break;
    }
    setFilteredProducts(filtered);
  }, [sortBy, selectedCategory, products]);

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our range of carefully selected products designed to enhance your everyday life with style and functionality.
          </p>
        </div>

        {/* Category Switcher */}
        <div className="mb-8">
          <div className="flex overflow-x-auto whitespace-nowrap gap-2 md:gap-4 px-1 py-2 rounded-lg bg-background shadow-sm items-center justify-center scrollbar-thin scrollbar-thumb-muted/40 scrollbar-track-transparent">
            <button
              className={`px-5 py-2 rounded-full border font-medium transition-colors min-w-[110px] ${selectedCategory === 'all' ? 'bg-primary text-white border-primary shadow' : 'bg-background text-foreground border-muted hover:bg-muted'}`}
              onClick={() => setSelectedCategory('all')}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-full border font-medium transition-colors min-w-[110px] ${selectedCategory === cat.value ? 'bg-primary text-white border-primary shadow' : 'bg-background text-foreground border-muted hover:bg-muted'}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-8">
          {/* Sort Dropdown */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No products found.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Shop;
