import React from "react";
import CountUp from "react-countup";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import Paragraph from "../common/Paragraph";

const AboutCount = () => {
  const countData = [
    {
      name: "Learners",
      data: 50000,
      icon: (
        <FaUsers className="text-xl md:text-3xl text-white max-[530px]:hidden" />
      ),
    },
    {
      name: "Mentors",
      data: 6500,
      icon: (
        <GiTeacher className="text-xl md:text-3xl text-white max-[530px]:hidden" />
      ),
    },
    {
      name: "Courses",
      data: 500,
      icon: (
        <BsFillCameraVideoFill className="text-xl md:text-3xl text-white max-[530px]:hidden" />
      ),
    },
    {
      name: "Placed Students",
      data: 20000,
      icon: (
        <PiStudentFill className="text-xl md:text-3xl text-white max-[530px]:hidden" />
      ),
    },
  ];

  return (
    <div className="w-full p-2 bg-richblack-800 flex gap-4 md:gap-8 justify-evenly max-[450px]:gap-0 max-[450px]:p-0 my-12">
      {countData.map((item, index) => {
        return (
          <div className="md:p-4 flex flex-col gap-4 items-center" key={index}>
            <CountUp
              start={1}
              end={item.data}
              suffix="+"
              duration={5}
              className="text-yellow-100 text-xl md:font-semibold md:text-3xl ml-5"
            />

            <div className="flex gap-2 items-center max-[450px]:justify-center">
              {item.icon}
              <Paragraph styles="text-center">{item.name}</Paragraph>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCount;
