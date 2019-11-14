import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Matches extends Component {
    render(){
        return(
            <div>
                <h1>Your Current Matches</h1>
                <input type="text" className="input" placeholder="Search Matches" />
                <h2>photo card1</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>photo card2</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>photo card3</h2>
                <Link to='/profile'>Visit Profile</Link>
                <Link to='/messages'>Send Message</Link>
                <h2>etc..</h2>
                <br></br>
                <Link to='/connect'>NONE OF THESE WILL DO KEEP SWIPING</Link>
                </div>
        )
    }
}