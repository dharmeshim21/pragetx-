"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function GradientSlider() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const x = useMotionValue(0);

  const beforeImg = "/images/scale.png"; // Left
  const afterImg = "/images/partner.png"; // Right

  // Set container width and start from middle
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setWidth(w);
        x.set(w / 2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [x]);

  // ✅ FIX: Properly reveal right image, ensuring full coverage
  const clipPath = useTransform(x, (val) => `inset(0 ${width - val}px 0 0)`);

  return (
    <div className="w-full flex justify-center mt-10">
      <div
        ref={containerRef}
        className="relative w-full h-[600px] rounded-[80px] overflow-hidden select-none bg-black"
      >
        <img
          src={beforeImg}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 overflow-hidden"
        >
          <img
            src={afterImg}
            alt="After"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Divider Line / Drag Handle */}
        {width > 0 && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: width }}
            dragElastic={0}
            style={{ x, touchAction: "none" }}
            className="absolute top-0 bottom-0 w-[3px] bg-white/80 cursor-grab"
          >
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-6 h-6 bg-white rounded-md shadow-md flex flex-col items-center justify-center gap-[2px]">
              <div className="w-2 h-2 bg-gray-700 rounded-full" />
              <div className="w-2 h-2 bg-gray-700 rounded-full" />
              <div className="w-2 h-2 bg-gray-700 rounded-full" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
