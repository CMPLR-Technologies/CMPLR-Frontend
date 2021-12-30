import React from 'react';
import AuthBtn from '../../../../components/partials/AuthBtn';
import { createBlog } from '../../Service';
import PropsTypes from 'prop-types';
// import { UserContext } from '../../../contexts/userContext/UserContext';
import { useNavigate } from 'react-router-dom';
export default function CreateSection({
    title,
    url,
    checkBox,
    password,
    errorMsg,
    setErrorMsg,
    setWithNav
}) {
    // const { setUser } = useContext(UserContext);
    // useRedirect();
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="security" id="section-create-blog-btns">
            <div
                className="delete"
                id="section"
                style={{ borderBottom: 'none' }}
            >
                <AuthBtn
                    dataTestid="cancel-btn"
                    className="button"
                    id="create-blog"
                    text={checkBox ? 'Create a private blog' : 'Create a blog'}
                    handleClick={() => {
                        createBlog(
                            title,
                            url,
                            checkBox,
                            password,
                            errorMsg,
                            setErrorMsg,
                            history,
                            user?.token,
                            setWithNav
                        );
                    }}
                ></AuthBtn>
                <AuthBtn
                    dataTestid="cancel-btn"
                    id="cancel-btn"
                    className="button"
                    text="Cancel"
                    handleClick={() => {
                        // setUser
                        setWithNav(true);
                        history('/dashboard');
                    }}
                ></AuthBtn>
            </div>
        </div>
    );
}
CreateSection.propTypes = {
    title: PropsTypes.string.isRequired,
    url: PropsTypes.string.isRequired,
    checkBox: PropsTypes.bool.isRequired,
    password: PropsTypes.string.isRequired,
    errorMsg: PropsTypes.array.isRequired,
    setErrorMsg: PropsTypes.func.isRequired,
    setWithNav: PropsTypes.func.isRequired
};
