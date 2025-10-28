// components/ProfileCard.js
import React from 'react';
import Image from 'next/image';

const ProfileCard = ({ name, title, company, imageUrl }) => {
  return (
    // UNIFORM CARD CONTAINER: Use px-4 and py-6 for consistent padding.
    
    <div className="
    my-box
        relative 
        px-4 py-6  // Consistent padding
        bg-white 
        rounded-[20px] 
        overflow-hidden 
        w-full 
        h-full  // ⚡ Ensures it takes full height in the grid row
        transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl
    "
    >

      {/* Upper Section: Main Large Image */}
      {/* Aspect ratio 4/3 or 16/9 for consistent image sizing across cards */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"  // ⚡ Use layout="fill" with a parent aspect ratio for consistent sizing
          objectFit="cover"
        />
      </div>

      {/* Lower Section: Name, Title, and Small Profile Image */}
      <div className="mt-4"> {/* Slight margin at the top of the text section */}
        <div className="flex items-center space-x-3">

          {/* Small Circular Profile Image */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={imageUrl}
              alt={name}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Name and Title/Company */}
          <div>
            <h3 className="text-base font-bold text-gray-800 leading-tight">{name}</h3>
            <p className="text-sm text-gray-600 leading-tight">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;