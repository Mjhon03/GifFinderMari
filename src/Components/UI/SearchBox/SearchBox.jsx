import React from 'react';
import './SearchBox.css';

export const SearchBox = ({wordSearch}) => {
  return (
    <div className='container_search_box'>
      <input className='search_box' type="search" placeholder='Write a word or phrase' onChange={wordSearch}/>
    </div>
  )
}
