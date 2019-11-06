import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/movies')
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data
      })
    })
  }

  render(){
    return (
      <div className="App">
        <NavBar /> 
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" render={(routerProps) => <MovieContainer movies={this.state.movies} {...routerProps}/>} />
        </Switch>
      </div>
    )
  }
}

export default App;
