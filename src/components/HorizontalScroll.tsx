import { motion, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  title: JSX.Element; 
  description: JSX.Element; 
  color: string;
  logo?: JSX.Element;
}

interface HorizontalScrollProps {
  cards: Card[];
}

export const HorizontalScroll = ({ cards }: HorizontalScrollProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 320;
  const gap = 32; 

  const moveToIndex = async (index: number) => {
    if (index < 0 || index >= cards.length) return;
    
    setCurrentIndex(index);
    await controls.start({
      x: -(cardWidth + gap) * index,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    });
  };

  const handlePrevious = () => {
    moveToIndex(currentIndex - 1);
  };

  const handleNext = () => {
    moveToIndex(currentIndex + 1);
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div 
        ref={containerRef}
        className="overflow-hidden"
      >
        <motion.div
          animate={controls}
          className="flex gap-8"
          style={{ width: 'fit-content' }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`
                w-[320px] h-[280px] p-8 rounded-2xl flex flex-col items-center cursor-pointer
                ${hoveredIndex === index ? card.color : 
                  hoveredIndex === null && index === currentIndex ? card.color : 
                  'bg-gray-100 text-gray-600'}
                transition-colors duration-300
              `}
              initial={{ scale: 1 }}
              animate={{ 
                scale: hoveredIndex === index ? 1.05 : 
                       hoveredIndex === null && index === currentIndex ? 1.05 : 1,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => moveToIndex(index)}
            >
              <div className={`mb-6 flex justify-center transition-colors duration-300 
                ${hoveredIndex === index ? '' : 
                  hoveredIndex === null && index === currentIndex ? '' : 
                  'text-gray-400'}`}>
                {card.logo}
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{card.title}</h3>
              <p className={`text-center transition-colors duration-300 
                ${hoveredIndex === index ? 'text-white' : 
                  hoveredIndex === null && index === currentIndex ? 'text-white' : 
                  'text-gray-500'}`}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
          ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === cards.length - 1}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center
          ${currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};