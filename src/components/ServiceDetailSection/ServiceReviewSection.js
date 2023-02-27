/* eslint-disable no-extend-native */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { addReview, allReview } from '../../utilities/APIRoutes';
import axios from "axios";
import { toast } from 'react-hot-toast';
import AllReview from './AllReview';
import { style } from '../../utilities/data';
import date from '../../utilities/date';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const ServiceReviewSection = ({ service }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const fullDate = date();


    //load all review 
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['allReview'],
        queryFn: async () => {
            const res = await fetch(allReview);
            const data = await res.json();
            return data;
        }
    });


    //submit a reviw
    const handleReview = async (data) => {
        const { name, email, country, comment } = data;
        console.log(name, email, country, comment);
        const image = user?.photoURL;
        console.log(image);

        const review = {
            name,
            email,
            country,
            comment,
            image,
            date: fullDate,
            service_id: service._id,
            time: new Date()
        };

        await axios.post(addReview, review).then((result) => {
            if (result.data.acknowledged) {
                toast.success('review addeed');
                reset();
                refetch();
            }
        }).catch(err => toast.error('error'));

    };


    return (
        <div className="min-h-screen  bg-white flex items-center justify-center my-20 ">
            <div className={`container max-w-screen-lg ${style}`}>
                <div>
                    <div className=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div className="grid gap-10 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <AllReview reviews={reviews} />
                            </div>


                            <div>
                                <p className='  text-2xl font-bold'>Write a Review</p>
                                <form onSubmit={handleSubmit(handleReview)} className="lg:col-span-1  mt-8 text-black">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input
                                                {...register("name", {
                                                    required: "name is Required"
                                                })}
                                                type="text" name="name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                                {...register("email", {
                                                    required: "email is Required"
                                                })}
                                                type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-500 text-white" defaultValue={user?.email} readOnly />
                                        </div>

                                        <div className="md:col-span-3">

                                            <label htmlFor="address">Country</label>
                                            <input
                                                {...register("country", {
                                                    required: "country is Required"
                                                })}
                                                type="text" name="country" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">

                                            <label htmlFor="city">Rating</label>
                                            <input
                                                {...register("rating", {
                                                    required: "rating is Required"
                                                })}
                                                type="text" name="rating" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-5">

                                            <label htmlFor="comment">Comment</label>
                                            <textarea
                                                {...register("comment", {
                                                    required: "comment is Required"
                                                })}
                                                type="text" name="comment" id="comment" className="h-32 border mt-1 rounded px-2 w-full bg-gray-50" placeholder="leave a comment" />
                                        </div>


                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                {
                                                    user?.uid ?
                                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Give Review</button> :
                                                        <Link to='/login' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Please Login to Review</Link>
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviewSection;