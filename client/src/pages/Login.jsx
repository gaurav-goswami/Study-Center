import React, {useState} from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import Heading from '../components/common/Heading'
import HighLightText from '../components/common/HighLightText'
import {useLoginMutation} from "../services/Auth";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/AuthApi';
import { useDispatch } from 'react-redux';

const Login = () => {

  const [loginDetails , setLoginDetails] = useState({
    email : "",
    password : ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginDetails({...loginDetails , [name] : value});
  }

  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginUser(login, loginDetails, navigate));
  }

  return (
    <>
        <MainWrapper>
          <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-6 my-16 items-center'>
            <Heading style="text-3xl md:text-5xl xl:text-6xl text-center font-extrabold">Welcome Back Master so <HighLightText color="text-yellow-200">what's your plan for today ?👋</HighLightText></Heading>

            <form className='p-2 flex flex-col gap-6 items-center md:w-[500px] w-[90%]' onSubmit={handleLogin}>
                <input  name='email' value={loginDetails.email} type="email" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]' placeholder='Enter email address' autoComplete='off' onChange = {(e) => handleChange(e)}/>

                <input name="password" value={loginDetails.password} type="password" className='outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]' placeholder='Enter Password' autoComplete='off' onChange = {(e) => handleChange(e)}/>

                <button type="submit" className='p-2 rounded-md outline-none font-semibold w-full bg-yellow-100'>Login</button>

            </form>
          </div>
        </MainWrapper>
    </>
  )
}

export default Login
