import React from 'react';
import { useParams } from 'react-router-dom';
import SearchAndFilteringBasics from './Articles/SearchAndFilteringBasics';
import ManagingTimeZones from './Articles/ManagingTimeZones';
import ConnectingToTwitter from './Articles/ConnectingToTwitter';
import ChangingYourUsernameOrUrl from './Articles/ChangingYourUsernameOrUrl';
import BugBountyProgram from './Articles/BugBountyProgram';
import TaggingYourPosts from './Articles/TaggingYourPosts';

export default function Article() {
    const { article } = useParams();

    return (
        <div className="help-center">
            <div className="help-center-container">
                {article === 'SearchAndFilteringBasics' && (
                    <SearchAndFilteringBasics />
                )}
                {article === 'ManagingTimeZones' && <ManagingTimeZones />}
                {article === 'ConnectingToTwitter' && <ConnectingToTwitter />}
                {article === 'BugBountyProgram' && <BugBountyProgram />}

                {article === 'ChangingYourUsernameOrUrl' && (
                    <ChangingYourUsernameOrUrl />
                )}
                {article === 'TaggingYourPosts' && <TaggingYourPosts />}
            </div>
        </div>
    );
}
