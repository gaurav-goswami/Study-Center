import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useSelector} from "react-redux"
import Home from "./pages/Home";
import Error from "./pages/Error";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyMail from "./pages/VerifyMail";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResetPassword from "./pages/Reset Password/ResetPassword";

import UpdatePassword from "./pages/UpdatePassword";
import MyProfile from "./pages/Dashboard/MyProfile";
import EnrolledCourses from "./pages/Dashboard/EnrolledCourses";
import Cart from "./pages/Dashboard/Cart";
import Settings from "./pages/Dashboard/Settings";
import PurchaseHistory from "./pages/Dashboard/PurchaseHistory";

import StudentProtected from "./Protected Route/StudentProtected";
import InstructorProtected from "./Protected Route/InstructorProtected";
import HomeRedirect from "./Protected Route/HomeRedirect";
import DashboardProtected from "./Protected Route/DashboardProtected";
import AddCourse from "./pages/Dashboard/Instructor/AddCourse";

const App = () => {

  const isAuth = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userRole);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element = {<HomeRedirect isAuth={isAuth}/>}>
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/user/verify-otp" element={<VerifyMail />}/>
          </Route>


          <Route path="/about" element={<AboutPage />}/>
          <Route path = "/contact" element={<ContactPage />}/>
          <Route path="/reset-password" element={<ResetPassword />}/>
          <Route path="/reset-password/:id" element={<UpdatePassword />}/>

          
          {/* Dashboard Protected HOC (This will ensure that the user is authenticated) This HOC will be useful for the common routes between student and instructor */}
          
          <Route element = {<DashboardProtected isAuth={isAuth}/>}>
            <Route path="/dashboard/my-profile" element={<MyProfile />}/>
            <Route path="/dashboard/settings" element={<Settings />}/>
          </Route>

          <Route element={<StudentProtected isAuth={isAuth} userRole={userRole}/>}>
            <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />}/>
            <Route path="/dashboard/cart" element={<Cart />}/>
            <Route path="/dashboard/purchase-history" element={<PurchaseHistory />}/>
          </Route>

          <Route element={<InstructorProtected isAuth={isAuth} userRole={userRole}/>}>
            <Route path="/dashboard/add-course" element={<AddCourse />}/>
          </Route>
        

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
