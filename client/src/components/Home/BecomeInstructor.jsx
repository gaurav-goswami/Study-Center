import React from 'react'
import Heading from '../common/Heading'
import HighLightText from '../common/HighLightText'
import Paragraph from '../common/Paragraph'
import InstructorBenefits from '../../data/InstructorBenefits'
import Button from '../common/Button'

const BecomeInstructor = () => {
  return (
    <> 
        <div className='w-[100%] mx-auto md:2xl:w-[70%] my-8 flex flex-col gap-6 p-2'>

            <Heading style="md:text-5xl font-extrabold text-3xl text-center my-4" >Already an Engineer? Want to teach others? <HighLightText color="text-yellow-200" size="md:text-5xl text-3xl" >Become an Instructor 🧑‍💻</HighLightText></Heading>

            <Paragraph color="text-pure-greys-200" styles="text-2xl font-bold">Benefits of becoming an Instructor at Study Center</Paragraph>

            
            {
                InstructorBenefits.map((item , index) => {
                    return <Paragraph styles="md:text-xl text-md" key={index}>👉 {item.benefit}</Paragraph>
                })
            }
              
            <Button styles="bg-yellow-100 w-max" path="/login">
              Become an Instructor 
            </Button>

        </div>
    </>
  )
}

export default BecomeInstructor
