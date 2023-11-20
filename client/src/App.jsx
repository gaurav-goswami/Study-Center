import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./components/Loader";

import StudentProtected from "./Protected Route/StudentProtected";
import InstructorProtected from "./Protected Route/InstructorProtected";
import HomeRedirect from "./Protected Route/HomeRedirect";
import DashboardProtected from "./Protected Route/DashboardProtected";

// import AddCourse from "./pages/Dashboard/Instructor/AddCourse";

const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./pages/Error"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const VerifyMail = lazy(() => import("./pages/VerifyMail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ResetPassword = lazy(() =>
  import("./pages/Reset Password/ResetPassword")
);
const UpdatePassword = lazy(() => import("./pages/UpdatePassword"));

const MyProfile = lazy(() => import("./pages/Dashboard/MyProfile"));
const EnrolledCourses = lazy(() => import("./pages/Dashboard/EnrolledCourses"));
const Cart = lazy(() => import("./pages/Dashboard/Cart"));
const Settings = lazy(() => import("./pages/Dashboard/Settings"));
const PurchaseHistory = lazy(() => import("./pages/Dashboard/PurchaseHistory"));

const AddCourse = lazy(() => import("./pages/Dashboard/Instructor/AddCourse"));

// pages import

const App = () => {
  const isAuth = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userRole);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route element={<HomeRedirect isAuth={isAuth} />}>
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/user/verify-otp" element={<VerifyMail />} />
            </Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset-password/:id" element={<UpdatePassword />} />

            {/* Dashboard Protected HOC (This will ensure that the user is authenticated) This HOC will be useful for the common routes between student and instructor */}

            <Route element={<DashboardProtected isAuth={isAuth} />}>
              <Route path="/dashboard/my-profile" element={<MyProfile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
            </Route>

            <Route
              element={<StudentProtected isAuth={isAuth} userRole={userRole} />}
            >
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
              <Route
                path="/dashboard/purchase-history"
                element={<PurchaseHistory />}
              />
            </Route>

            <Route
              element={
                <InstructorProtected isAuth={isAuth} userRole={userRole} />
              }
            >
              <Route path="/dashboard/add-course" element={<AddCourse />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
