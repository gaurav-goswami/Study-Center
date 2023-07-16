import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import {Line} from "rc-progress";
import {BiDotsVerticalRounded} from "react-icons/bi";

const EnrolledCoursesCard = () => {
  return (
    <>
      <div className="w-full p-2 flex h-[80px] gap-3 justify-between">

        <div className="flex gap-3 w-[50%]">
          <div className="w-[65px] rounded-md overflow-hidden bg-white">
            <img src="" alt="course image" />
          </div>

          <div className="flex flex-col gap-2">
            <Heading style="text-pure-greys-200">Web Development</Heading>
            <Paragraph>This is web dev course for absolute beginners</Paragraph>
          </div>
        </div>

        <div className="flex gap-4 items-center w-[50%] justify-evenly">
            <Paragraph>15hr 45mins</Paragraph>
            <div className="flex flex-col w-[50%] p-1">
                <Paragraph>Progress 60%</Paragraph>
                <Line percent={60} strokeColor="#12eb7f" trailColor='#ebebeb' strokeLinecap='round' style={{height : "6px"}}/>
            </div>

            <BiDotsVerticalRounded className="text-white text-2xl cursor-pointer"/>
        </div>

      </div>
    </>
  );
};

export default EnrolledCoursesCard;
