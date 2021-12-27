import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import PropTypes from 'prop-types';

export default function StyledDesktopNotification(props) {
    const { title, body } = props;
    let hideNotif = title === '';

    if (!hideNotif) {
        toast.info(<Display />);
    }

    function Display() {
        return (
            <div>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        );
    }

    return (
        <ToastContainer
            autoClose={6000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
        />
    );
}

StyledDesktopNotification.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
};
