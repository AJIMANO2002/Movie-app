import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded-lg"
        />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-gray-600">{movie.Year} | {movie.Genre}</p>
          <p className="mt-2">{movie.Plot}</p>
          <p className="mt-2"><strong>Director:</strong> {movie.Director}</p>
          <p className="mt-2"><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mt-2"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;