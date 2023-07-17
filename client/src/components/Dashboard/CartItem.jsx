import React from 'react'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../../app/features/Cart';
import Heading from '../common/Heading';
import Paragraph from '../common/Paragraph';
import {AiFillStar, AiOutlineStar, AiFillDelete} from "react-icons/ai"

const CartItem = ({_id ,thumbnail, courseName, category, ratingAndReviews, price, averageRating }) => {

  const dispatch = useDispatch();

  return (
    <>
        <div className='w-[100%] p-2 flex'>
            <div className='w-[20%]'>
                <img src={thumbnail} alt="course thumbnail" className='w-full h-full object-cover object-center' />
            </div>

            <div className='flex flex-col gap-1'>
                <Heading style="text-yellow-100 text-lg md:text-xl">{courseName}</Heading>
                <Paragraph styles="text-sm" color="text-pure-greys-200">{category?.name}</Paragraph>

                <div className="flex gap-2">
                    <span className="text-yellow-100">{averageRating}</span>
                    <ReactStars
                        count={5}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                        emtpyIcon={<AiOutlineStar />}
                        fullIcon={<AiFillStar />}
                    /> 
                    <span className='text-yellow-100'>{ratingAndReviews.length} Ratings</span>
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <button onClick={() => dispatch(removeFromCart(_id))} className='flex gap-1 p-3 bg-pure-greys-700 text-pink-800'>
                    <AiFillDelete />
                    Remove
                </button>

                <Paragraph color="text-yellow-100" styles="text-xl md:text-2xl font-semibold">{price}</Paragraph>
            </div>
        </div>
    </>
  )
}

export default CartItem
