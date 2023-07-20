import React from 'react'
import DashboardWrapper from '../../../components/Wrapper/DashboardWrapper'
import Heading from "../../../components/common/Heading"
import HighLightText from "../../../components/common/HighLightText"
import courseUploadTips from '../../../data/courseUploadTips'
import CourseSteps from '../../../components/Dashboard/Course/CourseSteps'

const AddCourse = () => {
  return (
    <DashboardWrapper>
        <div className='w-full md:w-[80%] p-1 flex flex-col gap-2 mx-auto'>
            <Heading style="text-xl md:text-2xl xl:text-4xl font-semibold">Add <HighLightText color="text-yellow-100">Course</HighLightText>  </Heading>

            <div className='flex justify-between px-4 mt-6'>
                <div>
                    <CourseSteps />
                </div>

                {/* course upload tips */}
                <div className="sticky top-10 hidden max-w-[400px] flex-1 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6 xl:block h-fit">
                    <Heading style="font-semibold mb-5">💡 Course Upload Tips</Heading>
                    <ul className="ml-5 list-item list-disc space-y-4 text-xs text-richblack-5">
                    {
                        courseUploadTips.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    </DashboardWrapper>
  )
}

export default AddCourse
