import React from "react";
import MainWrapper from "../components/Wrapper/MainWrapper";
import HomeSectionOne from "../components/Home/HomeSectionOne";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import BecomeInstructor from "../components/Home/BecomeInstructor";
import ProgressCheck from "../components/Home/ProgressCheck";
import ShareCodeSnap from "../components/Home/ShareCodeSnap";
import AboutCount from "../components/About/AboutCount";
import ScreenWrapper from "../components/Wrapper/ScreenWrapper";

const Home = () => {
  return (
    <>
      <ScreenWrapper>
        <MainWrapper>
          <HomeSectionOne />
          <AboutCount />
          <WhyChooseUs />
          <ProgressCheck />
          <ShareCodeSnap />
          <BecomeInstructor />
        </MainWrapper>
      </ScreenWrapper>
    </>
  );
};

export default Home;
