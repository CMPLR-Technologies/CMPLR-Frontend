import React from 'react'

const SearchResultItemContent = (props) => {
    const strSearch=props.res;
    const item="";
    return (
        <li className='search-result-content'>
           <i className='fas fa-search'></i> {strSearch} 
        </li>
    )
}

export default SearchResultItemContent
