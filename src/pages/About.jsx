import React from "react"

import FoundingStory from "../assets/Images/t5.webp"
import BannerImage1 from "../assets/Images/t2.jpg"
import BannerImage2 from "../assets/Images/t3.jpg"
import BannerImage3 from "../assets/Images/t4.jpg"
import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"

const About = () => {
  return (
    <div>
      <section className="bg-richblue-400">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eligendi reiciendis maxime aliquam error earum ea tempora eius nemo fugiat veritatis numquam quo, repellat facere voluptatem modi doloribus molestiae facilis? Quo, ut accusantium.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quisquam atque provident laudantium cupiditate magni ullam, at corporis tempora numquam, est soluta nesciunt tenetur inventore ad amet culpa, voluptate aspernatur velit blanditiis! Repudiandae porro nam et numquam, aspernatur tempora amet dicta voluptate.
              </p>
              <p className="text-base font-medium text-white
               lg:w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam, reprehenderit exercitationem consequatur molestias, praesentium nam, tempora nostrum ratione mollitia dignissimos aliquid fugiat doloribus deserunt nemo inventore accusantium. Suscipit maiores ullam blanditiis excepturi nostrum distinctio minima voluptate, dolorum eius magni, facere fugiat.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quaerat minima labore esse deserunt placeat dicta odit! Fuga nesciunt veritatis quae inventore pariatur dolorum, aliquid repellendus maxime, voluptatum impedit laborum doloribus quo odio facere architecto asperiores accusantium voluptate dicta quibusdam odit ex.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-white lg:w-[95%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam in at similique deleniti magnam dicta eveniet recusandae nesciunt, quaerat nemo totam exercitationem corporis. Ipsum voluptatibus, adipisci temporibus unde sapiente iure nobis expedita mollitia consequuntur magnam impedit harum, tempora blanditiis tenetur. Recusandae!
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblue-400 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other Customers
        </h1>
         <ReviewSlider /> 
      </div>
      <Footer />
    </div>
  )
}

export default About