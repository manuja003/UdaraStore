import React, { useState } from "react";
import Layout from "../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Elegant Wooden Chair",
    images: [
      "/images/IMG-20250505-WA0133.jpg",
      "/images/IMG-20250505-WA0134.jpg"
    ],
    description: "Handcrafted from premium wood, this chair combines comfort and style for any room."
  },
  {
    id: 2,
    name: "Classic Dining Table",
    images: [
      "/images/IMG-20250505-WA0132.jpg",
      "/images/IMG-20250505-WA0131.jpg"
    ],
    description: "Spacious and sturdy, perfect for family gatherings and dinner parties."
  },
  {
    id: 3,
    name: "Modern Bookshelf",
    images: [
      "/images/IMG-20250505-WA0131.jpg",
      "/images/IMG-20250505-WA0130.jpg"
    ],
    description: "A sleek design to showcase your favorite books and decor."
  },
  {
    id: 4,
    name: "Cozy Armchair",
    images: [
      "/images/IMG-20250505-WA0130.jpg",
      "/images/IMG-20250505-WA0133.jpg"
    ],
    description: "Sink into comfort with this plush, stylish armchair."
  }
];

const ProductSlideshow = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-80 md:h-[32rem] flex items-center justify-center">
      <img
        src={images[current]}
        alt="Product"
        className="w-full h-full object-cover object-center rounded-lg"
      />
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 z-10"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-2 hover:bg-opacity-70 z-10"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

const OurProducts = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Discover our exclusive range of products, crafted with care and designed to elevate your living spaces. Our commitment to quality ensures that every piece is both beautiful and durable. Experience the difference with our exceptional collection!
        </p>
        <div className="flex flex-col gap-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full">
                <ProductSlideshow images={product.images} />
              </div>
              <div className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OurProducts; 