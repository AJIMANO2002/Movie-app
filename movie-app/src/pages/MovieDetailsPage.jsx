import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setError('');
      const data = await getMovieDetails(id);
      if (data && data.Response === 'True') {
        setMovie(data);
      } else {
        setMovie(null);
        setError(data?.Error || 'Movie details not found.');
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      {movie && <MovieDetails movie={movie} />}
    </div>
  );
};

export default MovieDetailsPage;