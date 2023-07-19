import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const InstructorProtected = ({ isAuth, userRole }) => {
  if (isAuth && userRole === "Instructor") {
    return <Outlet />;
  }
  return <Navigate to="/auth/login" />;
};

export default InstructorProtected;