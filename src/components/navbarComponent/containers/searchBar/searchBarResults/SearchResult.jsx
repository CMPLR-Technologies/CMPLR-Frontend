import React from "react";
import SearchResultItemContent from "./SearchResultItemContent";
import SearchResultItemBlog from "./SearchResultItemBlog";
const SearchResult = (props) => {
  let searchContentArr = ["ahmed", "ahmed 2", "ahmedtmp", "ahmed ahmed"];
  let searchBlogArr = [
    { blogName: "ahmed123", name: "ahmed" },
    { blogName: "ahmed123", name: "ahmed" },
    { blogName: "ahmed123", name: "ahmed" },
    { blogName: "ahmed123", name: "ahmed" },
    { blogName: "ahmed123", name: "ahmed" },
    { blogName: "ahmed123", name: "ahmed" },
  ];
  const darkTheme = props.theme == "dark" ? true : false;
  return (
    <div className={`search-result  ${darkTheme?"dark ":""} `}>
      <ul>
        <li className="search-result-go">
          Go to #<span className="color">{props.search}</span>
        </li>
        {searchContentArr.map((item) => (
          <SearchResultItemContent res={item} search={props.search} />
        ))}
        <h3 className="search-result-dis">Tumblrs</h3>
        <li className="search-result-go">
          Go to @<span className="color">{props.search}</span>
        </li>
        {searchBlogArr.map((item) => (
          <SearchResultItemBlog
            blogName={item.blogName}
            name={item.name}
            search={props.search}
          />
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
