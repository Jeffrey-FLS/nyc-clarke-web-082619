import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';
import { Route, Switch } from 'react-router-dom';

class MovieContainer extends React.Component {
  state = {
    selectedMovie: null
  }

  selectMovie = (id) => {
    this.setState({
      selectedMovie: id
    })
  }

  render(){
   
    return (
      <div className="movie-container">
        <Switch>
          <Route 
            path="/movies/:id"
            render={(routerProps) => <MoviePage isAdmin={this.props.isAdmin} handleBack={this.selectMovie} movies={this.props.movies} {...routerProps}/>}
          />
          <Route 
              path="/movies"
              render={
                () => this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)
              }
            />
        </Switch>
      </div>
    );
  }
}

export default MovieContainer;
