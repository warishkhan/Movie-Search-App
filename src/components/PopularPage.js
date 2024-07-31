import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, setPage } from '../actions/movieActions';
import MovieList from './MovieList';

const PopularPage = () => {
  const dispatch = useDispatch();
  const { movies, page, totalPages } = useSelector((state) => state.movies);
  
  useEffect(() => {
    dispatch(fetchPopularMovies(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      <MovieList
        movies={movies}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PopularPage;
