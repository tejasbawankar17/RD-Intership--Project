// import React from 'react';
// import image1 from "../../../assets/Images/t1.jpg";
// import image2 from "../../../assets/Images/t2.jpg";
// import image3 from "../../../assets/Images/t3.jpg";
// import image4 from "../../../assets/Images/t4.jpg";

// const images = [image1, image2, image3, image4];

// const ImageCardGrid = () => {
//   return (
//     <div className="container mt-4 bg-richblue-400 mx-auto p-4">
//       <div className="text-4xl mb-3 text-white font-semibold w-[50%]">
//         Offers
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
//             <div className="p-4">
//               <h2 className="text-lg font-semibold">Image {index + 1}</h2>
//               <p className="text-gray-600">This is a description of image {index + 1}.</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCardGrid;
import React from 'react';
import image1 from "../../../assets/Images/t1.jpg";
import image2 from "../../../assets/Images/t2.jpg";
import image3 from "../../../assets/Images/t3.jpg";
import image4 from "../../../assets/Images/t4.jpg";

const images = [image1, image2, image3, image4];

const ImageCardGrid = () => {
  return (
    <div className="container mt-4 bg-richblue-400 mx-auto p-4">
      <div className="text-4xl mb-3 text-white font-semibold w-[50%]">
        New Products
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mx-2"
            style={{ maxWidth: '90%', margin: '0 auto' }}
          >
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Image {index + 1}</h2>
              <p className="text-gray-600">This is a description of image {index + 1}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;

