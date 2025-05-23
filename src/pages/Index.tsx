import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { Button } from '@/components/ui/button';

const instagramPosts = [
  '/images/IMG-20250505-WA0147.jpg',
  '/images/IMG-20250505-WA0145.jpg',
  '/images/IMG-20250505-WA0146.jpg',
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />

      {/* How to Order Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">How to Order</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Ordering is simple and convenient. Just browse our collection, click the WhatsApp button on your favorite product, and place your order instantly with our team!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-2">1</div>
              <p className="font-medium">Browse Products</p>
            </div>
            <span className="text-3xl font-bold text-primary">→</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-2">2</div>
              <p className="font-medium">Click WhatsApp</p>
            </div>
            <span className="text-3xl font-bold text-primary">→</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-2">3</div>
              <p className="font-medium">Order Instantly!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-muted/40 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Authenticity</h3>
              <p className="text-muted-foreground">Every product is handpicked and verified for authenticity and quality.</p>
            </div>
            <div className="bg-muted/40 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Free Shipping</h3>
              <p className="text-muted-foreground">Enjoy free shipping on all orders over $50, delivered safely to your door.</p>
            </div>
            <div className="bg-muted/40 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-primary">Handpicked Selection</h3>
              <p className="text-muted-foreground">Our collection is curated for timeless style and lasting value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* Facebook */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                Facebook
              </h3>
              <Button asChild size="lg" className="text-base px-6 sm:px-8 py-5 sm:py-6">
                <a
                  href="https://facebook.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Follow on Facebook
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>

            {/* Instagram */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.17.056-2.171.234-3.149.56-.99.33-1.82.77-2.65 1.6-.83.83-1.27 1.66-1.6 2.65-.326.978-.504 1.98-.56 3.15-.058 1.28-.072 1.688-.072 4.947 0 3.259.014 3.668.072 4.948.056 1.17.234 2.17.56 3.148.33.99.77 1.82 1.6 2.65.83.83 1.66 1.27 2.65 1.6.978.326 1.98.504 3.15.56 1.28.058 1.688.072 4.947.072s3.668-.014 4.948-.072c1.17-.056 2.17-.234 3.148-.56.99-.33 1.82-.77 2.65-1.6.83-.83 1.27-1.66 1.6-2.65.326-.978.504-1.98.56-3.15.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.056-1.17-.234-2.171-.56-3.149-.33-.99-.77-1.82-1.6-2.65-.83-.83-1.66-1.27-2.65-1.6-.978-.326-1.98-.504-3.15-.56-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </h3>
              <Button asChild size="lg" className="text-base px-6 sm:px-8 py-5 sm:py-6">
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Follow on Instagram
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </h3>
              <Button asChild size="lg" className="text-base px-6 sm:px-8 py-5 sm:py-6">
                <a
                  href="https://wa.me/yourphonenumber"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Chat on WhatsApp
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
