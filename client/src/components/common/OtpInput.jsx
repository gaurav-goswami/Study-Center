import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OtpBox = () => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="grid place-items-center my-8">
        <div className="w-max h-max justify-center items-center m-auto flex flex-col gap-8">
          <p className="text-3xl font-bold text-white">Enter OTP received in your email ID</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="text-white w-[20px] text-center">&#9135;</span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{
                  color: "#000",
                  width: "60px",
                  textAlign: "center",
                  height: "60px",
                  outline : "none"
                }}
              />
            )}
          />
          <div>
                <button className="p-2 rounded-md outline-none font-semibold flex gap-2 items-center text-center bg-yellow-100">Verify otp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpBox;
