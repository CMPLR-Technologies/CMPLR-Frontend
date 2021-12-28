import React from 'react';
import SearchResultItemContent from './SearchResultItemContent';
import SearchResultItemBlog from './SearchResultItemBlog';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SearchResult(props) {
    let { search, closeOpenSearch, searchResults } = props;
    /*let searchContentArr = ['ahmed', 'ahmed 2', 'ahmedtmp', 'ahmed ahmed'];
    let searchBlogArr = [
        { blogName: 'ahmed123', name: 'ahmed' },
        { blogName: 'ahmed123', name: 'ahmed' },
        { blogName: 'ahmed123', name: 'ahmed' },
        { blogName: 'ahmed123', name: 'ahmed' },
        { blogName: 'ahmed123', name: 'ahmed' },
        { blogName: 'ahmed123', name: 'ahmed' }
    ];*/
    // let {searchResults}=props;
    /*let searchResults = {
        tags: [
            {
                name: 'Addison Walker',
                slug: 'addison-walker'
            },
            {
                name: 'Angelina Beer V',
                slug: 'angelina-beer-v'
            },
            {
                name: 'Aniya Koch',
                slug: 'aniya-koch'
            },
            {
                name: 'Bailey Witting',
                slug: 'bailey-witting'
            },
            {
                name: 'Bobbie Gutmann MD',
                slug: 'bobbie-gutmann-md'
            }
        ],
        blogs: [
            {
                id: 4,
                blog_name: 'aut',
                title: 'Dolly Parisian II',
                settings: {
                    blog_id: 4,
                    avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                    avatar_shape: 'circle'
                }
            },
            {
                id: 1,
                blog_name: 'explicabo',
                title: 'Claudine Volkman',
                settings: {
                    blog_id: 1,
                    avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                    avatar_shape: 'circle'
                }
            },
            {
                id: 10,
                blog_name: 'nam',
                title: 'Dr. Jeremy Kertzmann I',
                settings: {
                    blog_id: 10,
                    avatar: 'https://assets.tumblr.com/images/default_avatar/cone_closed_128.png',
                    avatar_shape: 'circle'
                }
            }
        ]
    };*/
    return (
        <div className="search-result">
            <ul>
                <Link to={`taged/${props.search}`} onClick={closeOpenSearch}>
                    <li className="search-result-go">
                        Go to #<span className="color">{props.search}</span>
                    </li>
                </Link>
                {searchResults.tags &&
                    searchResults.tags?.map((item, index) => (
                        <SearchResultItemContent
                            key={index}
                            res={item}
                            search={search}
                            closeOpenSearch={closeOpenSearch}
                        />
                    ))}
                <h3 className="search-result-dis">Tumblrs</h3>
                <Link to={`blog/${props.search}`} onClick={closeOpenSearch}>
                    <li className="search-result-go">
                        Go to @<span className="color">{props.search}</span>
                    </li>
                </Link>
                {searchResults?.blogs &&
                    searchResults?.blogs?.map((item, index) => (
                        <SearchResultItemBlog
                            key={index}
                            blogName={item?.blog_name}
                            blogId={item?.settings?.blog_id}
                            title={item?.title}
                            img={item?.settings?.avatar}
                            imgShape={item?.settings?.avatar_shape}
                            search={search}
                            closeOpenSearch={closeOpenSearch}
                        />
                    ))}
            </ul>
        </div>
    );
}

SearchResult.propTypes = {
    closeOpenSearch: PropTypes.func,
    search: PropTypes.string,
    searchResults: PropTypes.array
};
