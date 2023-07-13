import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const LoginProtection = ({ isAuth }) => {
  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }
  return <Outlet />;
};

export default LoginProtection;