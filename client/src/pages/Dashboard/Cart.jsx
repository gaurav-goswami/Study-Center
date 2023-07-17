import React from 'react'
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper'
import Heading from '../../components/common/Heading'

const Cart = () => {
  return (
    <>
        <DashboardWrapper>
            <div className='w-full md:w-[80%] lg:w-[70%] mx-auto p-6'>
              <Heading style="text-xl md:text-4xl font-semibold">Cart</Heading>            
            </div>
        </DashboardWrapper>    
    </>
  )
}

export default Cart
