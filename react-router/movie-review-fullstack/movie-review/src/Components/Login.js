import React from 'react';

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

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.password === 'poop'){
      this.props.history.push('/home')
    } else {
      alert('try again ')
    }
  }


  render(){
    return (
      <div className="login">
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="passwords"/>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
