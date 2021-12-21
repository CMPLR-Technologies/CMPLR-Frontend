import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext/UserContext';

const useRedirect = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/dashboard');
        }
    }, [user]);
};

export default useRedirect;
