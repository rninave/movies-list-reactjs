import React from 'react';
import { useGlobalContext } from './context';
import './search.css'

const Search = () => {
  const { query, setQuery, movie, setMovie } = useGlobalContext();

  const sortDataAlphabeticallyAtoZ = () => {
    return movie.slice().sort((a, b) => {
      return a.Title.localeCompare(b.Title);
    });
  };

  const sortDataAlphabeticallyZtoA = () => {
    return movie.slice().sort((a, b) => {
      return b.Title.localeCompare(a.Title);
    });
  };

  const sortDataOldToNewYear = () => {
    return movie.slice().sort((a, b) => {
      return parseInt(a.Year) - parseInt(b.Year);
    });
  };

  const sortDataNewToOldYear = () => {
    return movie.slice().sort((a, b) => {
      return parseInt(b.Year) - parseInt(a.Year);
    });
  };

  const handleSort = (value) => {
    let sortedData;
    switch (value) {
      case 'asc':
        sortedData = sortDataAlphabeticallyAtoZ();
        break;
      case 'desc':
        sortedData = sortDataAlphabeticallyZtoA();
        break;
      case 'oldToNew':
        sortedData = sortDataOldToNewYear();
        break;
      case 'newToOld':
        sortedData = sortDataNewToOldYear();
        break;
      default:
        sortedData = movie;
    }
    setMovie(sortedData);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='d-flex justify-content-center align-items-center mt-5'>
        <input type="text" className='rounded px-2 w-100' value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className='rounded p-2-px border-solid-red' onChange={(e) => handleSort(e.target.value)}>
          <option  value="asc">Sort A to Z</option>
          <option value="desc">Sort Z to A</option>
          <option value="oldToNew">Old Year to New Year</option>
          <option value="newToOld">New Year to Old Year</option>
        </select>
      </form>
    </>
  );
};

export default Search;
