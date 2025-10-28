// components/TestimonialCard.js
import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ quote, authorName, authorTitle, authorCompany, authorImageUrl, isWhite = false }) => {
  const contentPadding = 'p-6';

  return (
    <div
      className={`
        md:w-[400px] lg:w-fit
        px-[10px] py-6  // Consistent padding
        my-box flex-col justify-between 
        rounded-[20px]
        transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl 
        h-full  items-center justify-center  // ⚡ Ensures it takes full height in the grid row

        ${isWhite ? 'drop-shadow-[10px]' : ''}
    `}
    >

      <div
        className={`w-full flex flex-col p-8 mb-5 relative my-box1`}
        style={{
          borderRadius: '0px 40px 0px 40px',
          background: `linear-gradient(90deg, rgba(168, 86, 247, 0.06) 0%, rgba(106, 90, 205, 0.06) 50%, rgba(0, 161, 224, 0.06) 100%)`,
          backgroundImage: `
            radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 86, 247, 0.06) 0%, rgba(106, 90, 205, 0.06) 50%, rgba(0, 161, 224, 0.06) 100%)
          `,
          backgroundSize: '18px 18px, 100% 100%',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        }}
      >

        <div className="w-10 h-10 mb-2" style={{ marginLeft: '0px' }}>
          <Image
            src={"/homescreen/homeCard/double.png"}
            alt={"qutes"}
            width={40} // ⚡ Adjusted size to fit the container
            height={40}
          />
        </div>

        {/* Quote Text */}
        <p className="text-lg font-semibold leading-relaxed  text-gray-700" >
          "{quote}"
        </p>

      </div>

    
      <div className="flex items-center"> 
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
          <Image
            src={authorImageUrl}
            alt={authorName}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-base text-gray-800 leading-tight">{authorName}</h4>
          <p className="text-sm text-gray-600 leading-tight mt-[5px]" style={{ fontSize: '14px' }}>{authorTitle}, {authorCompany}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;