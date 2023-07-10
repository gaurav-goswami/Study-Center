import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import Heading from '../components/common/Heading'
import HighLightText from '../components/common/HighLightText'
import Paragraph from "../components/common/Paragraph"

const Signup = () => {
  return (
    <>
        <MainWrapper>
            <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-6 my-16 items-center'>
                <Heading style="text-3xl md:text-5xl xl:text-6xl text-center font-extrabold">Join the community and <HighLightText color="text-yellow-200">start your Journey</HighLightText></Heading>

                <form className='p-2 flex flex-col gap-8 items-center md:w-[500px] w-[90%]'>
                    <div className='flex gap-6 md:flex-row flex-col w-[100%] p-0.5'>

                        <input name= "firstName" type="text" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]' placeholder='Enter first name' autoComplete='off'/>

                        <input name= "lastName" type="text" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]' placeholder='Enter last name' autoComplete='off'/>
                    </div>

                    <input type="email" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]' placeholder='Enter email address' autoComplete='off'/>

                    <div className='flex gap-6 md:flex-row flex-col w-[100%] p-0.5'>

                        <input name= "password" type="password" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]' placeholder='Create Password' autoComplete='off'/>

                        <input name= "confirmPassword" type="password" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]' placeholder='Confirm Password' autoComplete='off'/>
                    </div>

                    <div className='flex w-full justify-between items-center'>
                        <Paragraph color="text-pure-greys-400" styles="text-lg">My role is</Paragraph>

                        <select name="" id="" className='p-2 bg-richblue-800 text-pure-greys-25 cursor-pointer w-[80%]'>
                            <option value="Student">Student</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </div>

                    <button type="submit" className='p-2 rounded-md outline-none font-semibold w-full bg-yellow-100'>Create Account</button>

                </form>
            </div>
        </MainWrapper>
    </>
  )
}

export default Signup
