import React,{useState} from 'react'
import "../../../styles//scss/navbarComponent/Navbar.css";
const SearchBar = () => {
    const [isHover,setIsHover] = useState(false);
    const changeHover=()=>{
        setIsHover(!isHover);
    }
    return (
        <div className={`search ${isHover?'focus':''}`}>
            <div className='search-icon'>
                <i class="fas fa-search"></i>
            </div>
            <input onFocus={changeHover} onBlur={changeHover} focus className='search-input' placeholder='Search Tumblr'></input>
          </div>
    )
}

export default SearchBar
