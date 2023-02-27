import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useImage from '../../hooks/useImage';


const Register = () => {

    const { createUserWithEmail, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [file, setFile] = useState(null);
    const image = useImage(file);
    console.log(image);
    const navigate = useNavigate();


    const handleSignUp = (data) => {
        const { name, email, file, password } = data;

        //image host
        setFile(file);
        //create user
        if (image) {
            createUserWithEmail(email, password)
                .then(result => {
                    console.log(image);
                    const userInfo = {
                        displayName: name,
                        photoURL: image
                    };
                    //update user
                    updateUser(userInfo)
                        .then(result => { }).catch(err => console.log(err));
                    toast.success('register done');
                    navigate('/');
                }).catch(err => toast.error('register failed'));
        }

    };


    return (
        <div className="font-sans antialiased bg-grey-lightest">
            <div className="w-full bg-grey-lightest pt-10">
                <div className="container mx-auto py-8">
                    <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                        <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Register for a free account</div>
                        <form onSubmit={handleSubmit(handleSignUp)} className="py-4 px-8">

                            <div className="block md:flex  mb-4">
                                <div className="w-full md:w-1/2 mr-1 mb-4">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="first_name">Full Name</label>
                                    <input
                                        {...register("name", {
                                            required: "Name is Required"
                                        })}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="first_name" type="text" placeholder="Your first name" />
                                </div>
                                <div className="w-full md:w-1/2 ml-1">
                                    <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="last_name">Upload  Profile</label>
                                    <input
                                        {...register("file", {
                                            required: "file is Required"
                                        })}
                                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="last_name" type="file" placeholder="Your last name" />
                                </div>
                            </div>


                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                                <input
                                    {...register("email", {
                                        required: "email is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="Your email address" />
                            </div>


                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                                <input
                                    {...register("password", {
                                        required: "password is Required"
                                    })}
                                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="password" type="password" placeholder="Your secure password" />
                                <p className="text-grey text-xs mt-1">At least 6 characters</p>
                            </div>


                            <div className="flex items-center justify-between mt-8">
                                <button className="bg-blue hover:bg-blue-dark  font-bold py-2 px-4 rounded-full" type="submit">
                                    Sign Up
                                </button>
                                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                            </div>

                        </form>
                    </div>


                    <p className="text-center my-4">
                        <span href="#" className="text-grey-dark text-sm no-underline hover:text-grey-darker">I already have an account <Link to='/login'>login</Link></span>
                    </p>
                </div>
            </div>

            <footer className="w-full bg-grey-lighter py-8">
                <div className="container mx-auto text-center px-8">
                    <p className="text-grey-dark mb-2 text-sm">This is a product of <span className="font-bold">Your Company</span></p>
                </div>
            </footer>
        </div>
    );
};

export default Register;