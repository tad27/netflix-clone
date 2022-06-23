const TMDB_API_KEY = "51718475cfe8a4a1cabcbb1d1c7d78fc";

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  // latest: `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
};

export default requests;
