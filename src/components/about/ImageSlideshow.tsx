import React, { useState, useEffect } from 'react';

const images = [
  '/images/Old pics/IMG_20250331_0013.jpg',
  '/images/Old pics/IMG_20250331_0012.jpg',
  '/images/Old pics/IMG_20250331_0011.jpg',
  '/images/Old pics/IMG_20250331_0007.jpg',
  '/images/Old pics/IMG_20250331_0004.jpg',
  '/images/Old pics/IMG_20250331_0003.jpg',
];

const ImageSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Historical image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow; 