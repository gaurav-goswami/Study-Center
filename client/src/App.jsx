import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyMail from "./pages/VerifyMail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/user/verify-otp" element={<VerifyMail />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path = "/contact" element={<ContactPage />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
