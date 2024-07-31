const initialState = {
  movies: [],
  selectedMovie: null,
  searchTerm: "",
  page: 1,
  totalPages: 1,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
      };
    case "FETCH_MOVIE_SUCCESS":
      return {
        ...state,
        selectedMovie: action.payload,
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
