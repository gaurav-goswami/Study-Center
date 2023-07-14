import React, { useState } from 'react';
import MainWrapper from "../components/Wrapper/MainWrapper";
import { useSelector } from 'react-redux';
import Heading from "../components/common/Heading";
import Paragraph from "../components/common/Paragraph";
import Button from '../components/common/Button';

const ResetPassword = () => {

    const [email, setEmail] = useState("example@gmail.com");
    const [emailSent, setEmailSent] = useState(true);
    let {loading} = useSelector((state) => state.auth);

    

  return (
    <>
        <MainWrapper>
            <div className='w-[80%] md:w-[70%] flex items-center p-5 mx-auto h-screen justify-center'>
                
                {
                    loading ? (
                        <p>Loading...</p>
                    )
                    :
                    (
                        <div className='w-[90%] md:w-[50%] p-4 flex flex-col gap-6'>
                            <Heading style="text-xl md:text-3xl text-pure-greys-25 font-semibold">
                                {
                                    emailSent ? "Check Your Email" : "Reset Your Password"
                                }
                            </Heading>
                            <Paragraph>
                                {
                                    emailSent ? `We have sent you an email to reset your password to ${email}`
                                    :
                                    "Forgot your password? Or want to change it due to security reasons? Don't worry. Just enter your email Id below."
                                }
                            </Paragraph>

                            {
                                !emailSent && (
                                    <form>
                                        <label className='flex flex-col gap-2 text-pure-greys-50'>
                                        Enter Email
                                        <input type="email" placeholder='Enter Email Id' className="outline-none px-2 py-3 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"/>
                                        </label>
                                    </form>
                                )
                            }
                            
                            {
                                !emailSent ? 
                                <Button styles="bg-yellow-200">Reset Password</Button>

                                :

                                <Button styles="bg-yellow-200">Resend Email</Button>
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
