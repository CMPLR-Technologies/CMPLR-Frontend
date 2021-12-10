import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContextProvider from '../../contexts/userContext/UserContext';

export default function MockedComponent(props) {
    const { component } = props;
    return (
        <BrowserRouter>
            <UserContextProvider>{component}</UserContextProvider>
        </BrowserRouter>
    );
}

MockedComponent.propTypes = {
    component: PropTypes.element
};
