import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProductCardProps {
  product: Product;
}

const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20product%20number%20${product.id}`;

  return (
    <Card className="product-card group overflow-hidden hover-lift border-none shadow-sm">
      <a href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer" className="block">
        <AspectRatio ratio={1 / 1} className="overflow-hidden bg-muted/20">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </a>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
          <h3 className="font-medium text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            <a href={`/product/${product.id}`} target="_blank" rel="noopener noreferrer">{product.title}</a>
          </h3>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`text-xs ${star <= (product.rating?.rate || 0) ? 'text-accent' : 'text-muted'}`}>
                ★
              </span>
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating?.count || 0})
            </span>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 w-full bg-neutral-700 hover:bg-neutral-900 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.76A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86.16.18.32.2.6.07.28-.14 1.18-.44 2.25-1.41.83-.74 1.39-1.65 1.55-1.93.16-.28.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
          </svg>
          Order via WhatsApp
        </a>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
