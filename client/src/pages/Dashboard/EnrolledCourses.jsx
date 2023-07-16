import React from 'react'
import DashboardWrapper from '../../components/Wrapper/DashboardWrapper'
import { useGetEnrolledCoursesQuery } from '../../services/Courses'
import { useSelector } from 'react-redux'
import Heading from "../../components/common/Heading"
import Paragraph from "../../components/common/Paragraph"
import Button from '../../components/common/Button'
import HighLightText from '../../components/common/HighLightText'
import EnrolledCoursesCard from '../../components/Dashboard/EnrolledCoursesCard'

const EnrolledCourses = () => {

  const {token} = useSelector((state) => state.auth);
  const {data} = useGetEnrolledCoursesQuery(token);

  return (
    <DashboardWrapper>
        <div className='w-full md:w-[80%] lg:w-[70%] mx-auto p-6'>
          <Heading style="text-xl md:text-4xl md:font-bold">
            Enrolled <HighLightText color="text-yellow-100">Courses</HighLightText>
          </Heading>

          <EnrolledCoursesCard />
        </div>
    </DashboardWrapper>
  )
}

export default EnrolledCourses


// {
//   !data ? (
//     <div className='flex items-center justify-center h-[90%]'>
//       <span className='course-loader'></span>
//     </div>
//   )
//   :
//   !data.length ? (
//     <div className='flex items-center justify-center h-[90%] flex-col gap-4'>
//       <Paragraph color="text-pure-greys-200" styles="text-xl md:text-2xl">You havn't enrolled in any course yet.</Paragraph>
//       <Button path="/courses" styles="bg-yellow-200">Explore Courses</Button>
//     </div>
//   )

//   :

//   null
// }