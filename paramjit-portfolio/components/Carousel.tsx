import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface CarouselProps {
  title: string;
  items: any[];
  renderItem: (item: any) => React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ title, items, renderItem }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  
  // Calculate width for sliding based on rough card width estimates or percentages
  // For simplicity in this demo, we shift by percentage
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };
  const goNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  }
   const goPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1) % items.length);
  }

  useEffect(() => {
    if (trackRef.current) {
      gsap.to(trackRef.current, {
        x: `-${activeIndex * 100}%`,
        duration: 0.8,
        ease: "power3.inOut"
      });
    }
  }, [activeIndex]);

  return (
    <div className="py-12 md:py-20 max-w-9xl px-16  mx-auto font-mono overflow-hidden">
      {/* Header */}
      <div className="flex items-center mb-10 px-6">
        <div className="w-2 h-10 md:h-12 bg-zinc-700 mr-4"></div>
        <h2 className="text-3xl  font-bold uppercase">{title}</h2>
      </div>

      {/* Slider Window */}
      <div className="relative w-full h-fit  px-6">
        <div className="overflow-hidden h-[80vh]  rounded-3xl">
          {/* Track */}
          <div 
            ref={trackRef} 
            className="flex w-full h-full   will-change-transform"
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className="w-full h-full   flex-shrink-0 px-2" // Each slide takes full width
              >
                {renderItem(item)}
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mt-8 space-x-2">

          <button
          onClick={goPrev}
          className="bg-zinc-700 hover:bg-zinc-600 text-xs px-4 py-2 rounded-full transition-colors ml-4">
            Prev
          </button>
          {/* Pagination Dots */}
          <div className="flex bg-zinc-800/50 rounded-full px-4 py-2 space-x-3 backdrop-blur-sm">
             {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex ? 'bg-white scale-125' : 'bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
          onClick={goNext}
          className="bg-zinc-700 hover:bg-zinc-600 text-xs px-4 py-2 rounded-full transition-colors ml-4">
            next
          </button>
          <button
          className="bg-zinc-700 hover:bg-zinc-600 text-xs px-4 py-2 rounded-full transition-colors ml-4">
            more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;