import React, { useState } from "react";
import Layout from "../components/layout/Layout";

const reviews = [
  {
    id: 1,
    name: "Nimal Perera",
    review: "Absolutely love the craftsmanship! The furniture I bought from Udara Store is both beautiful and sturdy. Highly recommended!",
    images: [
      "/images/IMG-20250505-WA0133.jpg",
      "/images/IMG-20250505-WA0134.jpg"
    ]
  },
  {
    id: 2,
    name: "Samanthi Silva",
    review: "A wonderful shopping experience. The staff was friendly and the products exceeded my expectations.",
    images: [
      "/images/IMG-20250505-WA0132.jpg",
      "/images/IMG-20250505-WA0131.jpg"
    ]
  },
  {
    id: 3,
    name: "Ruwan Jayasuriya",
    review: "I found the perfect piece for my living room. Will definitely visit again!",
    images: [
      "/images/IMG-20250505-WA0131.jpg",
      "/images/IMG-20250505-WA0130.jpg"
    ]
  },
  {
    id: 4,
    name: "Dilani Fernando",
    review: "Great quality and unique designs. My family loves our new dining table!",
    images: [
      "/images/IMG-20250505-WA0130.jpg",
      "/images/IMG-20250505-WA0133.jpg"
    ]
  }
];

const ReviewSlideshow = ({ images }: { images: string[] }) => {
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
    <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
      <img
        src={images[current]}
        alt="Review"
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

const Reviews = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Customer Reviews</h1>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Read what our happy customers have to say about their experience with Udara Store and our products!
        </p>
        <div className="flex flex-col gap-16">
          {reviews.map((review, idx) => (
            <div
              key={review.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 flex items-center justify-center p-4">
                <ReviewSlideshow images={review.images} />
              </div>
              <div className="md:w-1/2 flex items-center justify-center p-8">
                <div className="text-center md:text-left w-full">
                  <h2 className="text-2xl font-bold mb-2">{review.name}</h2>
                  <p className="text-gray-700 text-base italic">"{review.review}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reviews; 