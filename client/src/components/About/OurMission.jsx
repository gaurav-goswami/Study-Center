import React from "react";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";
import {FaReact, FaNodeJs, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaPython} from "react-icons/fa";
import {SiMongodb, SiTypescript, SiNginx} from "react-icons/si";
import "./OurMission.css";

const OurMission = () => {

    return (
    <>
      <div className="w-[90%] md:w-[80%] xl:w-[75%] mx-auto my-4 flex flex-col md:flex-row gap-2 p-2 justify-center">

        <div className="w-[100%] md:w-[60%] p-2">
          <Heading style="text-xl md:text-5xl font-extrabold text-yellow-200 text-center">Our Mission</Heading>
          <Paragraph color="text-pure-greys-100" styles="text-lg md:text-xl my-2">At Study Center, our mission is to empower learners with the knowledge and skills needed to excel in their educational and professional journeys. We are dedicated to providing high-quality, accessible, and engaging learning resources that foster a deep understanding of various subjects.
          Our goal is to create a supportive and inclusive learning environment where individuals can explore their passions, expand their horizons, and unlock their full potential. We believe in the transformative power of education and its ability to shape lives positively.</Paragraph>

          <Paragraph color="text-pure-greys-100" styles="text-lg md:text-xl my-2">Through our team of experienced instructors, industry experts, and top professionals, we strive to deliver courses that are practical, relevant, and aligned with real-world needs. We aim to bridge the gap between theory and practice by offering hands-on projects, interactive exercises, and practical assignments.
          At Study Center, we embrace continuous learning, innovation, and staying ahead of the curve in an ever-evolving world. We are committed to nurturing a community of lifelong learners who are driven by curiosity and a thirst for knowledge.</Paragraph>

          <Heading style="text-xl md:text-2xl text-pink-400 my-5">Welcome to Study Center – Where Learning Knows No Boundaries!</Heading>
        </div>
      </div>
    </>
  );
};

export default OurMission;
