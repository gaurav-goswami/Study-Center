import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import Heading from '../components/common/Heading'
import HighLightText from '../components/common/HighLightText'

const Login = () => {
  return (
    <>
        <MainWrapper>
          <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-6 my-16 items-center'>
            <Heading style="text-3xl md:text-5xl xl:text-6xl text-center font-extrabold">Welcome Back Learner so <HighLightText color="text-yellow-200">what's your plan for today ?👋</HighLightText></Heading>

            <form className='p-2 flex flex-col gap-6 items-center md:w-[500px] w-[90%]'>
                <input type="email" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]' placeholder='Enter email address' autoComplete='off'/>

                <input name= "password" type="password" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]' placeholder='Create Password' autoComplete='off'/>

                <button type="submit" className='p-2 rounded-md outline-none font-semibold w-full bg-yellow-100'>Login</button>

            </form>
          </div>
        </MainWrapper>
    </>
  )
}

export default Login
