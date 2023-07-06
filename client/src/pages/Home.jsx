import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import HomeSectionOne from '../components/Home/HomeSectionOne'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import BecomeInstructor from '../components/Home/BecomeInstructor'

const Home = () => {
  return (
    <>
      <MainWrapper>

        <HomeSectionOne />
        <WhyChooseUs />
        <BecomeInstructor />

      </MainWrapper>
    </>
  )
}

export default Home
