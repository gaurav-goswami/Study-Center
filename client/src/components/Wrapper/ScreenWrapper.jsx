import React from 'react'

const ScreenWrapper = ({children}) => {
  return (
    <>
        <div className='w-screen bg-richblack-900 flex justify-center'>
            {children}
        </div>
    </>
  )
}

export default ScreenWrapper
