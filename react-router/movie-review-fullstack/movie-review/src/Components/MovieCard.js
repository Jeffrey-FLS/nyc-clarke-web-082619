import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  let {id, title, director, year, num_reviews, img} = props.movie;

  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
          <img alt="movie poster" src={img} />
          <div className="movie-info">
              <h2>{title}</h2>
              <h4>{director}</h4>
              <div>{year}</div>
              <div>{num_reviews} Review{num_reviews > 1 && "s"}</div>
          </div>
      </div>
    </Link>
  );
}

export default MovieCard;
