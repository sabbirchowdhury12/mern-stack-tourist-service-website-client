import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);

    const handleLogout = () => {
        logout();
    };

    console.log(user);

    const menu = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/blog'
        },
        {
            name: 'Blog',
            path: '/blog'
        },
        {
            name: 'Contact',
            path: '/contact'
        }
    ];
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 z-10">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to='/'>
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                menu.map((m, ind) => {
                                    return (
                                        <NavLink key={ind} className={({ isActive }) =>
                                            isActive ? "navStyle" : "navTextStyle"
                                        } to={m.path}

                                        ><span className='block mt-5 md:mt-0'>{m.name}</span></NavLink>
                                    );
                                })
                            }
                            {
                                user && user.uid &&
                                <NavLink className={({ isActive }) =>
                                    isActive ? "navStyle" : "navTextStyle"} to='/contact'><span className='block mt-5 md:mt-0'>Service</span></NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <div className={`items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 pb-4  md:pb-0 font-bold text-xs ${navbar ? "block" : "hidden"
                    }`}>
                    {
                        user && user.uid ?
                            <button onClick={handleLogout}>Logout</button> :
                            <Link to='/register'> <button>Login or Sign Up</button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;