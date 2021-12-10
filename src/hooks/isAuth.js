import {  useContext } from 'react';
import { UserContext } from '../contexts/userContext/UserContext';

const isAuth = () => {
    const user = useContext(UserContext)?.user;
    
    return user ? true : false;
};

export default isAuth;
