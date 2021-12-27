import React from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import ArticleCategory from './ArticleCategory';

export default function ArticleCategoryIndividual() {
    const { category } = useParams();
    return (
        <div className="help-center">
            <div className="help-center-container">
                <ArticleCategory category={category} />
            </div>
        </div>
    );
}

ArticleCategoryIndividual.propTypes = {
    category: PropTypes.string
};
