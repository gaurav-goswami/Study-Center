import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../../services/Settings";
import { updateProfile } from "../../../lib/SettingsApi";
import { useState } from "react";

const EditProfile = () => {
  const genders = [
    "Male",
    "Female",
  ];

  const navigate = useNavigate();

  const {userDetails} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [updateProfileFunc] = useUpdateProfileMutation();

  const [profileDetails , setProfileDetails] = useState({
    firstName : userDetails?.firstName || "",
    lastName : userDetails?.lastName || "",
    dateOfBirth : userDetails?.dateOfBirth || "",
    gender : userDetails?.gender || "",
    contactNumber : userDetails?.contactNumber || "",
    about : userDetails?.about || ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setProfileDetails({...profileDetails , [name] : value});
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(updateProfile(updateProfileFunc, profileDetails ,navigate));
  }

  return (
    <>
      <form onSubmit={handleUpdateProfile}>
        {/* Profile Information */}
        <div className="my-5 flex flex-col gap-y-6 rounded-md bg-richblack-800 p-8 px-12">
          <h2 className="text-lg font-semibold text-richblack-5">
            Profile Information
          </h2>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="firstName" className="text-pure-greys-50">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblack-700 placeholder:text-pure-greys-400 w-full"
                value={profileDetails.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="lastName" className="text-pure-greys-50">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblack-700 placeholder:text-pure-greys-400 w-full"
                value={profileDetails.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="dateOfBirth" className="text-pure-greys-50">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblack-700 placeholder:text-pure-greys-400 w-full"
                value={profileDetails.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="gender" className="text-pure-greys-50">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="p-4 rounded-md bg-richblack-700 text-pure-greys-25 cursor-pointer w-full"
                value={profileDetails.gender}
                onChange={handleChange}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="contactNumber" className="text-pure-greys-50">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblack-700 placeholder:text-pure-greys-400 w-full"
                value={profileDetails.contactNumber}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2 lg:w-[48%]">
              <label htmlFor="about" className="text-pure-greys-50">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblack-700 placeholder:text-pure-greys-400 w-full"
                value={profileDetails.about}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-start gap-2">

            <button className="cursor-pointer rounded-md bg-yellow-200 py-2 px-5 font-semibold" type="submit">
              Update
            </button>
            <button className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50" onClick={() => navigate("/dashboard/my-profile")}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditProfile;
