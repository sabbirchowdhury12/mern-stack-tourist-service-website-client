import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { allReview } from '../../utilities/APIRoutes';
import Review from './Review';


const AllReview = ({ reviews }) => {



    return (
        <div >
            <p className='border-b-4 inline-block pb-2 text-2xl font-bold'>Customer Reviews</p>

            <div className='border-r pr-8'>
                {
                    reviews.map(review => <Review key={review._id} review={review} />)
                }

            </div>
        </div>
    );
};

export default AllReview;