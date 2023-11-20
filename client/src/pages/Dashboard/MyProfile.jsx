import React from "react";
import DashboardWrapper from "../../components/Wrapper/DashboardWrapper";
import { useSelector } from "react-redux";
import { RiEditBoxLine } from "react-icons/ri";
import dateFormatter from "../../utils/dateFormatter";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const user = useSelector((state) => state.auth.userDetails);
  console.log("user is " , user);

  return (
    <>
      <DashboardWrapper>
        <div className="flex flex-col w-full md:w-[80%] lg:w-[1200px] mx-auto py-8">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            My Profile
          </h1>
          <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex items-center gap-x-4">
              <img
                src={user?.profile}
                alt={`profile-${user?.firstName}`}
                className="aspect-square w-[78px] rounded-full object-cover"
              />
              <div className="space-y-1">
                <p className="text-lg font-semibold text-richblack-5">
                  {user?.firstName + " " + user?.lastName}
                </p>
                <p className="text-sm text-richblack-300">{user?.email}</p>
              </div>
            </div>
            <Link
              to="/dashboard/settings"
              className="flex gap-2 items-center bg-yellow-50 py-2 px-4 font-semibold rounded-md"
            >
              Edit
              <RiEditBoxLine />
            </Link>
          </div>
          <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">About</p>
              <Link
                to="/dashboard/settings"
                className="flex gap-2 items-center bg-yellow-50 py-2 px-4 font-semibold rounded-md"
              >
                Edit
                <RiEditBoxLine />
              </Link>
            </div>
            <p
              className={`${
                user?.about
                  ? "text-richblack-5"
                  : "text-richblack-400"
              } text-sm font-medium`}
            >
              {user?.about ??
                "Write Something About Yourself"}
            </p>
          </div>
          <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <div className="flex w-full items-center justify-between">
              <p className="text-lg font-semibold text-richblack-5">
                Personal Details
              </p>
              <Link
                to="/dashboard/settings"
                className="flex gap-2 items-center bg-yellow-50 py-2 px-4 font-semibold rounded-md"
              >
                Edit
                <RiEditBoxLine />
              </Link>
            </div>
            <div className="flex max-w-[500px] justify-between">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">First Name</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.firstName}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Email</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.email}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Gender</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.gender ?? "Add Gender"}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mb-2 text-sm text-richblack-600">Last Name</p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.lastName}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm text-richblack-600">
                    Phone Number
                  </p>
                  <p className="text-sm font-medium text-richblack-5">
                    {user?.contactNumber ??
                      "Add Contact Number"}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-sm text-richblack-600">
                    Date Of Birth
                  </p>
                  <p className="text-sm font-medium text-richblack-5">
                    {dateFormatter(user?.dateOfBirth) ??
                      "Add Date Of Birth"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default MyProfile;
