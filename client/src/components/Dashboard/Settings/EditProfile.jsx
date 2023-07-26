import React from "react";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const genders = [
    "Male",
    "Female",
    "Non-Binary",
    "Prefer not to say",
    "Other",
  ];

  const navigate = useNavigate();

  return (
    <>
      <form>
        {/* Profile Information */}
        <div className="my-5 flex flex-col gap-y-6 rounded-md bg-blue-800 p-8 px-12">
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
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-full"
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
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-full"
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
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-full"
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
                className="p-4 rounded-md bg-richblue-800 text-pure-greys-25 cursor-pointer w-full"
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
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-full"
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
                className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-full"
              />
            </div>
          </div>
          <div className="flex justify-start gap-2">

            <button className="cursor-pointer rounded-md bg-yellow-200 py-2 px-5 font-semibold">
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
