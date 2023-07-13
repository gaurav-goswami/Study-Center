import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import AboutCount from '../components/About/AboutCount'
import Heading from '../components/common/Heading'
import Paragraph from '../components/common/Paragraph'
import aboutImage from "../assets/aboutImage.jpeg"
import OurMission from '../components/About/OurMission'

const AboutPage = () => {
  return (
    <>
        <MainWrapper>
            <div className='min-h-screen'>

                <div className='w-[90%] md:w-[80%] xl:w-[70%] mx-auto flex gap-2 my-5 flex-col md:flex-row'>
                  <div className='md:w-[50%] w-[100%]'>
                    <Heading style="text-3xl md:text-5xl font-extrabold text-yellow-200">Our Story</Heading>

                    <Paragraph color="text-pure-greys-300" styles="text-lg md:text-xl my-2">Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.

                    As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</Paragraph>
                  </div>

                  <div className='p-5 md:w-[50%] w-[100%]'>
                    <img src={aboutImage} alt="image" className='w-[100%] h-[100%] object-cover object-center'/>
                  </div>

                </div>

                <AboutCount />
                
                <OurMission />
            </div>
        </MainWrapper>
    </>
  )
}

export default AboutPage
