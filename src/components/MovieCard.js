import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  return (
    <Card className="mb-4 cardBg" key={movie.id}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title className='text-white'>{movie.title}</Card.Title>
        <Card.Text className='text-white'>Rating: {(movie.vote_average).toFixed(1)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;