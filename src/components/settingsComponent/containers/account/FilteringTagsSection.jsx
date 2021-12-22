import React, { useState } from 'react';
import FilteringSectionVersion1 from './FilteringTagsSectionVersion1';
import FilteringSectionVersion2 from './FilteringTagsSectionVersion2';
export default function FilteringTagsSection() {
    const [filteringVersion1, setFilteringVersion1] = useState(true);

    return (
        <div className="email" id="section">
            <div className="sub-section-left">
                <h3>Filtering</h3>
            </div>
            <div className="wrapper">
                <div
                    className="sub-section-right"
                    style={{ marginBottom: '20px' }}
                >
                    {filteringVersion1 ? (
                        <FilteringSectionVersion1
                            setFilteringVersion1={setFilteringVersion1}
                        />
                    ) : (
                        <FilteringSectionVersion2
                            setFilteringVersion1={setFilteringVersion1}
                        />
                    )}
                </div>
                <br />
            </div>
        </div>
    );
}
