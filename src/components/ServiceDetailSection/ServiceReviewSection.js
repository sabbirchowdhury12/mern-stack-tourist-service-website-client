import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { addReview } from '../../utilities/APIRoutes';
import axios from "axios";
import { toast } from 'react-hot-toast';

const ServiceReviewSection = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);

    const handleReview = async (data) => {
        const { name, email, country, comment } = data;
        console.log(name, email, country, comment);

        const review = {
            name,
            email,
            country,
            comment
        };

        await axios.post(addReview, review).then((result) => {
            if (result.data.acknowledged) {
                toast.success('review addeed');
            }
        }).catch(err => toast.error('error'));




    };


    return (
        <div class="min-h-screen p-6 bg-white flex items-center justify-center my-20">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                    <div class=" rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div>
                            </div>

                            <form onSubmit={handleSubmit(handleReview)} class="lg:col-span-2">
                                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                    <div class="md:col-span-5">
                                        <label for="full_name">Full Name</label>
                                        <input
                                            {...register("name", {
                                                required: "name is Required"
                                            })}
                                            type="text" name="name" id="full_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                    </div>

                                    <div class="md:col-span-5">
                                        <label for="email">Email Address</label>
                                        <input
                                            {...register("email", {
                                                required: "email is Required"
                                            })}
                                            type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-500 text-white" value={user?.email} readOnly />
                                    </div>

                                    <div class="md:col-span-3">

                                        <label for="address">Country</label>
                                        <input
                                            {...register("country", {
                                                required: "country is Required"
                                            })}
                                            type="text" name="country" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div class="md:col-span-2">

                                        <label for="city">Rating</label>
                                        <input
                                            {...register("rating", {
                                                required: "rating is Required"
                                            })}
                                            type="text" name="rating" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div class="md:col-span-5">

                                        <label for="comment">Comment</label>
                                        <textarea
                                            {...register("comment", {
                                                required: "comment is Required"
                                            })}
                                            type="text" name="comment" id="comment" class="h-32 border mt-1 rounded px-2 w-full bg-gray-50" placeholder="leave a comment" />
                                    </div>


                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Give Review</button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviewSection;