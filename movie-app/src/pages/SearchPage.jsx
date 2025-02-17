import React, { useState } from 'react';
import { searchMovies } from '../services/api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  
  const handleSearch = async (searchQuery, pageNum = 1) => {
    setError('');
    setQuery(searchQuery);
    setPage(pageNum);
    const data = await searchMovies(searchQuery, pageNum);
    if (data && data.Response === 'True') {
      setMovies(data.Search);
    } else {
      setMovies([]);
      setError(data?.Error || 'No results found.');
    }
  };

  
  const handleNextPage = () => handleSearch(query, page + 1);
  const handlePrevPage = () => {
    if (page > 1) handleSearch(query, page - 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <MovieList movies={movies} />
      <div className="mt-4 flex justify-center">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 mx-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SearchPage;
