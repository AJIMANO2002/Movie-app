import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((movie) => (
        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
              alt={movie.Title}
              className="w-full h-64 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm font-semibold">{movie.Title}</h3>
              <p className="text-xs text-gray-600">{movie.Year}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;