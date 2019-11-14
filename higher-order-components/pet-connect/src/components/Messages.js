import React, {Component} from 'react'

export default class Messages extends Component {
    
    render(){
        return(
            <div>
                <h1>Messages</h1>
                <input type="text" className="input" placeholder="Search Matches" />
                <h3>Photo Cards of matches you can click, maybe it's own component</h3>
                    <h4>Name</h4>
                    <h5>last message, click to open conversation</h5>
                </div>
        )
    }
}