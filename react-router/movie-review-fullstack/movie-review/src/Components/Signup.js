import React from 'react';
import { API_BASE } from '../constants';

class Signup extends React.Component{
  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.password === this.state.passwordConfirmation){
      fetch(`${API_BASE}/signup`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.passwordConfirmation
        })
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
       // .then(console.log) //it's a declaration so whatever is passed to then will be passed to console.l
    } else {
      alert('You messed up. Try again. Get better at typing.')
    }

  }


  render(){
    return (
      <div className="signup">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
          <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
