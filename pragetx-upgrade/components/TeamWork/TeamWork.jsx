"use client";
import { useState } from "react";
import Image from "next/image";
import TeamWorkImg1 from "@/public/homescreen/TeamWork1.png";
import TeamWorkImg2 from "@/public/homescreen/TeamWork2.png";
import TeamWorkImg3 from "@/public/homescreen/TeamWork3.png";
import TeamWorkImg4 from "@/public/homescreen/TeamWork4.png";
import TeamWorkImg5 from "@/public/homescreen/TeamWork5.png";

export default function TeamWork() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const images = [TeamWorkImg1, TeamWorkImg2, TeamWorkImg3, TeamWorkImg4, TeamWorkImg5];

  return (
    <section className="pt-0">
      <div className="container text-center">
        <h2 className="font-[700] leading-[100%] tracking-normal">
          Teamwork That Drives{" "}
          <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#A856F7_0%,#6A5ACD_50%,#00A1E0_100%)]">
            Growth
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
          {/* First Image (unblurred by default, but blurs when hovering others) */}
          <div
            className="col-span-1 row-span-1 order-2 md:order-1"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={images[0]}
              alt="Image 0"
              height={10000}
              width={10000}
              className={`h-[300px] w-full object-cover rounded-xl transition-all duration-300 
                ${hoveredIndex && hoveredIndex !== 0 ? "blur-sm" : "blur-none"}
              `}
            />
          </div>

          {/* Second Image (large one, full width on mobile) */}
          <div
            className={`transition-all duration-300 col-span-2 md:col-span-2 order-3 md:order-2`}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={images[1]}
              alt="Image 1"
              height={10000}
              width={10000}
              className={`h-[300px] w-full object-cover rounded-xl transition-all duration-300 ${
                hoveredIndex === 1 ? "blur-none" : "blur-sm"
              }`}
            />
          </div>

          {/* Remaining images */}
          {images.slice(2).map((img, idx) => {
            const realIdx = idx + 2;
            const isHovered = hoveredIndex === realIdx;
            const isLast = realIdx === images.length - 1;

            return (
              <div
                key={realIdx}
                className={`col-span-1 row-span-1 
                  ${isLast ? "order-1 md:order-last" : "order-4 md:order-3"}
                `}
                onMouseEnter={() => setHoveredIndex(realIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={img}
                  alt={`Image ${realIdx}`}
                  height={10000}
                  width={10000}
                  className={`h-[300px] w-full object-cover rounded-xl transition-all duration-300 
                    ${isHovered ? "blur-none" : "blur-sm"}
                  `}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
