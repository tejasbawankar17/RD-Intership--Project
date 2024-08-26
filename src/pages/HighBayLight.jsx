import React from 'react'
import Footer from '../components/common/Footer'
import rectangle_1 from "../assets/Images/t17.jpg"
import image1 from "../assets/Images/h1.jpg";
import image2 from "../assets/Images/h2.jpg";
import image3 from "../assets/Images/h3.jpg";
import image4 from "../assets/Images/h4.jpg";
const images = [image1, image2, image3, image4];

const HighBayLight = () => {
  return (
      <div className="flex flex-col gap-10" >


  
    <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:justify-center">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
        <img src={rectangle_1} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      {/* Product Description */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">High Bay Light</h2>
        <p className="text-gray-600 mb-4">
       
        A high bay light is a robust lighting fixture designed specifically for illuminating large indoor spaces with high ceilings, typically ranging from 15 to 50 feet. These lights are commonly used in industrial settings, warehouses, gymnasiums, and large retail stores, providing bright and uniform light distribution to enhance visibility and safety. High bay lights often feature energy-efficient technologies, such as LED, to reduce energy consumption and maintenance costs while delivering powerful illumination.








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
              <div className="text-white text-4xl font-bold ml-8 mb-4">
                  Specifications:
              </div>

              
    <div className="overflow-x-auto mx-4 sm:mx-6 lg:mx-8">
  <table className="table-auto min-w-full divide-y divide-gray-200">
    <thead className="bg-richblue-400 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Feature</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Wattage</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">PCB Size(mm)</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Fixture Size</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Driver Area Dimension</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {[
        { feature: 'V-244', specs: ['30/50W', '133 X 133', '185 X 50', '110 X 70 X 40'] },
        { feature: 'V-245', specs: ['50/72/100W', '175 X 175', '230 X 60', '150 X 90 X 45'] },
        { feature: 'V-246', specs: ['100/150/200W', '250 X 250', '320 X 70', '220 X 110 X 45'] },
        { feature: 'V-247', specs: ['100/120/150W', '175 X 175', '290 X 290 X 100', '150 X 150 X 30'] },
        { feature: 'V-248', specs: ['200/250/300W', '250 X 250', '370 X 85', '225 X 150 X 58'] },
       

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
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900">Image {index + 1}</h2>
              <p className="text-gray-700">This is a description of image {index + 1}.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  

          <div>
              <Footer />
          </div>

          
    </div>
  )
}

export default HighBayLight