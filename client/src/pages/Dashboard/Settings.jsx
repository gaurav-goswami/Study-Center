import React from 'react'
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper'
import DeleteAccount from '../../components/Dashboard/Settings/DeleteAccount'
import UpdatePassword from '../../components/Dashboard/Settings/UpdatePassword'

const Settings = () => {
  return (
    <>
        <DashboardWrapper>
            <div className='w-full md:w-[80%] lg:w-[1200px] mx-auto'>
              <UpdatePassword />
              <DeleteAccount />
            </div>
        </DashboardWrapper>
    </>
  )
}

export default Settings
