import React, { useState } from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Heading from "../components/common/Heading";
import HighLightText from "../components/common/HighLightText";
import Paragraph from "../components/common/Paragraph";
import { useSendOtpMutation } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import OtpBox from "../components/common/OtpInput";

const Signup = () => {
  const [isOtpScreen, setIsOtpScreen] = useState(false);

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
    userRole: "Student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const [sendOtp] = useSendOtpMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
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

          {isOtpScreen ? (
            <OtpBox />
          ) : (
            <form
              className="p-2 flex flex-col gap-8 items-center md:w-[500px] w-[90%]"
              onSubmit={handleSignUp}
            >
              <div className="flex gap-6 md:flex-row flex-col w-[100%] p-0.5">
                <input
                  name="firstName"
                  type="text"
                  className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
                  placeholder="Enter first name"
                  autoComplete="off"
                  value={signUpDetails.firstName}
                  onChange={handleChange}
                />

                <input
                  name="lastName"
                  type="text"
                  className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
                  placeholder="Enter last name"
                  autoComplete="off"
                  value={signUpDetails.lastName}
                  onChange={handleChange}
                />
              </div>

              <input
                type="email"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]"
                placeholder="Enter email address"
                autoComplete="off"
                value={signUpDetails.email}
                onChange={handleChange}
              />

              <div className="flex gap-6 md:flex-row flex-col w-[100%] p-0.5">
                <input
                  name="password"
                  type="password"
                  className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
                  placeholder="Create Password"
                  autoComplete="off"
                  value={signUpDetails.createPassword}
                  onChange={handleChange}
                />

                <input
                  name="confirmPassword"
                  type="password"
                  className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
                  placeholder="Confirm Password"
                  autoComplete="off"
                  value={signUpDetails.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="flex w-full justify-between items-center">
                <Paragraph
                  color="text-pure-greys-400"
                  styles="text-lg max-[540px]:hidden"
                >
                  My role is
                </Paragraph>

                <select
                  name=""
                  id=""
                  className="p-4 rounded-md bg-richblue-800 text-pure-greys-25 cursor-pointer w-[80%] max-[540px]:w-[100%]"
                  value={signUpDetails.userRole}
                  onChange={handleChange}
                >
                  <option value="Student">Student</option>
                  <option value="Instructor">Instructor</option>
                </select>
              </div>

              <button
                type="submit"
                className="p-2 rounded-md outline-none font-semibold w-full bg-yellow-100"
                onClick={() => setIsOtpScreen(true)}
              >
                Create Account
              </button>
            </form>
          )}
        </div>
      </MainWrapper>
    </>
  );
};

export default Signup;
