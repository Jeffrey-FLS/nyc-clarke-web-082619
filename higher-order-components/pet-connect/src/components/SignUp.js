import React from 'react';
// import {Link} from 'react-router-dom'; 
const API = "http://localhost:3000/signup";
export default class App extends React.Component {

    state = {
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

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "Accepts" : "application/json"
            },
            body: JSON.stringify (  
                this.state
            )
        })
        .then(resp => resp.json())
        .then(console.log) 
    }

    render() {
        console.log(this.state);
        return (
        <form onSubmit={this.handleSubmit}>
            <label>USER INFO</label><br></br><br></br>
            <label>First Name <input onChange={this.handleChange} value={this.state.firstName} type="text" name="firstName" /> </label>
            <label>Last Name <input onChange={this.handleChange} value={this.state.lastName} type="text" name="lastName" /> </label>
            <label> Gender <input onChange={this.handleChange} value={this.state.genderUser} type="text" name="genderUser" /> </label>
            <label> Orientation <input onChange={this.handleChange} value={this.state.orientation} type="text" name="orientation" /> </label>
            <label> Age <input onChange={this.handleChange} value={this.state.ageUser} type="text" name="ageUser" /> </label>
            <br></br><br></br>
            <label>PET INFO</label><br></br><br></br>
            <label> Name <input onChange={this.handleChange} value={this.state.namePet} type="text" name="namePet" /> </label>
            <label> Gender <input onChange={this.handleChange} value={this.state.genderPet} type="text" name="genderPet" /> </label>
            <label> Species <input onChange={this.handleChange} value={this.state.species} type="text" name="species" /> </label>
            <label> Age <input onChange={this.handleChange} value={this.state.agePet} type="text" name="agePet" /> </label>
            <br></br><br></br>
            <label>PET PHOTOS </label><br></br><br></br>
            <label> Name <input onChange={this.handleChange} value={this.state.photo} type="text" name="photo" /> </label>
            <input type="submit" value="Submit" />
        </form>     )
    }
}
