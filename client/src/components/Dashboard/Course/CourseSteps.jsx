import React from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";

const CourseSteps = () => {
  const { step } = useSelector((state) => state.courseStep);

  const steps = [
    {
      id: 1,
      title: "Course Information",
    },
    {
      id: 2,
      title: "Course Builder",
    },
    {
      id: 3,
      title: "Publish",
    },
  ];

  return (
    <>
      <div className="relative mb-2 flex w-full justify-center bg-caribbeangreen-300">
        {steps.map((item) => {
          return (
            <>
              <div key={item.id}>
                <div
                  className={`grid cursor-default aspect-square w-[34px] place-items-center rounded-full border-[1px] ${
                    step === item.id
                      ? "border-yellow-50 bg-yellow-900 text-yellow-50"
                      : "border-richblack-700 bg-richblack-800 text-richblack-300"
                  }`}
                >
                  {step > item.id ? (
                    <FaCheck className="text-yellow-100" />
                  ) : (
                    item.id
                  )}
                </div>
              </div>

              {item.id !== steps.length && (
                <div
                  className={`h-[calc(34px/2)] w-[33%] border-dashed border-b-2 ${
                    step > item.id ? "border-yellow-50" : "border-richblack-500"
                  }`}
                ></div>
              )}
            </>
          );
        })}
      </div>
      <div className="relative mb-16 flex w-full select-none justify-between">
        {steps.map((item) => (
          <>
            <div
              className="flex min-w-[180px] gap-y-2 bg-caribbeangreen-900 justify-center"
              key={item.id}
            >
              <p
                className={`text-sm ${
                  step >= item.id ? "text-richblack-5" : "text-richblack-500"
                }`}
              >
                {item.title}
              </p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CourseSteps;
