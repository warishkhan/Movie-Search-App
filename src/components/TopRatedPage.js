import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopRatedMovies, setPage } from '../actions/movieActions';
import MovieList from './MovieList';

const TopRatedPage = () => {
  const dispatch = useDispatch();
  const { movies, page, totalPages, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <MovieList
        movies={movies}
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TopRatedPage;
