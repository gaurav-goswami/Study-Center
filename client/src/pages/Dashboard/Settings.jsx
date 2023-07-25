import React from 'react'
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper'
import DeleteAccount from '../../components/Dashboard/Settings/DeleteAccount'
import UpdatePassword from '../../components/Dashboard/Settings/UpdatePassword'
import EditProfile from '../../components/Dashboard/Settings/EditProfile'

const Settings = () => {
  return (
    <>
        <DashboardWrapper>
            <div className='w-full md:w-[80%] lg:w-[1200px] mx-auto'>
              <EditProfile />
              <UpdatePassword />
              <DeleteAccount />
            </div>
        </DashboardWrapper>
    </>
  )
}

export default Settings
