import React from 'react';
import { articleTree } from './Controller';
import ArticleCategory from './containers/ArticleCategory';

export default function HelpCenter() {
    return (
        <div className="help-center">
            <div className="help-center-container">
                <div className="help-center-container-wide-panel">
                    Help Center
                </div>
                <div className="help-center-container-anchors">
                    {Object.keys(articleTree).map((category, index) => (
                        <a
                            style={{
                                backgroundColor: articleTree[category].color
                            }}
                            className="help-center-container-anchors-category"
                            href={`#${category}`}
                            key={index}
                        >
                            {articleTree[category].categoryTitle}
                        </a>
                    ))}
                </div>

                {Object.keys(articleTree).map((category, index) => (
                    <ArticleCategory key={index} category={category} />
                ))}
            </div>
        </div>
    );
}
