import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../lib/AuthApi";

const UserDropDown = ({ open }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <>
      <div
        className={`transition-all duration-200 ease-linear absolute top-[100%] right-0  mt-5 bg-richblue-900 p-2 rounded-md w-[200px] flex flex-col gap-2 max-[380px]:w-[150px] max-[380px]:mt-3 max-[470px]:mt-3  ${
          open ? "h-[110px]" : "h-0 opacity-0 py-0"
        }`}
      >
        <Link
          to="/dashboard/my-profile"
          className={`p-2 text-white transition-all duration-100 ease-linear hover:bg-richblue-600 rounded-md ${
            open ? "" : "hidden h-0"
          }`}
        >
          <p>Dashboard</p>
        </Link>

        <button className={`p-2 text-white text-left transition-all duration-100 ease-linear hover:bg-richblue-600 rounded-md ${
          open ? "" : "hidden h-0"
        }`} onClick={handleLogout}  >Logout</button>


      </div>
    </>
  );
};

export default UserDropDown;
