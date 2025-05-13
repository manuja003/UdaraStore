import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';

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
              <h3 className="text-xl font-semibold mb-4 text-[#1877F3] flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                Facebook
              </h3>
              <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src="/images/IMG-20250505-WA0147.jpg" alt="Facebook post preview" className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform mx-auto" />
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#1877F3] text-white rounded font-semibold hover:bg-[#145db2] transition-colors"
              >
                See More on Facebook
              </a>
            </div>
            {/* Instagram */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#E4405F] flex items-center justify-center gap-2">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                Instagram
              </h3>
              <div className="flex justify-center gap-6">
                {instagramPosts.map((img, idx) => (
                  <a key={idx} href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src={img} alt={`Instagram post ${idx + 1}`} className="w-40 h-40 object-cover rounded-xl shadow-md hover:scale-105 transition-transform" />
                  </a>
                ))}
              </div>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-[#E4405F] text-white rounded font-semibold hover:bg-[#c13584] transition-colors"
              >
                See More on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
