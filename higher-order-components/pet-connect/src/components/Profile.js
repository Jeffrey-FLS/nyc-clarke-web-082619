import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';
import OwnerBar from './OwnerBar';

export default class Profile extends Component {

    
    render(){
        let user = this.props.currentUser.user
      
        return(
            <div>
                <h1> Welcome Back, {user.first_name}!</h1>
                <br>
                </br>
                <p> if you are logged in, list these options</p>
                <h2>Choose an Option Below!</h2>
                <Link to='/messages'>See Messages</Link>
                <br></br>
                <Link to='/connect'>Make New Friends</Link>
                <br></br>
                <Link to='/settings'>Update Profile Settings</Link>
                <br>
                </br>
                <br></br>
            
            <div>
                <MainPhoto currentUser={this.props.currentUser}/>
                <MainBar currentUser={this.props.currentUser}/>
                <OwnerBar currentUser={this.props.currentUser}/>
            </div>
        <br></br>
            </div>
        )
    }
}