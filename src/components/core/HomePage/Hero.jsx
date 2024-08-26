// import React from "react";


// import rectangle_1 from "../../../assets/Images/t9.webp"
// import rectangle_2 from "../../../assets/Images/t11.jpg"




// const Hero = ({appType, tagLine, description, mainActionText, extraActionText}) => {
//   return (
//     <div id="product">
//       <div style={{textShadow:'0px 1px 1px gray'}} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
//         <div>
//           <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
//         </div>
//         <div>
//           <p className="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
//             {tagLine}
//           </p>
//         </div>
//         <div>
//           <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">
//             {description}
//           </p>
//         </div>
//         <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
//           <button
//             className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
//           >
//             {mainActionText}
//           </button>
//           <button
//             className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
//           >
//             {extraActionText}
//           </button>
//         </div>
        
//       </div>
//       <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
//           <img className="absolute left-0 lg:left-auto lg:-mt-64" src={rectangle_1} alt=""/><img className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" src={rectangle_2} alt=""/>
//         </div>
//     </div>
//   );
// };

// export default Hero;
import React, { useState } from "react";

import rectangle_1 from "../../../assets/Images/t13.jpg";

const Hero = ({ appType, tagLine, description, mainActionText, extraActionText }) => {
  const [opacity, setOpacity] = useState(0.6);

  const handlePlayStoreClick = () => {
    setOpacity(1); // Increase opacity when Play Store is clicked
  };

  const handleAppStoreClick = () => {
    setOpacity(0.3); // Decrease opacity when App Store is clicked
  };

  return (
    <div id="product">
      <div
        style={{ textShadow: '0px 1px 1px gray' }}
        className="relative flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover"
      >
        <div
          style={{
            backgroundImage: `url(${rectangle_1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: opacity,
            transition: 'opacity 0.3s ease', // Smooth transition for opacity change
          }}
          className="absolute inset-0 z-0"
        ></div>
        <div className="relative z-10">
          <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{appType}</p>
        </div>
        <div className="relative z-10">
          <p className="p-2 text-4xl font-bold text-center text-blue-800 lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
            {tagLine}
          </p>
        </div>
        <div className="relative z-10">
          <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">
            {description}
          </p>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
          <button
            className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
            onClick={handlePlayStoreClick}
          >
            {mainActionText}
          </button>
          <button
            className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
            onClick={handleAppStoreClick}
          >
            {extraActionText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
