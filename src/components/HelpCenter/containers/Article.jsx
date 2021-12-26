import React from 'react';
import { useParams } from 'react-router-dom';
import SearchAndFilteringBasics from './Articles/SearchAndFilteringBasics';
import ManagingTimeZones from './Articles/ManagingTimeZones';
import ConnectingToTwitter from './Articles/ConnectingToTwitter';
import ChangingYourUsernameOrUrl from './Articles/ChangingYourUsernameOrUrl';
import BugBountyProgram from './Articles/BugBountyProgram';
import TaggingYourPosts from './Articles/TaggingYourPosts';
import Recommendations from './Articles/Recommendations';
import AppearingInSearchResults from './Articles/AppearingInSearchResults';
import TagAndPostContentFiltering from './Articles/TagAndPostContentFiltering';
import TopPosts from './Articles/TopPosts';
import DashboardPreferences from './Articles/DashboardPreferences';
import InformationForPostCreators from './Articles/InformationForPostCreators';
import InformationForPostSupporters from './Articles/InformationForPostSupporters';

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
                {article === 'Recommendations' && <Recommendations />}
                {article === 'AppearingInSearchResults' && (
                    <AppearingInSearchResults />
                )}
                {article === 'TagAndPostContentFiltering' && (
                    <TagAndPostContentFiltering />
                )}
                {article === 'TopPosts' && <TopPosts />}
                {article === 'DashboardPreferences' && <DashboardPreferences />}
                {article === 'InformationForPostSupporters' && (
                    <InformationForPostSupporters />
                )}
                {article === 'InformationForPostCreators' && (
                    <InformationForPostCreators />
                )}
            </div>
        </div>
    );
}
