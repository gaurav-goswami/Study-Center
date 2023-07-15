import React from "react";
import Sidebar from "../Header/Sidebar";

const DashboardWrapper = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-screen bg-richblack-900 flex gap-2">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default DashboardWrapper;
