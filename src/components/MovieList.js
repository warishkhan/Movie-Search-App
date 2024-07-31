import React from 'react';
import { Link } from 'react-router-dom';
import {  Pagination } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies, currentPage, totalPages, onPageChange }) => {

    if (!Array.isArray(movies)) {
    return <p>No movies available</p>;
  }

  const renderMovies = () => {

  return (
    <div className="container mt-5">
      <div className="row">
        {movies?.map((movie) => (
          <div className="col-md-3" key={movie.id}>
            <Link className='text-decoration-none' to={`/movie/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

}

  const renderPagination = () => (
    <Pagination className='d-flex justify-content-center align-items-center'>
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Pagination.Prev>
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Pagination.Next>
    </Pagination>
  );

  return (
    <div>
      <div className="d-flex flex-wrap">
        {renderMovies()}
      </div>
      {totalPages > 1 && renderPagination()}
    </div>
  );
};


export default MovieList;
