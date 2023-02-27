import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { deleteReview, myReview } from '../../utilities/APIRoutes';
import { style } from '../../utilities/data';
import EditedReviewModal from './EditedReviewModal';


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text text-lg my-4 min-h-8">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const MyReview = () => {


    const { user } = useContext(AuthContext);
    const [text, setText] = useState(null);


    const { data: reviews = [], isLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`${myReview}?email=${user?.email}`);
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


    console.log(reviews);

    const star = <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-currenttext-blue-700"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg>;

    return (

        <div className={`${style} my-20`}>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                {
                    reviews.map(review => {
                        const { comment, country, date, name, _id, } = review;
                        return <div className='shadow-lg p-4'>
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
                            <div className='flex justify-between'>
                                <button onClick={() => handleDelete(_id)} className='bg-slate-800 text-white'>Delete</button>
                                <label
                                    htmlFor="booking-modal"
                                    className="bg-slate-800 text-white"
                                    onClick={() => setText(review)}
                                >update</label>
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