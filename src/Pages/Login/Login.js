import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { jwt } from '../../utilities/APIRoutes';

const Login = () => {

    const { loginWithEmail } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        const { email, password } = data;
        // console.log(name, email, file, password);

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                const name = user.displayName;
                const email = user.email;
                handleJWT(name, email);
            }).catch(err => toast.error('register failed'));
    };


    //json web token

    const handleJWT = (name, email) => {

        axios.post(jwt, {
            name, email
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((result) => {
                localStorage.setItem('tourist-token', result.data.token);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Login </h1>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)} className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        {...register("email", {
                                            required: "email is Required"
                                        })}
                                        autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        {...register("password", {
                                            required: "password is Required"
                                        })}
                                        autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
                                </div>
                                <footer className="w-full bg-grey-lighter py-8">
                                    <div className="container mx-auto text-center px-8">
                                        <p className="text-grey-dark mb-2 text-sm">Don't any account please <Link to='/register'>Sign up</Link> <span className="font-bold"></span></p>
                                    </div>
                                </footer>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;