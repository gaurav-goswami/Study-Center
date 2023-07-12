import React from 'react'
import MainWrapper from '../components/Wrapper/MainWrapper'
import AboutCount from '../components/About/AboutCount'

const AboutPage = () => {
  return (
    <>
        <MainWrapper>
            <div className='min-h-screen'>
                <AboutCount />
            </div>
        </MainWrapper>
    </>
  )
}

export default AboutPage
