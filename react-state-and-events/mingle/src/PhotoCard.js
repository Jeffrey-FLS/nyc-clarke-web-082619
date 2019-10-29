import React from 'react';

class PhotoCard extends React.Component {
    
    render(){
        const {wrestler} = this.props
        return (
            <div className="wrestler-card photo-view">
                <img className="photo-card-view" alt={wrestler.name + "-img"} src={wrestler.img}></img>
                <h4 className="wrestler-name photo-view">{wrestler.name}</h4>
            </div>
        )
    }
}

export default PhotoCard;