import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const UserContext = createContext();

export default function UserContextProvider(props) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}

UserContextProvider.propTypes = {
    children: PropTypes.any.isRequired
};
