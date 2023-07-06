import React from 'react'

const MainWrapper = ({children}) => {
  return (
    <>
        <div className='min-h-screen w-screen bg-richblack-900'>
            <nav>
                This is navbar
               {/* navbar component here  */}
            </nav>

            {children}
        </div>
    </>
  )
}

export default MainWrapper
