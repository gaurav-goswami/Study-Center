import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./CodeAnimation.css";

const CodeAnimation = ({ code }) => {
  const codeLines = code.split("\n");

  return (
    <>
      <div className="lg:w-[550px] min-h-[455px] max-h-max code-animation flex gap-2 p-4 w-[90%] mx-auto lg:mx-0 relative">
      
        <div className="code-animation-gradient absolute w-[20%] h-[50%] blur-[50px] rounded-full"></div>

        <div className="text-yellow-100">
          {codeLines.map((_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>

        <div className="flex flex-col">
          <TypeAnimation
            sequence={[code, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            speed={65}
            omitDeletionAnimation={true}
            className="whitespace-pre-line text-lg"
          />
        </div>
      </div>
    </>
  );
};

export default CodeAnimation;
