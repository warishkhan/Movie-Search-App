import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';

export const fetchMoviesSuccess = (movies, totalPages) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  payload: {
    results: movies,
    total_pages: totalPages,
  },
});

export const fetchMovieSuccess = (movie) => ({
  type: 'FETCH_MOVIE_SUCCESS',
  payload: movie,
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  payload: searchTerm,
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  payload: page,
});

export const fetchPopularMovies = (page = 1) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  dispatch(fetchMoviesSuccess(response.data.results, response.data.total_pages));
};

export const fetchTopRatedMovies = (page = 1) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  dispatch(fetchMoviesSuccess(response.data.results, response.data.total_pages));
};

export const fetchUpcomingMovies = (page = 1) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  dispatch(fetchMoviesSuccess(response.data.results, response.data.total_pages));
};

export const fetchMovie = (id) => async (dispatch) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  dispatch(fetchMovieSuccess(response.data));
};

export const searchMovies = (searchTerm) => async (dispatch, getState) => {
  const { movie } = getState();
  if (movie) {
    const { page } = movie;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}`
    );
    dispatch(fetchMoviesSuccess(response.data.results, response.data.total_pages));
  } else {
    console.error("Movie state is undefined");
  }
};
