// components/Gif.js

import React, { useState } from 'react'; // Import useState hook
import stylesheet from "~/tailwind.css?url";

const Gif = () => {
  // Set up state for hover state
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className=" h-1/4 w-auto z-10" 
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <div className="inset-0 overflow-hidden">
        <img
  src={isHovered ? '/video/logo.gif' : '/image/logo.jpg'}
  alt="Your GIF"
  className="w-full h-full scale-50 object-cover transition-transform duration-500 hover:scale-50"
  style={{ maxHeight: '25%', maxWidth: '25%' }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
/>

      </div>
    </div>
  );
};

export default Gif;
