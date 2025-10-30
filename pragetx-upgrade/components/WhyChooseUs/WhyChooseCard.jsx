import React from 'react';
import Image from 'next/image';

const WhyChooseCard = ({ title, description, img, color }) => {
  return (
    <div
      className="card flex flex-col justify-between p-6 w-full max-w-[500px] rounded-2xl transition-all duration-300 hover:scale-[1.02]"
      style={{
        background:
          "linear-gradient(90deg, rgba(168, 86, 247, 0.08) 0%, rgba(106, 90, 205, 0.08) 50%, rgba(0, 161, 224, 0.08) 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)",
        minHeight: "280px",
      }}
    >
      {/* Title and Logo Row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
            className="text-transparent bg-clip-text leading-tight break-words"
            style={{
              fontSize: "24px",
              fontWeight: "700",
              backgroundImage: `linear-gradient(90deg, ${color} 0%, rgba(106, 90, 205, 1) 50%, rgba(0, 161, 224, 1) 100%)`,
              lineHeight: "1.3",
              wordBreak: "break-word",
            }}
          >
            {title}
          </h3>
        </div>

        <div className="flex-shrink-0 ml-2">
          <Image
            src={img}
            alt={title}
            height={60}
            width={60}
            className="object-contain rounded-md"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p
          className="text-white/90 leading-relaxed"
          style={{
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
