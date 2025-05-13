import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const galleryImages = [
  '/images/IMG-20250505-WA0147.jpg',
  '/images/IMG-20250505-WA0145.jpg',
  '/images/IMG-20250505-WA0146.jpg',
  '/images/IMG-20250505-WA0143.jpg',
  '/images/IMG-20250505-WA0144.jpg',
  '/images/IMG-20250505-WA0134.jpg',
  '/images/IMG-20250505-WA0133.jpg',
  '/images/IMG-20250505-WA0132.jpg',
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Statues', value: 'statues' },
  { label: 'Plates', value: 'plates' },
  { label: 'Lamp Shades', value: 'lamp-shades' },
  { label: 'Candles', value: 'candles' },
  { label: 'Jewelry', value: 'jewelry' },
  { label: 'Pictures', value: 'pictures' },
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">
            Discover some of our beautiful collection. Click a category below to explore more in our shop.
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex overflow-x-auto whitespace-nowrap gap-2 md:gap-4 px-1 py-2 items-center justify-center scrollbar-thin scrollbar-thumb-muted/40 scrollbar-track-transparent mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.value}
              to={cat.value === 'all' ? '/shop' : `/shop?category=${cat.value}`}
              className="px-5 py-2 rounded-full border font-medium transition-colors min-w-[110px] bg-background text-foreground border-muted hover:bg-muted text-center"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md bg-white">
              <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-56 object-cover object-center hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group">
            <Link to="/shop" className="flex items-center gap-2">
              View All Products
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
