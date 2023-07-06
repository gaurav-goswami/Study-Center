import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import HomeSectionOne from '../components/Home/HomeSectionOne'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BecomeInstructor from '../components/Home/BecomeInstructor'
import ProgressCheck from '../components/Home/ProgressCheck'

const Home = () => {
  return (
    <>
      <MainWrapper>

        <HomeSectionOne />
        <WhyChooseUs />
        <BecomeInstructor />
        <ProgressCheck />

      </MainWrapper>
    </>
  )
}

export default Home
