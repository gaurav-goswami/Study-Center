import React from "react"
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  return (
    <form
      className="flex flex-col gap-7"
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber">
          Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="p-2 rounded-md bg-richblue-800 text-pure-greys-25 cursor-pointer"
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="outline-none p-2 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="outline-none px-2 py-4 rounded-md text-pure-greys-25 bg-richblue-800 placeholder:text-pure-greys-400"
        />
      </div>

      <button
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactUsForm