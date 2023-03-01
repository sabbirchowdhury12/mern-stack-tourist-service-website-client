import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { deleteReview, myReview } from '../../utilities/APIRoutes';
import { ReadMore, star, style } from '../../utilities/data';
import EditedReviewModal from './EditedReviewModal';
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";




const MyReview = () => {
    const { user, logout } = useContext(AuthContext);
    const [text, setText] = useState(null);


    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`${myReview}?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tourist-token')}`
                }
            });

            if (res.status === 403 || res.status === 401) {
                logout();
                console.log('hi');
            }
            const data = await res.json();
            return data;
        }
    });

    const handleDelete = async (id) => {
        const { data } = await axios.delete(`${deleteReview}/${id}`);

        if (data.acknowledged) {
            toast.success('delete done');
            refetch();
        } else {
            toast.success('something wrong');
        }


    };

    if (isLoading) {
        return;
    }

    return (
        <div className={`${style} my-20`}>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                {
                    reviews.map(review => {
                        const { comment, country, date, name, _id, } = review;
                        return <div key={_id} className='shadow-lg  p-3 border  rounded-3xl'>
                            <div className='flex'>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </div>
                            <em> <p className='text-xs mt-2'> {date}</p></em>

                            <ReadMore>
                                {comment}
                            </ReadMore>

                            <div className='flex gap-2 text-2xl justify-end mr-4 mt-4'>
                                <button onClick={() => handleDelete(_id)} className=''><AiFillDelete /></button>
                                <label
                                    htmlFor="booking-modal"
                                    className=""
                                    onClick={() => setText(review)}
                                >  <FaEdit /></label>
                            </div>

                            {
                                text &&
                                <EditedReviewModal text={text} refetch={refetch} setText={setText} />
                            }
                        </div>;
                    })
                }
            </div>


        </div>
    );
};

export default MyReview;