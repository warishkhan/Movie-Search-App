import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import axios from 'axios';

const SearchPage = ({search}) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
     .get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${search}&page=${page}`)
     .then(response => {
        setMovies(response.data.results);
      })
     .catch(error => {
        console.error(error);
      });
  }, [page,search]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
     {
      movies.length !== 0 ?  <MovieList movies={movies} />: <p style={{
        color:"red",
        textAlign:'center',
        marginTop:50
      }}>You Are on The search Page. Please start search your movies!!!</p>
     }
      <div className='d-flex justify-content-center align-items-center my-3'>
        <button className='btn btn-success m-2' onClick={() => handlePageChange(page - 1)}>Previous</button>
        <button className='btn btn-success' onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default SearchPage;