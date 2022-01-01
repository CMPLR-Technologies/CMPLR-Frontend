import React, { useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
export default function VisibilitySection() {
    const { updateProperty, dashboardHide, searchHide } =
        useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    return (
        <div className="security" id="section" data-testid="section">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Visibility</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <div
                    className="sub-section-right-up"
                    data-testid="sub-section-right-up"
                >
                    <div className="switch-div" data-testid="switch-div">
                        <label className="switch" data-testid="switch">
                            <input
                                type="checkbox"
                                checked={dashboardHide}
                                onChange={() => {
                                    updatePropertyInDb(
                                        user?.token,
                                        blogName,
                                        updateProperty,
                                        'dashboardHide',
                                        !dashboardHide
                                    );
                                }}
                                data-testid="switch-input-vs-ts"
                            ></input>
                            <span
                                className="slider round"
                                data-testid="slider"
                            ></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">Hide {blogName}</p>
                        <p className="un-bold-text">
                            This Cmplr will only be viewable within the Cmplr
                            dashboard.
                        </p>
                    </div>
                </div>
                <div
                    className="sub-section-right-up"
                    data-testid="sub-section-right-up"
                >
                    <div className="switch-div" data-testid="switch-div">
                        <label className="switch" data-testid="switch">
                            <input
                                type="checkbox"
                                checked={searchHide}
                                onChange={() => {
                                    updatePropertyInDb(
                                        user?.token,
                                        blogName,
                                        updateProperty,
                                        'searchHide',
                                        !searchHide
                                    );
                                }}
                                data-testid="switch-input"
                            ></input>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <div className="text">
                        <p className="bold-text">
                            Hide {blogName} from search results
                        </p>
                        <p className="un-bold-text">
                            It'll be hidden from Cmplr searches, and from
                            external search engines like Google or Yahoo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
