import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../lib/AuthApi";
import { useSignUpMutation } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const VerifyMail = () => {
  const [otp, setOtp] = useState("");

  const userDetails = useSelector((state) => state.user);

  const [signUpUser] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(signUpUser, {...userDetails , otp}, navigate));
  }
  
  return (
    <>
      <MainWrapper>
        <div className="grid place-items-center my-8 h-[500px]">
          <div className="w-max h-max justify-center items-center m-auto flex flex-col gap-8">
            <p className="text-lg font-bold text-white md:text-3xl">
              Enter OTP received in your email ID
            </p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={
                <span className="text-white w-[20px] text-center">&#9135;</span>
              }
              renderInput={(props) => (
                <input
                  {...props}
                  style={{
                    color: "#000",
                    width: "40px",
                    textAlign: "center",
                    height: "40px",
                    outline: "none",
                  }}
                  className="max-[360px]:w-[20px] max-[360px]:h-[20px]"
                />
              )}
            />
            <form onSubmit={handleSignUp}>
              <button className="p-2 rounded-md outline-none font-semibold flex gap-2 items-center text-center bg-yellow-100">
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </MainWrapper>
    </>
  );
};

export default VerifyMail;
