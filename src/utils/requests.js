const TMDB_API_KEY = "51718475cfe8a4a1cabcbb1d1c7d78fc";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
  popular: `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  netflixOriginals: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_networks=213`,
  comedyMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=35`,
  romanceMovies: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=10749`,
  documentaries: `${BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=99`,
};

export default requests;
