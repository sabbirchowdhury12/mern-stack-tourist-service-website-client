import { async } from '@firebase/util';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { addServices } from '../../utilities/APIRoutes';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useImage from '../../hooks/useImage';

const AddService = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const image = useImage(file);
    // console.log(image);

    const handleAddService = async (data) => {

        const { name, country, rating, price, desc, file } = data;
        console.log(name, country, rating, price, desc, file);
        setFile(file);

        const service = {
            place: name,
            country,
            rating,
            price,
            desc,
            img: image,
            name: user.displayName,
            email: user.email,
            date: new Date()
        };

        if (image) {
            await axios.post(addServices, service).then((result) => {
                // console.log(result);
                if (result.data.acknowledged) {
                    toast.success('review addeed');
                    reset();
                }
            }).catch(err => toast.error('error'));
        }

    };
    return (
        <div className="font-sans antialiased bg-grey-lightest">
            <div className="w-full bg-grey-lightest pt-10">
                <div className="container mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Add a service</div>
                        <form onSubmit={handleSubmit(handleAddService)} className="py-4 px-8">


                            <div className="w-full mr-1 mb-4">

                                <input
                                    {...register("name", {
                                        required: "Name is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Place Name" />
                            </div>

                            <div className="mb-4">
                                <input
                                    {...register("country", {
                                        required: "country is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="country" />
                            </div>


                            <div className="mb-4">
                                <input
                                    {...register("rating", {
                                        required: "rating is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Rating" />
                            </div>

                            <div className="mb-4">
                                <input
                                    {...register("price", {
                                        required: "price is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Price" />

                            </div>

                            <div className="mb-4">
                                <textarea
                                    {...register("desc", {
                                        required: "desc is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 h-32 text-grey-darker" type="text" placeholder="Description" />

                            </div>

                            <div className="w-full md:w-1/2 ml-1">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Upload Service Profile</label>
                                <input
                                    {...register("file", {
                                        required: "file is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="file" placeholder="Upload Image" />
                            </div>


                            <div className="flex items-center justify-between mt-8">
                                <button className="bg-blue hover:bg-blue-dark  font-bold py-2 px-4 rounded-full" type="submit">
                                    Add Service
                                </button>
                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </div>

                        </form>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AddService;