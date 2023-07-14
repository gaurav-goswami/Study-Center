import React, { useState } from 'react';
import MainWrapper from "../../components/Wrapper/MainWrapper";
import { useDispatch, useSelector } from 'react-redux';
import Heading from "../../components/common/Heading";
import Paragraph from "../../components/common/Paragraph";
import {resetPasswordToken} from "../../lib/PasswordApi";
import { useSendResetPasswordTokenMutation } from '../../services/Password';
import "./Loader.css";
import { Link } from 'react-router-dom';
import {BsArrowLeftShort} from "react-icons/bs";

const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);
    let {loading} = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const [sendResetToken] = useSendResetPasswordTokenMutation();

    const sendResetPasswordToken = (e) => {
        e.preventDefault();
        console.log("email is " , email);
        dispatch(resetPasswordToken(email, sendResetToken , setEmailSent));
    }

  return (
    <>
        <MainWrapper>
            <div className='w-[90%] md:w-[70%] flex flex-col items-center p-5 mx-auto h-screen justify-center'>
                
                {
                    loading ? (
                        <span className="loader"></span>
                    )
                    :
                    (
                        <div className='sm:w-[90%] md:w-[400px] p-4 flex flex-col gap-6 rounded-md bg-blue-800'>
                            <Heading style="text-xl md:text-3xl text-pure-greys-25 font-semibold">
                                {
                                    emailSent ? "Check Your Email" : "Reset Your Password"
                                }
                            </Heading>
                            <Paragraph color="text-pure-greys-100">
                                {
                                    emailSent ? `We have sent you an email to reset your password to ${email}`
                                    :
                                    "Forgot your password? Or want to change it due to security reasons? Don't worry. Just enter your email Id below."
                                }
                            </Paragraph>

                            {
                                !emailSent && (
                                    <form onSubmit={sendResetPasswordToken}>
                                        <label className='flex flex-col gap-2 text-pure-greys-200'>
                                        Enter Email
                                        <input type="email" placeholder='Enter Email Id' className="outline-none px-2 py-3 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        </label>
                                    </form>
                                )
                            }
                            
                            {
                                !emailSent ? 
                                <button className="bg-yellow-200 p-2 rounded-md outline-none font-semibold" onClick={sendResetPasswordToken}>Reset Password</button>

                                :

                                <button className="bg-yellow-200 p-2 rounded-md outline-none font-semibold" onClick={sendResetPasswordToken}>Resend Email</button>
                            }
                        </div>
                    )
                } 
            </div>
        </MainWrapper>
    </>
  )
}

export default ResetPassword
