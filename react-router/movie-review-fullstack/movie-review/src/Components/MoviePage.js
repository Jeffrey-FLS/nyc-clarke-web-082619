import React from 'react';
import { Link } from 'react-router-dom';
import NewReviewForm from './NewReviewForm';
import { API_BASE } from '../constants';

class MoviePage extends React.Component {
  state = {
    addingReview: false
  }

  toggleNewReviewForm = () => {
    this.setState((prevState) => ({ addingReview: !prevState.addingReview }))
  }

  deleteReview = (id) => {
    // ONLY AN ADMIN USER SHOULD BE ABLE TO DO THIS
    if (this.props.isAdmin){
      fetch(`${API_BASE}/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Accepts": "application/json"
        }
      })
      .then(res => res.json())
      .then(console.log) 
      // all it does for now is console.log the id which the backend returns when successful
    }
  }

  renderSingleReview = (review) => {
    return (
      <div key={review.id} className="review-box">
        <div>{review.stars > 0 ? "⭐️".repeat(review.stars) : "👎🏽"}</div>
        <div>{review.content}</div>
        <div>
          <span className="review-author">According to {review.author_name}</span>
          <span className="review-trash" onClick={() => this.deleteReview(review.id)}> &emsp;  🚮</span>
        </div>
        
      </div>
    )
  }

  renderReviews = (selectedMovie) => {
    return selectedMovie.reviews.length ? selectedMovie.reviews.map(review => this.renderSingleReview(review)) : "No reviews yet"
  }

  renderMovieInfo = (selectedMovie) => {
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
          <button onClick={this.toggleNewReviewForm}>{this.state.addingReview ? "Close Form" : "Open Form"}</button>
          {this.state.addingReview && <NewReviewForm movieId={this.props.match.params.id} toggleNewReviewForm={this.toggleNewReviewForm}/>}
          {this.renderReviews(selectedMovie)}
        </div>
      </>
    )
  }

  render() {
    let selectedMovieId = this.props.match.params.id;
    let selectedMovie = this.props.movies.find(movie => movie.id === parseInt(selectedMovieId))

    return (
      <div className="movie-page">
          <Link to="/movies"><div className="back-button">⬅️</div></Link>
          {/* make sure selectedMovie isn't null before you try to render anything */}
          {selectedMovie && this.renderMovieInfo(selectedMovie)} 
      </div>
    );
  }
}

export default MoviePage;

