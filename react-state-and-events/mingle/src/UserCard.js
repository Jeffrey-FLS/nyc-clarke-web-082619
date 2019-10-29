import React from 'react';


class UserCard extends React.Component {
    
    render(){
        const { wrestler } = this.props

        return (
            <div className="wrestler-card" >
                <div className="info-container">
                    <img className="wrestler-pic" alt={wrestler.name + "-img"} src={wrestler.img}></img>
                    <div className="text-info">
                        <h4 className="wrestler-name">{wrestler.name}</h4>
                        <p className="wrestler-demo">{wrestler.age}, {wrestler.gender}</p>
                        <p className="wrestler-match">Match: {wrestler.match}%</p>
                        <button className="profile-link">View Full Profile  ⏩</button>
                    </div>
                </div>
                <hr />
                <p className="wrestler-bio">{wrestler.bio.split(' ').slice(0,6).join(' ')}...</p>
            </div>
        )
    }
}

export default UserCard;