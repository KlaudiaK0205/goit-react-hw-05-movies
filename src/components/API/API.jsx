import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c24852b03acfe4951ef3115a9d02ad29';

export const getTrending = async () => {
  const { data } = await axios.get(
        `${API_URL}/trending/movie/week?api_key=${API_KEY}`
      );
  return data.results;
};

export const fetchFilmById = async id => {
  const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const fetchMovieQuery = async query => {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=true`
  );
  return response.data.results;
};
