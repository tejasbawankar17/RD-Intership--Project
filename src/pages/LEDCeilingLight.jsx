import React from 'react'
import Footer from '../components/common/Footer'
import rectangle_1 from "../assets/Images/t21.jpg"
import image1 from "../assets/Images/t1.jpg";
import image2 from "../assets/Images/t2.jpg";
import image3 from "../assets/Images/t3.jpg";
// import image4 from "../assets/Images/t4.jpg";
const images = [image1, image2, image3];

const LEDCeilingLight = () => {
  return (
      <div className="flex flex-col gap-10" >


  
    <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:justify-center">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
        <img src={rectangle_1} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      {/* Product Description */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LED Ceiling Light</h2>
        <p className="text-gray-600 mb-4">
       
        An LED ceiling light is a modern lighting fixture designed to be mounted on the ceiling, providing bright and efficient illumination for a wide range of indoor spaces. These lights use light-emitting diodes (LEDs) to offer energy-efficient, long-lasting lighting solutions, making them ideal for residential, commercial, and institutional environments. LED ceiling lights come in various designs, including flush mount, semi-flush mount, and recessed styles, to complement different decor styles and provide effective lighting for living rooms, kitchens, offices, and hallways.




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
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Colour</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Outer Size</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">PCB Dimensions</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Height X Length X Width(mm)</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {[
        { feature: 'V-270', specs: ['10W', 'White/Black', '6','150','55 X 150 X 175'] },
        { feature: 'V-271', specs: ['15W', 'White/Black', '8','180','55 X 200 X 200'] },

        

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

export default LEDCeilingLight