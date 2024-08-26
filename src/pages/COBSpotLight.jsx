import React from 'react';
import Footer from '../components/common/Footer';
import rectangle_1 from "../assets/Images/t15.jpg";
import image1 from "../assets/Images/c1.jpg";
import image2 from "../assets/Images/c2.jpg";
import image3 from "../assets/Images/c3.jpg";
import image4 from "../assets/Images/c4.jpg";

const images = [image1, image2, image3, image4];

const COBSpotLight = () => {
  return (
    <div className="flex flex-col gap-10 mx-4 lg:mx-8"> {/* Added margin to the container */}
      <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:justify-center">
        {/* Product Image */}
        <div className="w-full lg:w-1/3 lg:pr-8 mb-4 lg:mb-0">
          <img src={rectangle_1} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        {/* Product Description */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">COB Spot Light</h2>
          <p className="text-gray-600 mb-4 text-justify">
            LED panel lights are highly efficient and durable lighting solutions that provide consistent, glare-free illumination, perfect for enhancing the ambiance in both residential and commercial environments. With their sleek, ultra-thin design, they offer versatile installation options such as recessed, surface-mounted, or suspended, seamlessly integrating into modern interiors while reducing energy consumption and maintenance costs.
          </p>
          <div className="flex items-center">
            <span className="text-gray-700 font-semibold mr-2">Price:</span>
            <span className="text-gray-700">$99.99</span>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="text-gray-900 text-4xl font-bold ml-8 mb-4">
          Specifications:
        </div>
        <div className="overflow-x-auto mx-4 sm:mx-6 lg:mx-8">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-richblue-400 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Feature</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Wattage</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Design</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Outer Size(mm)</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Cut Out Size(mm)</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Height(mm)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { feature: 'V-122', specs: ['4 W', 'Round/Square', '68 X 68', '58 X 58', '35'] },
                { feature: 'V-123', specs: ['7 W', 'Round/Square', '88 X 88', '70 X 70', '40'] },
                { feature: 'V-124', specs: ['12/15 W', 'Round/Square', '105 X 105', '85 X 85', '55'] },
              ].map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                  {row.specs.map((spec, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mt-4 bg-richblue-400 mx-auto p-4">
        <div className="text-4xl mb-3 text-white font-semibold w-[50%]">
          Applications of LED
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              style={{ maxWidth: '90%', margin: '0 auto' }}
            >
              <img src={src} alt={`Image ${index + 1}`} className="w-full h-56 object-cover" /> {/* Ensuring the same size */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900">Image {index + 1}</h2>
                <p className="text-gray-700">This is a description of image {index + 1}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default COBSpotLight;
