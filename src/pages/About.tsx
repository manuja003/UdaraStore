import React from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import Team from '../components/about/Team';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="relative py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UDARA STORE</h1>
            <p className="text-muted-foreground text-lg">
              Blending vintage elegance with modern charm since 1996
            </p>
            <Separator className="w-24 h-1 bg-primary mx-auto mt-8 mb-8" />
          </div>
        </div>
      </div>
        
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Established in 1996, UDARA ANTIQUES has been a trusted name for over three decades, offering rare antiques and timeless treasures. Now, we are expanding our passion with interior design services, blending vintage elegance with modern charm.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With authenticity and artistry, we transform spaces into inspiring masterpieces, bringing history and sophistication to your home or business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece in our collection tells a story, carefully selected for its historical significance, craftsmanship, and enduring beauty.
            </p>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-xl animate-fade-in" style={{animationDelay: '400ms'}}>
            <img 
              src="https://images.unsplash.com/photo-1664972184438-cf10d8057aa8?ixlib=rb-4.0.3" 
              alt="Our workshop" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Embedded About Us Video */}
        <div className="container-custom my-12">
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.instagram.com/p/DIq7yksKBOK/embed/captioned/"
              title="About Us Video"
              frameBorder="0"
              scrolling="no"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
        
        {/* Team Component */}
        <Team />
        
        <div className="text-center py-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Visit UDARA STORE</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Explore our collection of timeless treasures and discover how we can transform your space with vintage elegance and modern charm.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/shop">
                Browse Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
