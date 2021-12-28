import React, { useState } from 'react';
import FilteringSectionVersion1 from './FilteringSectionVersion1';
import FilteringSectionVersion2 from './FilteringSectionVersion2';
export default function FilteringSection() {
    const [filteringTagsVersion1, setFilteringTagsVersion1] = useState(true);
    const [filteringContentVersion1, setFilteringContentVersion1] =
        useState(true);

    return (
        <>
            <div className="email" id="section">
                <div className="sub-section-left">
                    <h3>Filtering Tags</h3>
                </div>
                <div className="wrapper">
                    <div
                        className="sub-section-right"
                        id="sub-section-right-filtering"
                        style={{ marginBottom: '20px' }}
                    >
                        {filteringTagsVersion1 ? (
                            <FilteringSectionVersion1
                                setFilteringTagsVersion1={
                                    setFilteringTagsVersion1
                                }
                                setFilteringContentVersion1={
                                    setFilteringContentVersion1
                                }
                                filteringType="filteredTags"
                            />
                        ) : (
                            <FilteringSectionVersion2
                                setFilteringTagsVersion1={
                                    setFilteringTagsVersion1
                                }
                                setFilteringContentVersion1={
                                    setFilteringContentVersion1
                                }
                                filteringType="filteredTags"
                            />
                        )}
                    </div>
                    <br />
                </div>
            </div>
            <div className="email" id="section">
                <div className="sub-section-left">
                    <h3>Filtering Content</h3>
                </div>
                <div className="wrapper">
                    <div
                        className="sub-section-right"
                        id="sub-section-right-filtering"
                        style={{ marginBottom: '20px' }}
                    >
                        {filteringContentVersion1 ? (
                            <FilteringSectionVersion1
                                setFilteringTagsVersion1={
                                    setFilteringTagsVersion1
                                }
                                setFilteringContentVersion1={
                                    setFilteringContentVersion1
                                }
                                filteringType="filteredContent"
                            />
                        ) : (
                            <FilteringSectionVersion2
                                setFilteringTagsVersion1={
                                    setFilteringTagsVersion1
                                }
                                setFilteringContentVersion1={
                                    setFilteringContentVersion1
                                }
                                filteringType="filteredContent"
                            />
                        )}
                    </div>
                    <br />
                </div>
            </div>
        </>
    );
}
