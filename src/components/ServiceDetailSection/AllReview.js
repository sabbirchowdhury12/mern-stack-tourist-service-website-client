import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { allReview } from '../../utilities/APIRoutes';


const AllReview = () => {

    const { review = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(allReview);
            const data = await res.json();
            return data;
        }
    });

    console.log(review);

    return (
        <div>

        </div>
    );
};

export default AllReview;