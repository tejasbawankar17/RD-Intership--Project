import React from 'react'
import Footer from '../components/common/Footer'
import rectangle_1 from "../assets/Images/t16.jpg"
import image1 from "../assets/Images/b1.jpg";
import image2 from "../assets/Images/b2.jpg";
import image3 from "../assets/Images/b3.jpg";
import image4 from "../assets/Images/b4.jpg";
const images = [image1, image2, image3, image4];

const BackChokeFloodLight = () => {
  return (
      <div className="flex flex-col gap-10" >


  
    <div className="container mx-auto px-4 py-8 lg:flex lg:items-center lg:justify-center">
      {/* Product Image */}
      <div className="w-full lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
        <img src={rectangle_1} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      {/* Product Description */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Back Choke Flood Light</h2>
        <p className="text-gray-600 mb-4">
       
        A back choke flood light is a specialized type of outdoor lighting fixture designed for providing powerful, focused illumination across large areas such as stadiums, parking lots, and industrial facilities. Equipped with a back choke mechanism, these lights minimize electromagnetic interference and ensure stable, efficient performance, making them ideal for environments where reliability and precision are crucial.


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
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Driver Area Dimension</th>
        <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Pipe Size</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {[
        { feature: 'V-217', specs: ['15W/20W', '60 X 70', '58 X 45 X 30', '38mm'] },
        { feature: 'V-218', specs: ['30W/50W', '93 X 135', '80 X 70 X 30', '38mm'] },
        { feature: 'V-219', specs: ['50W/60W', '140 X 100', '96 X 75 X 40', '45mm'] },
        { feature: 'V-220', specs: ['72W/100W', '110 X 190', '100 X 80 X 40', '45mm'] },
        { feature: 'V-221', specs: ['100W/150W', '120 X 184', '120 X 85 X 48', '48mm'] },
        { feature: 'V-222', specs: ['150W/200W', '140 X 200', '135 X 85 X 50', '48mm'] },
        { feature: 'V-223', specs: ['250W/400W', '160 X 220', '160 X 90 X 50', '48mm'] },
        { feature: 'V-224', specs: ['500W/600W', '213 X 270', '210 X 120 X 55', '58mm'] },
        

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

export default BackChokeFloodLight