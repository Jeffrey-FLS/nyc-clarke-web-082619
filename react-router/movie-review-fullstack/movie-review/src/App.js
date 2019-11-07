import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    movies: [],
    currentUser: null
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
  

  setUser = (user) => {
    console.log('setting user ', user)
    this.setState({
      currentUser: user
    }, () => { user ? this.props.history.push('/movies') : this.props.history.push('/login') })
  }

  render(){
    return (
      <div className="App">
        <NavBar user={this.state.currentUser} setUser={this.setUser}/> 
        <Switch>
          <Route path="/login" render={(routerProps) => <Login setUser={this.setUser} {...routerProps}/>} />
          <Route path="/signup" render={(routerProps) => <Signup setUser={this.setUser} {...routerProps}/>} />
          <Route path="/movies" render={(routerProps) => <MovieContainer movies={this.state.movies} {...routerProps}/>} />
          <Route path="/" render={(routerProps) => <div><h1>Welcome to Flatiron Tomatoes</h1><div onClick={() => routerProps.history.push('/movies')}>Click to enter</div></div>} />
        </Switch>
      </div>
    )
  }
}

export default App;
