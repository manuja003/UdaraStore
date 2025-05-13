
import React from 'react';

const testimonials = [
  {
    quote: "The quality and craftsmanship of NOVA's products exceeded my expectations. I'll definitely be a returning customer.",
    author: "Sarah Johnson",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&w=100&h=100&crop=faces&fit=crop"
  },
  {
    quote: "I love the minimalist design aesthetic. These products have seamlessly integrated into my daily life.",
    author: "David Chen",
    role: "Architect",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&w=100&h=100&crop=faces&fit=crop"
  },
  {
    quote: "The customer service team went above and beyond to help me find exactly what I needed. Incredible experience.",
    author: "Emma Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&w=100&h=100&crop=faces&fit=crop"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-3 text-center">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-12">
          Don't just take our word for it - hear from some of our satisfied customers!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-muted p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
