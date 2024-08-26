import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/logo.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For Customers", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblue-400">
      <div className="flex flex-col items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-full flex flex-col pb-5 border-richblack-700">
          <div className="flex flex-wrap justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-8">
            {/* Company Section */}
            <div className="w-[20%] flex flex-col gap-3 mb-7 lg:pl-0">
              <img src={Logo} alt="Logo" className="object-contain mb-3" />
              <h1 className="text-richblack-50 font-semibold text-[16px] mb-3">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={ele.toLowerCase()}>{ele}</Link>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 text-lg mt-3">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            {/* Resources Section */}
            <div className="w-[20%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px] mb-3">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Support
              </h1>
              <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to="/help-center">Help Center</Link>
              </div>
            </div>

            {/* Plans Section */}
            <div className="w-[20%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px] mb-3">
                Plans
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={ele.split(" ").join("-").toLowerCase()}>
                      {ele}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Links Section */}
            <div className="w-[20%] flex flex-wrap justify-between pl-3 lg:pl-5 gap-8">
              {FooterLink2.map((ele, i) => (
                <div key={i} className="w-full mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-[16px] mb-3">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => (
                      <div
                        key={index}
                        className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                      >
                        <Link to={link.link}>{link.title}</Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-full max-w-maxContent text-richblack-400 mx-auto pb-14 text-sm mt-8">
          {/* Footer Bottom Section */}
          <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
            <div className="flex flex-row gap-3">
              {BottomFooter.map((ele, i) => (
                <div
                  key={i}
                  className={`${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-3`}
                >
                  <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
                </div>
              ))}
            </div>
            <div className="text-center">
              Made with ❤️ CodeHelp © 2023 Studynotion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
