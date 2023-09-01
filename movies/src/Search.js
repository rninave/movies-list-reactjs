import React from 'react'
import { useGlobalContext } from './context';
const Search = () => {
  const { query, setQuery} = useGlobalContext();

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='d-flex justify-content-center  align-items-center mt-5'>
        <input type="text" className='rounded px-2 w-100' value={query} onChange={(e) => setQuery(e.target.value)} />
      </form>
    </>

  )
}

export default Search;