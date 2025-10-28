"use client"
import { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const percentage = (currentScrollPosition / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-[#A856F7] via-[#6A5ACD] to-[#00A1E0] "
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '4px',
        width: `${scrollPercentage}%`,
        zIndex: 1000,
        transition: 'width 0.1s ease-out',
      }}
    />
  );
};

export default ScrollProgressBar;