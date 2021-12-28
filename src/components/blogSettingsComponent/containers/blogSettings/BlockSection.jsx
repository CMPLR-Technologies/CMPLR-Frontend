import React, { useState } from 'react';
import BlockSectionVersion1 from './BlockSectionVersion1';
import BlockSectionVersion2 from './BlockSectionVersion2';
export default function BlockSection() {
    const [BlocksVersion1, setBlocksVersion1] = useState(true);
    return (
        <>
            <div className="email" id="section">
                <div className="sub-section-left">
                    <h3>Blocks</h3>
                </div>
                <div className="wrapper">
                    <div
                        className="sub-section-right"
                        id="sub-section-right-filtering"
                        style={{ marginBottom: '20px' }}
                    >
                        {BlocksVersion1 ? (
                            <BlockSectionVersion1
                                setBlocksVersion1={setBlocksVersion1}
                            />
                        ) : (
                            <BlockSectionVersion2
                                setBlocksVersion1={setBlocksVersion1}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
