import React, { useState } from 'react'
import logo from "../../assets/Logo/logo.png"
import { Link, matchPath } from 'react-router-dom'
import { NavbarLinks } from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { IoIosArrowDropdownCircle } from "react-icons/io"

const subLinks = [
    { title: "LED Panel Light", link: "/LEDPanelLight" },
    { title: "COB Spot Light", link: "/COBSpotLight" },
    { title: "Back Choke Flood Light", link: "/BACkChokeFloodLight" },
    { title: "High Bay Light", link: "/HighBayLight" },
    { title: "LED Tube light", link: "/LEDTubeLight" },
    { title: "LED Track Light", link: "/LEDTrackLight" },
    { title: "LED Linear Light", link: "/LEDLinearLight" },
    { title: "LED Ceiling Light", link: "/LEDCeilingLight" },
    { title: "LED Bulkhead Light", link: "/LEDBulkheadLight" },
];

const Navbar = () => {
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItems } = useSelector((state) => state.cart)
    const location = useLocation();

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblue-400'>
            <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
                {/* Image */}
                <Link to="/">
                    <img src={logo} width={160} height={42} loading='lazy' alt="Logo"/>
                </Link>

                {/* Nav Links */}
                <nav>
                    <ul className='flex gap-x-6 text-richblack-25'>
                        {
                            NavbarLinks.map((link, index) => (
                                <li key={index}>
                                    {
                                        link.title === "Products" ? (
                                            <div className='relative flex items-center gap-2 cursor-pointer' onClick={toggleDropdown}>
                                                <p>{link.title}</p>
                                                <IoIosArrowDropdownCircle />
                                                <div className={`absolute left-1/2 top-full mt-2 flex flex-col rounded-md bg-richblack-5 text-richblack-900 transition-all duration-200 lg:w-[300px] ${isDropdownVisible ? 'visible opacity-100' : 'invisible opacity-0'}`} style={{ zIndex: 9999 }}>
                                                    <div className='absolute left-10 top-0 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 rotate-45 bg-richblack-5'></div>
                                                    {
                                                        subLinks.length ? (
                                                            subLinks.map((subLink, index) => (
                                                                <Link to={subLink.link} key={index}>
                                                                    <p className='py-2 px-4'>{subLink.title}</p>
                                                                </Link>
                                                            ))
                                                        ) : (<div>No sublinks available</div>)
                                                    }
                                                </div>
                                            </div>
                                        ) : (
                                            <Link to={link.path}>
                                                <p className={`${matchRoute(link.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                                    {link.title}
                                                </p>
                                            </Link>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* Login/SignUp/Dashboard */}
                <div className='flex gap-x-4 items-center'>
                    {
                        user && user?.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart />
                                {
                                    totalItems > 0 && (
                                        <span className='absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs px-1.5 py-0.5'>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <>
                                <Link to="/login">
                                    <button className='border border-richblack-700 bg-richblue-600 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                        Log in
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className='border border-richblack-700 bg-richblue-600 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )
                    }
                    {
                        token !== null && <ProfileDropDown />
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
