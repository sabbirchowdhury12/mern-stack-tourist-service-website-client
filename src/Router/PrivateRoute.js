import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    // if (loading) {
    //     return <div className='h-screen text-center mt-20'>
    //         <progress className="progress w-56  "></progress>
    //     </div>;
    // }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default PrivateRoute;