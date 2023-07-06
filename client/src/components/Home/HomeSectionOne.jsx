import React from "react";
import CodeAnimation from "./CodeAnimation";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import HighLightText from "../common/HighLightText"
import Button from "../common/Button"

const HomeSectionOne = () => {
  return (
    <>
      <div className="w-[100%] h-max mx-auto flex gap-10 flex-col lg:flex-row md:2xl:w-[80%] lg:justify-evenly my-8">
        <CodeAnimation
          code={`const express = require("express")\nconst cors = require("cors")\nconst dotenv = require("dotenv")\ndotenv.config({path : "./config/config.env"})\n\nconst app = express()\napp.use(cors({
      origin : process.env.CLIENT_URL,
      methods : ["GET", "POST" , "PUT" , "DELETE"],
      credentials : "include"
    }))\nconst PORT = process.env.PORT\napp.listen(PORT , () => {
      console.log("🚀 server is running at port" , PORT)
    })`}
        />

        <div className="lg:w-[50%] w-[90%] mx-auto lg:mx-0 flex flex-col gap-6 lg:p-3">
          <Heading style="md:text-4xl font-extrabold text-3xl">
            Want to learn coding?{" "}
            <HighLightText
              color="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-200"
              size="md:text-4xl font-extrabold text-3xl"
            >
              Kickstart your carrer with Study Center
            </HighLightText>
          </Heading>

          <Paragraph styles="text-lg" color="text-pure-greys-200">
            New to coding? Don't worry, Study Center has you covered! Our
            platform offers in-depth programming courses taught by experienced
            instructors from top MNCs. Join us to gain valuable skills and
            knowledge. Start your coding journey now!
          </Paragraph>

          <div className="flex gap-4">
            <Button path="/courses" styles="bg-yellow-100">
              Explore Now
            </Button>
            <Button path="/dashboard" styles="bg-pure-greys-700 text-white">
              Go To Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSectionOne;
