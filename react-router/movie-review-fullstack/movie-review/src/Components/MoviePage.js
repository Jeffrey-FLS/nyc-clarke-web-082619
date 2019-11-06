import React from 'react';
import { Link } from 'react-router-dom';

function MoviePage(props) {
  let selectedMovieId = props.match.params.id;
  let selectedMovie = props.movies.find(movie => movie.id === parseInt(selectedMovieId))

  function renderSingleReview(review) {
    return (
      <div key={review.id} className="review-box">
        <div>{review.stars > 0 ? "⭐️".repeat(review.stars) : "👎🏽"}</div>
        <div>{review.content}</div>
        <div className="review-author">According to {review.author_name}</div>
      </div>
    )
  }

  function renderReviews() {
    return selectedMovie.reviews.length ? selectedMovie.reviews.map(review => renderSingleReview(review)) : "No reviews yet"
  }

  function renderMovieInfo(){
    return (
      <>
        <img alt="movie poster" src={selectedMovie ? selectedMovie.img : ""} />
        <div className="movie-info">
            <h2>{selectedMovie.title}</h2>
            <h4>{selectedMovie.director}</h4>
            <div>{selectedMovie.year}</div>
        </div>
        <div className="reviews-container">
          <h2>Reviews</h2>
          {renderReviews()}
        </div>
      </>
    )
  }

  return (
    <div className="movie-page">
        <Link to="/movies"><div className="back-button">⬅️</div></Link>
        {/* make sure selectedMovie isn't null before you try to render anything */}
        {selectedMovie && renderMovieInfo()} 
    </div>
  );
}

export default MoviePage;

