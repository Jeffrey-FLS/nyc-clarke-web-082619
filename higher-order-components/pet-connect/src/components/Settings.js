import React, {Component} from 'react'
import {Link} from 'react-router-dom'
const API = "http://localhost:3000/users";

export default class Settings extends Component {

    constructor() {
        super();
        this.state={
            firstName: "",
            lastName: "",
            genderUser: "",
            orientation: "",
            ageUser: "",
            namePet: "",
            genderPet: "",
            species: "",
            agePet: "",
            photo: ""
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`${API}/${this.props.currentUser.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json"
            },
            body: JSON.stringify (  
                this.state
            )
        })
        .then(resp => resp.json())
        .then(alert('Profile Successfully Updated')) 
    }
    
    render(){
        return(
            <div>
                <br>
                </br>
                <h1>Welcome {this.props.currentUser.user.first_name}</h1>
                <h1>Update Settings</h1>
                <br></br>
                <br></br>
                <h2>Account Settings</h2>
                <form>
                <input onChange={this.handleChange} value={this.state.firstName} type="text" name="Username" placeholder='Username'/><br></br>
                <input onChange={this.handleChange} value={this.state.firstName} type="text" name="Password" placeholder='Password'/>
            </form>
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <br></br>
            <label>UPDATE PHOTOS </label><br></br><br></br>
            <h2>Photo Cards Here</h2>
            <br></br>
            <br></br>
            <label>USER INFO</label>
            <br></br>
             <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" placeholder='First Name' /> 
            <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" placeholder=' Last Name' /> 
            <input onChange={this.handleChange} value={this.state.genderUser} type="text" name="genderUser" placeholder='Gender' /> 
              <input onChange={this.handleChange} value={this.state.orientation} type="text" name="orientation" placeholder='Orientation' /> 
              <input onChange={this.handleChange} value={this.state.ageUser} type="text" name="ageUser" placeholder='Age' /> 
            <br></br><br></br>
            <label>PET INFO</label><br></br><br></br>
              <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" placeholder='Pet Name' /> 
              <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" placeholder='Pet Gender' /> 
              <input onChange={this.handleChange} value={this.state.species} type="text" name="species" placeholder='Pet Species' /> 
              <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" placeholder='Pet Age' /> 
            <input type="submit" value="Submit" />
        </form> 
            <br></br>
                <br></br>
                <h2>Search Settings</h2>
                <p>Current Location:</p>
                <p>Maximum Radius:</p>
                <p>Interested In:</p>
                <p>Age Range:</p>
                <br></br>
                <br></br>
                <h2>Contact Us</h2>
                <p>Actually don't bother</p>
                <br></br>
                <br></br>
                <Link to='/profile'>Back To Profile</Link>
                </div>
        )
    }
}