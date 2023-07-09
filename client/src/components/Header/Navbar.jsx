import React, { useState } from 'react'
import HighLightText from "../common/HighLightText"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../common/Button'
import {BiMenu} from "react-icons/bi"
import {IoMdClose} from "react-icons/io"

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
    token = true;

    const [isOpen , setIsOpen] = useState(false);

  return (
    <>
        <nav className='w-full py-1 md:px-0 bg-richblue-900 flex gap-4 items-center md:justify-around relative justify-between px-2'>
            
            <div className='p-1'>
                <Link to = "/">
                    <HighLightText color="text-yellow-25" size="text-2xl font-bold">Study Center</HighLightText>
                </Link>
            </div>

            <div className={`flex items-center gap-16 justify-between max-[768px]:absolute max-[768px]:bg-richblue-900 max-[768px]:left-0 max-[768px]:right-0 max-[768px]:top-[100%] z-10 p-2 transition-all duration-150 ease-linear ${isOpen ? 'max-[768px]:h-[80px]' : 'max-[768px]:h-0 max-[768px]:opacity-0'} max-[468px]:flex-col max-[468px]:h-fit max-[468px]:gap-4`}>

                <ul className='flex gap-4 text-pure-greys-100 font-semibold'>
                    {
                        navLinks.map((item , index) => {
                            return <Link to = {item.path} key = {index} className='hover:text-yellow-50'>
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
                    
                    <div className='w-[35px] h-[35px] rounded-full cursor-pointer overflow-none relative'>
                        <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=1060&t=st=1688894214~exp=1688894814~hmac=d54961ae1c9fb6262cf4af35d6ea6e7204225457a2b78fc461706b16b00d91fc" alt="" className='w-full h-full rounded-full object-cover object-center'/>

                        <div className='absolute top-[100%] -left-[100%] mt-5 bg-richblue-900 p-2 rounded-md w-[250px] flex flex-col gap-2'>
                            {
                                [{item : "Dashboard" , "path" : "/dashboard"} , {item : "Logout" , path : "/"}].map((item, index) => {
                                    return <div className='p-2 text-white transition-all duration-100 ease-linear hover:bg-richblue-600 rounded-md' key = {index}>
                                        <p>{item.item}</p>
                                    </div>
                                })
                            }
                        </div>
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
