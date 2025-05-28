import { useState } from "react";
import { furnitureData } from "../data/furniture";
import Layout from "../components/layout/Layout";

const FurnitureSlideshow = ({ images }: { images: string[] }) => {
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
    <div className="relative w-full h-96 flex items-center justify-center">
      <img
        src={images[current]}
        alt="Furniture"
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

const Furniture = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Furniture Collection</h1>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          If you love any of these beautiful furniture pieces, you are warmly invited to visit Udara Store and purchase them in person. Experience the quality and craftsmanship up close—your perfect piece is waiting for you!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {furnitureData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <FurnitureSlideshow images={item.images} />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 font-serif capitalize">{item.name}</h2>
                <p className="text-lg text-gray-600 font-serif capitalize">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Furniture; 