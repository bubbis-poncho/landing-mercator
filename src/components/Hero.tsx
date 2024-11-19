import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Generate data points that will move along grid lines
  const dataPoints = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    startX: (i % 4) * 20,  // Spread points across columns
    startY: Math.floor(i / 4) * 20,  // Spread points across rows
    direction: i % 2 === 0 ? 'horizontal' : 'vertical',  // Alternate movement direction
  }));

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900"></div>
      
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Grid Pattern */}
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          
          {/* Data Points Moving Along Grid */}
          {dataPoints.map((point) => (
            <motion.circle
              key={point.id}
              r="0.8"
              initial={{ 
                x: point.startX, 
                y: point.startY 
              }}
              animate={
                point.direction === 'horizontal' 
                  ? {
                      x: [point.startX, point.startX + 80, point.startX],
                      y: point.startY
                    }
                  : {
                      x: point.startX,
                      y: [point.startY, point.startY + 80, point.startY]
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: point.id * 0.5,
              }}
              className="fill-blue-400"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center px-4">
        <Bot className="mx-auto mb-8 w-24 h-24 text-blue-400" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Automate Your Business with AI-Driven Precision
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Streamline your operations, reduce costs, and make data-driven decisions with our AI-powered automation solutions.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;