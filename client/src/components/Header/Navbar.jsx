import React, { useState } from 'react'
import HighLightText from "../common/HighLightText"
import { Link, matchPath, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../common/Button'
import {BiMenu} from "react-icons/bi"
import {IoMdClose} from "react-icons/io"
import UserDropDown from './UserDropDown'

const Navbar = () => {

    const navLinks = [
        { item : "Home", path : "/" },
        { item : "About", path : "/about" },
        { item : "Contact", path : "/contact" },
        {item : "Courses" , path : "/courses"}
    ]

    const authRedirect = [
        {item : "Login" , path : "/auth/login"},
        {item : "Signup" , path : "/auth/signup"}
    ]

    let {token} = useSelector((state) => state.auth);

    const [isOpen , setIsOpen] = useState(false);
    const [isDropdownOpen , setIsDropdownOpen] = useState(false);

    const location = useLocation();
    const matchRoute = (route) => {
        return matchPath({path : route} , location.pathname);
    }

    const {userDetails} = useSelector((state) => state.auth);

  return (
    <>
        <nav className='w-full md:px-0 bg-richblue-900 flex gap-4 items-center md:justify-around relative justify-between px-2'>
            
            <div className='p-1'>
                <Link to = "/">
                    <HighLightText color="text-yellow-25" size="text-2xl font-bold">Study Center</HighLightText>
                </Link>
            </div>

            <div className={`flex items-center gap-16 justify-between max-[768px]:absolute max-[768px]:bg-richblue-900 max-[768px]:left-0 max-[768px]:right-0 max-[768px]:top-[100%] z-10 p-2 transition-all duration-150 ease-linear ${isOpen ? 'max-[768px]:h-[80px]' : 'max-[768px]:h-0 max-[768px]:opacity-0'} max-[468px]:flex-col max-[468px]:h-fit max-[468px]:gap-4`}>

                <ul className='flex gap-4 text-pure-greys-100 font-semibold'>
                    {
                        navLinks.map((item , index) => {
                            return <Link to = {item.path} key = {index} className={`${matchRoute(item.path) ? "text-yellow-50" : ""}`}>
                                <li>{item.item}</li>
                            </Link>
                        })
                    }
                </ul>
                
                {
                    (!token || token === null) ?
                    
                    <div className='flex gap-3'>
                        {
                            authRedirect.map((item , index) => {
                                return <Button styles="bg-pure-greys-700 text-white transition-all duration-150 ease-in hover:bg-yellow-100 hover:text-black">
                                    <Link to = {item.path} key={index}>{item.item}</Link>
                                </Button>
                            })
                        }
                    </div>

                    : 
                    
                    <div className='w-[35px] h-[35px] rounded-full cursor-pointer overflow-none relative' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <img src={userDetails?.profile} alt="" className='w-full h-full rounded-full object-cover object-center'/>

                        <UserDropDown open={isDropdownOpen}/>
                    </div>  
                }
            </div>

            <div className='md:hidden'>
                {
                    isOpen ? <IoMdClose className='text-2xl text-white cursor-pointer' onClick={() => setIsOpen(false)}/> : <BiMenu className='text-2xl cursor-pointer text-white' onClick={() => setIsOpen(true)}/>
                }
                
            </div>

        </nav>
    </>
  )
}

export default Navbar
