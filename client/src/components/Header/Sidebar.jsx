import React from 'react'
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai";
import {BiUserCircle} from "react-icons/bi";
import { IoSettings } from 'react-icons/io5';
import { PiStudentBold } from 'react-icons/pi';
import { Link, matchPath, useLocation } from 'react-router-dom';

const Sidebar = () => {

    const sidebarLinks = [
        {
            name : "Home",
            icon : <AiOutlineHome className='text-pure-greys-5 text-2xl'/>,
            path : "/"
        },
        {
            name : "My Profile",
            icon : <BiUserCircle className='text-2xl font-extralight'/>,
            path : "/dashboard/my-profile"
        },
        {
            name : "Enrolled Courses",
            icon : <PiStudentBold className='text-pure-greys-5 text-2xl'/>,
            path : "/dashboard/enrolled-courses"
        },
        {
            name : "Cart",
            icon : <AiOutlineShoppingCart className='text-pure-greys-5 text-2xl'/>,
            path : "/dashboard/cart"
        },
        {
            name : "Settings",
            icon : <IoSettings className='text-pure-greys-5 text-2xl'/>,
            path : "/dashboard/settings"
        }
    ]

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path : route} , location.pathname);
    }
  return (
    <>
        <aside className='py-2 bg-richblack-800 md:w-[25%] lg:w-[220px]'>
            <div className='flex flex-col gap-4 items-center mt-8'>
            {   
                sidebarLinks.map((item, index) => {
                    return <Link key = {index} to={item.path} className={`flex w-[100%] items-center gap-2 px-8 py-2 transition-all duration-200 ${matchRoute(item.path) ? "text-yellow-50 bg-yellow-800" : "text-pure-greys-200"}`}>
                        {item.icon}
                        {item.name}
                    </Link>
                })
            }
            </div>
        </aside>
    </>
  )
}

export default Sidebar
