import React from "react";
import DashboardWrapper from "../../components/Wrapper/DashboardWrapper";
import { useSelector } from "react-redux";

const MyProfile = () => {

  const {userDetails} = useSelector((state) => state.auth);

  console.log("user details" , userDetails);

  return (
    <>
      <DashboardWrapper>
        <p className="text-white">This is profile page</p>
      </DashboardWrapper>
    </>
  );
};

export default MyProfile;
