import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import HomeSectionOne from '../components/Home/HomeSectionOne'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BecomeInstructor from '../components/Home/BecomeInstructor'
import ProgressCheck from '../components/Home/ProgressCheck'
import ShareCodeSnap from '../components/Home/ShareCodeSnap'

const Home = () => {
  return (
    <>
      <MainWrapper>

        <HomeSectionOne />
        <WhyChooseUs />
        <ProgressCheck />
        <ShareCodeSnap />
        <BecomeInstructor />

      </MainWrapper>
    </>
  )
}

export default Home
