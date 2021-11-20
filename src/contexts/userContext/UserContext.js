import React,{createContext, useState} from "react";
export const UserContext=createContext();
import PropTypes from 'prop-types';

export default function UserContextProvider(props){
    const [user,setUser]=useState(null);
    return (
        <UserContext.Provider value={{ user,setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.any.isRequired,
};
