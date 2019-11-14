import React, {Component} from 'react';
import SignUp from './SignUp';
import Login from './Login';
import Connect from './Connect'
import Profile from './Profile'
import Matches from './Matches'
import Messages from './Messages'
import Settings from './Settings'
import withCurrentUser from '../withCurrentUser';

import {
    Switch,
    Route
  } from "react-router-dom";

const WrappedProfile = withCurrentUser(Profile)
const WrappedSettings = withCurrentUser(Settings)


export default class MainBody extends Component {

    constructor(){
        super();
        this.state = {
           
        }
    }
    render() {
        return(
            <Switch>
                <Route path='/sign_up'><SignUp /></Route>
                <Route path='/profile'><WrappedProfile currentUser={this.props.currentUser}/></Route>
                <Route path='/connect'><Connect /></Route>
                <Route path='/matches'><Matches /></Route>
                <Route path='/messages'><Messages /></Route>
                <Route path='/settings'><WrappedSettings currentUser={this.props.currentUser}/></Route>
                <Route path='/' render={(RouterProps) => this.props.currentUser ? RouterProps.history.push('/profile') : <Login {...RouterProps} setUser={this.props.setUser} currentUser={this.props.currentUser}/>}/>
            </Switch>
        )
    }
}