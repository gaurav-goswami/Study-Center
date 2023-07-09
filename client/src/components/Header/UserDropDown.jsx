import React from 'react'
import { Link } from 'react-router-dom'

const UserDropDown = ({open}) => {
  return (
    <>
    <div className={`transition-all duration-200 ease-linear absolute top-[100%] right-0 py-2  mt-5 bg-richblue-900 p-2 rounded-md w-[200px] flex flex-col gap-2 max-[380px]:w-[150px] max-[380px]:mt-3 max-[470px]:mt-3  ${open ? 'h-[110px]' : 'h-0 opacity-0'}`}>
    {
        [{item : "Dashboard" , "path" : "/dashboard"} , {item : "Logout" , path : "/"}].map((item, index) => {
            return <Link to = {item.path} className='p-2 text-white transition-all duration-100 ease-linear hover:bg-richblue-600 rounded-md' key = {index}>
                <p>{item.item}</p>
            </Link>
        })
    }
    </div>
    </>
  )
}

export default UserDropDown
