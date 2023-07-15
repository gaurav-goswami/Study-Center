import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainWrapper from "../components/Wrapper/MainWrapper";
import Heading from "../components/common/Heading";
import Paragraph from "../components/common/Paragraph";
import { useLocation } from "react-router-dom";
import { changePassword } from "../lib/PasswordApi";
import { useResetPasswordMutation } from "../services/Password";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UpdatePassword = () => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword , setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { loading } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  const [resetPass] = useResetPasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    const resetPasswordDetails = {
        newPassword : password.password,
        confirmNewPassword : password.confirmPassword,
        resetPasswordToken : token
    }
    dispatch(changePassword(resetPasswordDetails , resetPass));
  };

  return (
    <>
      <MainWrapper>
        <div className="w-[90%] md:w-[70%] flex flex-col items-center p-5 mx-auto h-screen justify-center">
          {loading ? (
            <span className="loader"></span>
          ) : (
            <div className="sm:w-[90%] md:w-[400px] p-4 flex flex-col gap-3 rounded-md bg-blue-800">
              <Heading style="text-xl md:text-2xl font-semibold">
                Choose New Password
              </Heading>
              <Paragraph color="text-pure-greys-300">
                Almost there. Create a new Password
              </Paragraph>

              <form onSubmit={handleSubmit}>

                <label className="flex flex-col gap-2 text-pure-greys-25 my-4">
                  Enter New Password
                  <div className="flex items-center bg-richblue-800 rounded-md px-1">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="New Password"
                      className="outline-none px-2 py-3 rounded-md text-pure-greys-25 placeholder:text-pure-greys-400 w-[95%] bg-transparent"
                      value={password.password}
                      onChange={(e) => handleChange(e)}
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <AiFillEyeInvisible className="text-xl cursor-pointer"/> :  <AiFillEye className="text-xl cursor-pointer"/>
                        }
                    </span>
                  </div>
                </label>

                <label className="flex flex-col gap-2 text-pure-greys-25 my-4">
                Confirm New Password
                  <div className="flex items-center bg-richblue-800 rounded-md px-1">
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="New Password"
                      className="outline-none px-2 py-3 rounded-md text-pure-greys-25 placeholder:text-pure-greys-400 w-[95%] bg-transparent"
                      value={password.confirmPassword}
                      onChange={(e) => handleChange(e)}
                    />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {
                            showConfirmPassword ?<AiFillEyeInvisible className="text-xl cursor-pointer"/> : <AiFillEye className="text-xl cursor-pointer"/>
                        }
                    </span>
                  </div>
                </label>

                <button
                  type="submit"
                  className="p-2 rounded-md outline-none font-semibold flex gap-2 bg-yellow-200 w-full justify-center"
                >
                  Reset Password
                </button>
              </form>
            </div>
          )}
        </div>
      </MainWrapper>
    </>
  );
};

export default UpdatePassword;
