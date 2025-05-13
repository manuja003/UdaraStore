import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getProductById } from '../../data/products';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  
  const product = id ? getProductById(parseInt(id)) : undefined;

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Button onClick={() => navigate('/shop')}>Return to Shop</Button>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=I'm%20interested%20in%20product%20number%20${product.id}`;

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <div className="space-y-4">
          <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted flex items-center justify-center mx-auto max-w-md max-h-md">
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
                onClick={() => setSelectedImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft size={28} />
              </button>
              <DialogTrigger asChild>
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.title} 
                  className="w-full h-full object-cover object-center cursor-zoom-in"
                  onClick={() => setZoomOpen(true)}
                />
              </DialogTrigger>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
                onClick={() => setSelectedImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
                aria-label="Next image"
                type="button"
              >
                <ChevronRight size={28} />
              </button>
            </div>
            <DialogContent className="max-w-2xl flex items-center justify-center">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title + ' zoomed'}
                className="w-full h-full object-contain max-h-[80vh]"
              />
            </DialogContent>
          </Dialog>
          <div className="flex justify-center gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square rounded-lg overflow-hidden ${
                  selectedImageIndex === index ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.title} - View ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <div className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</div>
          
          <div className="flex items-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < (product.rating?.rate || 0) ? 'text-accent' : 'text-muted'}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>

          <p className="text-muted-foreground mb-8">{product.description}</p>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-neutral-700 hover:bg-neutral-900 text-white font-semibold py-3 px-4 rounded transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.74 2.76A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9.86.16.18.32.2.6.07.28-.14 1.18-.44 2.25-1.41.83-.74 1.39-1.65 1.55-1.93.16-.28.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 5.01 4.23.7.24 1.25.38 1.68.48.71.15 1.36.13 1.87.08.57-.06 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
            </svg>
            Order via WhatsApp
          </a>

          <div className="mt-8 pt-8 border-t">
            <h3 className="font-medium mb-2">Product Details</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>In stock and ready to ship</li>
              <li>Free shipping on orders over $50</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
