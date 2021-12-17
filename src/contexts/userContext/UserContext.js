import React, { createContext, useState, useEffect,useContext } from 'react';
import PropTypes from 'prop-types';
export const UserContext = createContext();
import { Navigate } from 'react-router-dom';
export default function UserContextProvider(props) {
    const [user, setUser] = useState();
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

export function RequireAuth({ children }) {
    const { user } = useContext(UserContext);
  
    return user
      ? children
      : <Navigate to="/login" replace/>;
}

export function RequireUnAuth({ children }) {
    const { user } = useContext(UserContext);
  
    return !user
      ? children
      : <Navigate to="/dashboard" replace/>;
}
UserContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};

RequireAuth.propTypes = {
    children: PropTypes.any.isRequired
};

RequireUnAuth.propTypes = {
    children: PropTypes.any.isRequired
};
