// components/CustomCursor.jsx
'use client'; // Required for mouse event listeners and state

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi'; // Use an arrow icon you like

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set the cursor position to the mouse coordinates
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Hide the default system cursor for the entire body
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'default'; // Restore cursor on cleanup
    };
  }, []);

  return (
    <motion.div
      className="custom-arrow-cursor"
      // Use Framer Motion to smoothly track the mouse position
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      // Adjust the translation to center the icon (e.g., half its size)
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Critical: allows clicks to pass through
        zIndex: 9999,
        transform: 'translate(-50%, -50%)', // Center the cursor icon
      }}
    >
      {/* The React Icon Component */}
      <FiArrowUpRight size={24} color="white" style={{ 
          filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.8))' // Add shadow for visibility
      }} />
    </motion.div>
  );
};

export default CustomCursor;