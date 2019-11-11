import React from 'react';
import { API_BASE } from '../constants';

class Login extends React.Component{
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${API_BASE}/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        // we have the user object!!! store somewhere
        this.props.setUser(response.user)
        localStorage.token = response.token
        // move them to main screen  "/movies"
      }
    })
    // if login is successful
    // redirect to "/movies"


    // if(this.state.password === 'poop'){
    //   this.props.history.push('/home')
    // } else {
    //   alert('try again ')
    // }
  }


  render(){
    return (
      <div className="login">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
