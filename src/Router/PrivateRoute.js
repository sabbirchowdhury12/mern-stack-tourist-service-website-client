import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    else {
        return children;
    }
};

export default PrivateRoute;