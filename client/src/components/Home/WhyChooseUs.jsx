import React from 'react'
import Paragraph from '../common/Paragraph'
import Heading from '../common/Heading'
import HighLightText from '../common/HighLightText'
import "./WhyChooseUs.css";
import { FcGlobe, FcCustomerSupport, FcCalendar, FcMoneyTransfer, FcAreaChart, FcBusinessman, FcApproval } from 'react-icons/fc';
import codingvideo from "../../assets/codingvideo.mp4";
import Button from '../common/Button';

const WhyChooseUs = () => {

    const whyUs = [
        {
            icon : <FcGlobe className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "Real World Problem Solving"
        },
        {
            icon : <FcCustomerSupport className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "24/7 Doubt Support"
        },
        {
            icon : <FcCalendar className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "Extra Class Support"
        },
        {
            icon : <FcMoneyTransfer className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "15 Days Money Back Guarantee"
        },
        {
            icon : <FcAreaChart className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "Progress Tracker"
        },
        {
            icon : <FcBusinessman className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "Placement Support"
        },
        {
            icon : <FcApproval className='text-4xl p-1 bg-pure-greys-5 rounded-full'/>,
            data : "Scholorship Support (Coming soon...)",
            last : true
        }

    ]

  return (
    <>
        <div className='w-[100%] h-max mx-auto md:2xl:w-[80%] my-8 flex flex-col items-center gap-5 py-2'>

            <Heading style="md:text-5xl font-extrabold text-3xl">Why Choose <HighLightText size="md:text-5xl text-3xl" color="text-yellow-200">Us?</HighLightText></Heading>

            <div className='w-[100%] flex flex-col md:flex-row md:justify-evenly justify-center gap-4 p-2'>

                <div className='flex flex-col md:w-[30%] w-[100%] h-max gap-10 py-2'>

                    {
                        whyUs.map((item , index) => {
                            return <div className= {`md:text-white rounded-sm w-full p-2 flex gap-2 items-center icon-container bg-pure-greys-5 md:bg-transparent text-black ${item.last ? "after:border-none" : "relative"} `} key={index}>
                                {item.icon}
                                <Paragraph color="font-semibold" styles="text-md">{item.data}</Paragraph>
                            </div>
                        })
                    }

                </div>

                {/* video */}
                <div className='flex flex-col md:w-[70%] w-[100%] h-max my-2'>
                    <video src={codingvideo}
                        muted
                        loop
                        autoPlay
                    ></video>
                    
                    <Button styles="bg-yellow-200 my-4 w-[100%]" path="/courses">View Courses</Button>

                </div>

            </div>  

        </div>
    </>
  )
}

export default WhyChooseUs
