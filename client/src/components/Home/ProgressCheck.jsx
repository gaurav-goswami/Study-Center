import React from 'react'
import {Line , Circle} from "rc-progress"
import Heading from '../common/Heading'
import {FcBarChart} from "react-icons/fc"
import HighLightText from '../common/HighLightText'
import Paragraph from '../common/Paragraph'

const ProgressCheck = () => {

    const subjectProgress = [
        {
            language : "C++",
            progress : <Line percent={60} strokeColor="#6E7aae" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 60
        },
        {
            language : "HTML",
            progress : <Line percent={80} strokeColor="#f53022" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 80
        },
        {
            language : "CSS",
            progress : <Line percent={65} strokeColor="#EF476F" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 65
        },
        {
            language : "JavaScript",
            progress : <Line percent={45} strokeColor="#f2eb1b" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 45
        },
        {
            language : "OS",
            progress : <Line percent={90} strokeColor="#12eb7f" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 90
        },
        {
            language : "DSA",
            progress : <Line percent={30} strokeColor="#2db7f5" trailColor='#ebebeb' strokeLinecap='round' style={{height : "8px"}}/>,
            progressPercentage : 30
        },
    ]


  return (
    <>
        <div className='w-[100%] h-max mx-auto md:2xl:w-[80%] p-2 flex flex-col gap-8'>

            <Heading style="md:text-5xl font-extrabold text-3xl text-center my-2 gap-3 text-[#5aed75]">Track Your Progress.<HighLightText color="text-pink-200" size="md:text-5xl text-3xl"> And see you weak areas</HighLightText></Heading>

            <div className='w-full h-max flex flex-col md:flex-row justify-evenly'>
                {/* subject progress */}
                <div className='w-full md:w-[50%] h-full '>
                    {
                        subjectProgress.map((item , index) => {
                            return <div className='w-full flex gap-2 p-2 items-center my-1' key = {index}>
                                <Paragraph styles="text-lg font-semibold text-pure-greys-5">{item.language}</Paragraph>
                                {item.progress}
                                <Paragraph styles="text-lg font-semibold text-pure-greys-5">{item.progressPercentage}%</Paragraph>
                            </div>
                        })
                    }
                </div>

                {/* days completed progress */}
                <div className='w-full md:w-fit h-full flex flex-col gap-4 items-center'>
                    <Circle percent={60} strokeColor="#fc1ebe" trailColor='#f788d8' strokeWidth={3.5} trailWidth={2}  style={{height : "300px"}}/>
                    <Paragraph styles="text-lg font-semibold text-pure-greys-5">Day 60 of 100</Paragraph>
                </div>
            </div>

        </div>
    </>
  )
}

export default ProgressCheck
