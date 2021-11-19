import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MockedComponent(props) {
    const { component } = props;
    return <BrowserRouter>{component}</BrowserRouter>;
}

MockedComponent.propTypes = {
    component: PropTypes.element
};
