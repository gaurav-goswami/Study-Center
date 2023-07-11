import React, {useState} from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import Heading from '../components/common/Heading'
import HighLightText from '../components/common/HighLightText'
import {useLoginMutation} from "../services/Auth";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../lib/AuthApi';
import { useDispatch } from 'react-redux';
import AuthForm from '../components/common/AuthForm';

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

            <AuthForm isSignUp={false} formDetails={loginDetails} setFormDetails={handleChange} handleSubmit={handleLogin}/>
          </div>
        </MainWrapper>
    </>
  )
}

export default Login
