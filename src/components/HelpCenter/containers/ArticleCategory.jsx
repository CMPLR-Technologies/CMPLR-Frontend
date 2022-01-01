import React from 'react';
import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { articleTree } from '../Controller';

export default function ArticleCategory(props) {
    let { category } = props;
    const categoryTree = articleTree[category];
    return (
        <div className="help-center-container-category" id={category}>
            <NavLink
                to={`/help/${category}`}
                className="help-center-container-category-header"
                style={{ backgroundColor: categoryTree.color }}
            >
                {categoryTree.categoryTitle}
            </NavLink>
            <div className="help-center-container-category-content">
                {categoryTree.articles.map((article, index) => (
                    <NavLink
                        to={`/help/${category}/${article.split(' ').join('')}`}
                        key={index}
                        className="help-center-container-category-content-link"
                    >
                        {article}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

ArticleCategory.propTypes = {
    category: PropTypes.string
};
