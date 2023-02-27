import React from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';


const Review = ({ review }) => {

    const { image, comment, country, name, date } = review;
    return (
        <div className='grid grid-cols-6 gap-5 mt-8 border-b pb-2'>
            <div className='col-span-1'>
                <img src={image} alt="" className='rounded-full h-14 hidden sm:block
                ' />
            </div>

            <div className='col-span-5'>
                <div className='flex justify-between items-center '>
                    <div>
                        <p className='text-xl font-bold tracking-wider'>{name}</p>
                        <em> <p className='text-sm font-bold tracking-wider'>{country}</p></em>
                    </div>
                    <em><p className='text-sm '>{date}</p></em>
                </div>

                <h2 className='my-5 leading-7'>{comment}</h2>
                <div className='flex items-center  font-bold text-gray-700' >
                    <p className='mr-6'>was this helpfull?  </p>
                    <AiFillLike size={20} /> 0 <span className='ml-2'></span>
                    <AiFillDislike size={20} /> 0
                </div>
            </div>

        </div>
    );
};

export default Review;