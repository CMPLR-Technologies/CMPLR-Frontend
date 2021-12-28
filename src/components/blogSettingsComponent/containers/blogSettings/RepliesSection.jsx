import React, { useContext } from 'react';
import { BlogSettingsContext } from '../../../../contexts/blogSettingsContext/BlogSettingsContext';
import { updatePropertyInDb } from '../../Service';
import { useParams } from 'react-router-dom';
export default function RepliesSection() {
    const { updateProperty, replies } = useContext(BlogSettingsContext);
    const user = JSON.parse(localStorage.getItem('user'));
    const { blogName } = useParams();
    return (
        <div className="security" id="section" data-testid="section">
            <div className="sub-section-left" data-testid="sub-section-left">
                <h3>Replies</h3>
            </div>
            <div className="sub-section-right" data-testid="sub-section-right">
                <div
                    className="sub-section-right-up"
                    data-testid="sub-section-right-up"
                >
                    {/* //TODO update value with the appropriate value */}
                    <select
                        name="options"
                        id="options"
                        onChange={e => {
                            updatePropertyInDb(
                                user?.token,
                                blogName,
                                updateProperty,
                                'replies',
                                e.target.value
                            );
                        }}
                        data-testid="options"
                    >
                        <option value="everyone" data-testid="option1">
                            Every one can reply
                        </option>
                        <option
                            value="Only Cmblrs you follow can reply"
                            data-testid="option2"
                        >
                            Only Cmblrs you follow can reply
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}
