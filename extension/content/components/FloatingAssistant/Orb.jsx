import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Orb = ({ state = 'idle' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    idle: { scale: 1, boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)' },
    hover: { scale: 1.1, boxShadow: '0 0 25px rgba(14, 165, 233, 0.8)' },
    thinking: { scale: [1, 1.2, 1], rotate: [0, 180, 360], transition: { repeat: Infinity, duration: 2 } },
  };

  const currentState = state === 'idle' && isHovered ? 'hover' : state;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 pointer-events-auto cursor-pointer flex items-center justify-center rounded-full bg-gradient-to-tr from-primary to-blue-300 w-14 h-14"
      variants={variants}
      animate={currentState}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      drag
      dragConstraints={{ left: -window.innerWidth + 80, right: 0, top: -window.innerHeight + 80, bottom: 0 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="absolute inset-0 rounded-full glass-card opacity-50"></div>
      <Brain className="text-white w-6 h-6 z-10" />
    </motion.div>
  );
};

export default Orb;
