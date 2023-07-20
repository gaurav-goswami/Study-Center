import React from 'react'
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper'
import DeleteAccount from '../../components/Dashboard/Settings/DeleteAccount'

const Settings = () => {
  return (
    <>
        <DashboardWrapper>
            <div className='w-full md:w-[80%] lg:w-[1200px] mx-auto'>
              <DeleteAccount />
            </div>
        </DashboardWrapper>
    </>
  )
}

export default Settings
