import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

const MainWrapper = ({children}) => {
  return (
    <>
        <div className='min-h-screen w-screen max-w-[1600px]'>
            <Navbar />
            {children}
            <Footer />
        </div>
    </>
  )
}

export default MainWrapper
