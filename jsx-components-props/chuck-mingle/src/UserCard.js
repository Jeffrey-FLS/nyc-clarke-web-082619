import React from 'react';

class UserCard extends React.Component {
    
    render(){
        return (
            <div>
                <img src={this.props.img}></img>
                <h4>{this.props.name}</h4>
                <p>{this.props.age}, {this.props.gender}</p>
                <p>Match: {this.props.match}%</p>
                <button>Profile Link</button>
                <p>{this.props.bio}</p>
            </div>
        )
    }
}

export default UserCard;