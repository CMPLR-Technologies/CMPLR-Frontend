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
import ThemeBasics from './Articles/ThemeBasics';
import GoogleAnalytics from './Articles/GoogleAnalytics';
import CustomHtml from './Articles/CustomHtml';
import Reblogs from './Articles/Reblogs';
import MakingAPost from './Articles/MakingAPost';
import PinnedPosts from './Articles/PinnedPosts';
import BlogPages from './Articles/BlogPages';

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
                {article === 'ThemeBasics' && <ThemeBasics />}{' '}
                {article === 'GoogleAnalytics' && <GoogleAnalytics />}{' '}
                {article === 'CustomHtml' && <CustomHtml />}{' '}
                {article === 'Reblogs' && <Reblogs />}{' '}
                {article === 'MakingAPost' && <MakingAPost />}{' '}
                {article === 'PinnedPosts' && <PinnedPosts />}{' '}
                {article === 'BlogPages' && <BlogPages />}
            </div>
        </div>
    );
}
