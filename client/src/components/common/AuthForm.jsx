import React from "react";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

const AuthForm = ({ isSignUp, handleSubmit, formDetails, setFormDetails, setOtpPage}) => {
  return (
    <>
      {isSignUp ? (
        <form
          className="p-2 flex flex-col gap-8 items-center md:w-[500px] w-[90%]"
          onSubmit={setOtpPage}
        >
          <div className="flex gap-6 md:flex-row flex-col w-[100%] p-0.5">
            <input
              name="firstName"
              type="text"
              className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
              placeholder="Enter first name"
              autoComplete="off"
              value={formDetails.firstName}
              onChange={setFormDetails}
              required = {true}
            />

            <input
              name="lastName"
              type="text"
              className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
              placeholder="Enter last name"
              autoComplete="off"
              value={formDetails.lastName}
              onChange={setFormDetails}
              required = {true}
            />
          </div>

          <input
            type="email"
            name="email"
            className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]"
            placeholder="Enter email address"
            autoComplete="off"
            value={formDetails.email}
            onChange={setFormDetails}
            required = {true}
          />

          <div className="flex gap-6 md:flex-row flex-col w-[100%] p-0.5">
            <input
              name="createPassword"
              type="password"
              className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
              placeholder="Create Password"
              autoComplete="off"
              value={formDetails.createPassword}
              onChange={setFormDetails}
              required = {true}
            />

            <input
              name="confirmPassword"
              type="password"
              className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 md:w-[50%] w-[100%]"
              placeholder="Confirm Password"
              autoComplete="off"
              value={formDetails.confirmPassword}
              onChange={setFormDetails}
              required = {true}
            />
          </div>

          <div className="flex w-full justify-between items-center">
            <Paragraph
              color="text-pure-greys-400"
              styles="text-lg max-[540px]:hidden"
            >
              My role is
            </Paragraph>

            <select
              name="userRole"
              className="p-4 rounded-md bg-richblue-800 text-pure-greys-25 cursor-pointer w-[80%] max-[540px]:w-[100%]"
              value={formDetails.userRole}
              onChange={setFormDetails}
            >
              <option value="Student">Student</option>
              <option value="Instructor">Instructor</option>
            </select>
          </div>

          <button
            type="submit"
            className="p-2 rounded-md outline-none font-semibold w-full bg-yellow-100"
          >
            Create Account
          </button>
        </form>
      ) : 
      
        <form
          className="p-2 flex flex-col gap-6 items-center md:w-[500px] w-[90%]"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            value={formDetails.email}
            type="email"
            className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]"
            placeholder="Enter email address"
            autoComplete="off"
            onChange={setFormDetails}
          />

          <input
            name="password"
            value={formDetails.password}
            type="password"
            className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400 w-[100%]"
            placeholder="Enter Password"
            autoComplete="off"
            onChange={setFormDetails}
          />

          <div className="-mt-4 w-full">
            <Link className="w-fit text-pure-greys-600" to="/reset-password">
              <span>Forgot password</span>
            </Link>
          </div>
          
          <button
            type="submit"
            className="p-2 rounded-md outline-none font-semibold w-full bg-yellow-100"
          >
            Login
          </button>
        </form>
      }
    </>
  );
};

export default AuthForm;
