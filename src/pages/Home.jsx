import React from 'react'

import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ImageCardGrid from "../components/core/HomePage/ImageCardGrid"
import ReviewSlider from "../components/common/ReviewSlider"
import NewCardGrid from "../components/core/HomePage/NewCardGrid"
import Hero from "../components/core/HomePage/Hero"


const Home = () => {
    const data = {
        hero: {
            appType: '',
            tagLine: 'Welcome to RD Lightcrafters India',
            description: 'Illuminate your spaces with finest lighting solutions from RD Lightcrafters India',
            mainActionText: 'Light',
            extraActionText: 'Dark',
        },
    }
  return (
      <div>
          <div>
               <Hero 
          appType={data.hero.appType}
          tagLine={data.hero.tagLine}
          description={data.hero.description}
          mainActionText={data.hero.mainActionText}
          extraActionText={data.hero.extraActionText}
        />
          </div>
          {/*Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblue-400 text-white'>

            <InstructorSection />

            <h2 className='text-center text-4xl font-semobold mt-10'>Reviews</h2>
              {/* Review Slider here */}
              <ReviewSlider />
            
      </div>

          
          <div className="mt-20">          <ImageCardGrid />
          </div>
          <div className="mt-20">
              <NewCardGrid />
          </div>

     


          {/*Footer */}
          <div className="mt-20">       <Footer />
</div>

    </div>
  )
}

export default Home
