import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Heading from "../components/common/Heading";
import HighLightText from "../components/common/HighLightText";
import { useSendOtpMutation } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthForm from "../components/common/AuthForm";
import { sendOTP } from "../lib/AuthApi";
import { toast } from "react-hot-toast";
import { setUserDetails } from "../app/features/userDetails";

const Signup = () => {
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    userRole: "Student",
    otp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const [sendOtp] = useSendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setOtpPage = (e) => {
    e.preventDefault();
    if(signUpDetails.createPassword !== signUpDetails.confirmPassword) return toast.error("Password field must be same")
    dispatch(setUserDetails({firstName : signUpDetails.firstName, lastName : signUpDetails.lastName, email : signUpDetails.email, password : signUpDetails.createPassword, confirmPassword : signUpDetails.confirmPassword, accountType : signUpDetails.userRole}))
    dispatch(sendOTP(sendOtp, {email : signUpDetails.email}, navigate));

  };

  return (
    <>
      <MainWrapper>
        <div className="w-[90%] md:w-[80%] xl:w-[70%] mx-auto flex flex-col gap-6 my-16 items-center">
          <Heading style="text-3xl md:text-5xl xl:text-6xl text-center font-extrabold">
            Join the community and{" "}
            <HighLightText color="text-yellow-200">
              start your Journey
            </HighLightText>
          </Heading>

          <AuthForm
            isSignUp={true}
            formDetails={signUpDetails}
            setFormDetails={handleChange}
            setOtpPage={setOtpPage}
          />
        </div>
      </MainWrapper>
    </>
  );
};

export default Signup;
