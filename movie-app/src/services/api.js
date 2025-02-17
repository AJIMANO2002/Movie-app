import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = 'c0bb6c04'; 
export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: query,
        page: page,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};


export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: id,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};