import React, { useEffect, useState } from 'react';
import TitleSection from './TitleSection';
import CreateSection from './CreateSection';
import PrivacySection from './PrivacySection';
import UrlSection from './UrlSection';
import TextSection from './TextSection';
import PropsTypes from 'prop-types';
// import { createBlog } from '../../Service';
export default function CreateBlog({ setWithNav }) {
    useEffect(() => {
        setWithNav(false);
    }, []);
    const [checkBox, setCheckBox] = useState(false);
    const [errorMsg, setErrorMsg] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="settings">
            <div className="container1">
                <div className="subcontainer">
                    <h2 className="title">Create a new blog</h2>
                    <div>
                        <TextSection />
                        {errorMsg.length > 0 && (
                            <div className="errors-box">
                                <div className="error-msg">
                                    {errorMsg.map((error, index) => (
                                        <p key={index}>{error}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                        <TitleSection title={title} setTitle={setTitle} />
                        <UrlSection url={url} setUrl={setUrl} />
                        <PrivacySection
                            checkBox={checkBox}
                            setCheckBox={setCheckBox}
                            password={password}
                            setPassword={setPassword}
                        />
                        <CreateSection
                            title={title}
                            url={url}
                            checkBox={checkBox}
                            password={password}
                            errorMsg={errorMsg}
                            setErrorMsg={setErrorMsg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
CreateBlog.propTypes = {
    setWithNav: PropsTypes.func.isRequired
};
