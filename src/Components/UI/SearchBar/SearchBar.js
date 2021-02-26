import React from 'react';

import './SearchBar.scss';

const SearchBar = (props) => {

  return (
    <input 
     className="SearchBar__Input"
     key="random1"
     value={props.keyword}  
     placeholder={"search recipe"}
     onChange={(e) => props.setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
