import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtection = ({ isAuth, userRole }) => {
  if (isAuth && userRole === "Student") {
    return <Outlet />;
  }
  return <Navigate to="/auth/login" />;
};

export default LoginProtection;