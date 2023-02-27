import { useContext } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PrivateRouteYourPosts = () => {
    let {user} = useContext(AuthContext);
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouteYourPosts;