import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 md:py-32 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/form.jpg')] bg-cover bg-center opacity-90"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="max-w-2xl space-y-8 mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in text-center">
              Timeless Treasures for{' '}
              <span className="text-primary relative">
                Elegant Living
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground animate-slide-up text-center" style={{animationDelay: '200ms'}}>
              Established in 1996, UDARA STORE offers rare antiques and interior design services, 
              blending vintage elegance with modern charm.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up justify-center" style={{animationDelay: '400ms'}}>
            <Button asChild size="lg" className="text-base px-8 py-6">
              <Link to="/shop" className="flex items-center gap-2">
                Shop Collection
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6">
              <Link to="/about" className="flex items-center gap-2">
                Our Story
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M12 5v14"></path>
                  <path d="M5 12h14"></path>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
