import React from 'react';

import './SearchBar.css';

const SearchBar = ({keyword, setKeyword}) => {

  return (
    <input 
     className="SearchBar__Input"
     key="random1"
     value={keyword}  
     placeholder={"search recipe"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar
