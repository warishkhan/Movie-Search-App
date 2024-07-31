import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";
import { Card } from "react-bootstrap";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      )
      .then((response) => {
        setCast(response.data.cast);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="moviesDetails container ">
        <div className="">
          <div className="d-flex">
            <div className="m-2 p-0">
              <img
                height={200}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="mt-2 p-0">
              <p className="text-white">{movie.title}</p>
              <p className="text-white">Rating: {movie.vote_average}</p>
              <p className="text-white">
                <span>{movie.runtime}</span>{" "}
                {(movie && movie.genres) && movie.genres[0].name},{" "}
                {(movie && movie.genres) && movie.genres[1].name}
              </p>
              <p className="text-white">Release Date:{movie.release_date}</p>
            </div>
          </div>
          <div>
            <h2 className="text-white">OverView</h2>
            <p className="text-white">{movie.overview}</p>
          </div>
        </div>
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt={movie.title}
            height={"450px"}
            width={"400px"}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h2 className="text-white ms-5">Cast:</h2>
        <ul className="scrollable">
          {cast.slice(0, 6).map((actor, index) => (
            <Card className="mb-4 me-4 scrollCard cardBg" key={index}>
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              />
              <Card.Body>
                <Card.Title className="text-white">{(actor.name).substring(0,10)}</Card.Title>
                <Card.Text className="text-white">
                  Character: {(actor.character).substring(0,10)} / {(actor.original_name).substring(0,10)}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailPage;
