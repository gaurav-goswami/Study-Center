import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../../lib/SettingsApi";
import { useChangePasswordMutation } from "../../../services/Settings";

const UpdatePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const [changeUserPassword] = useChangePasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    changePassword(changeUserPassword, passwordData, navigate, setLoading);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richbl-700 bg-richblue-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">Password</h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="oldPassword" className="text-pure-greys-200">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                name="currentPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-700 placeholder:text-pure-greys-400 w-[100%]"
                value={passwordData.currentPassword}
                onChange={(e) => handleChange(e)}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-[50px] z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="relative flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="newPassword" className="text-pure-greys-200">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-700 placeholder:text-pure-greys-400 w-[100%]"
                value={passwordData.newPassword}
                onChange={(e) => handleChange(e)}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-[50px] z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
          </div>
          
          <div className="flex justify-start gap-2">
            <button
              className="p-2 rounded-md outline-none font-semibold bg-yellow-100 flex gap-2 items-center text-center"
              onClick={handleSubmit}
              type="submit"
              disabled={loading}
            >
              Update Password
            </button>
            <button
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
              onClick={() => {
                navigate("/dashboard/my-profile");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdatePassword;
