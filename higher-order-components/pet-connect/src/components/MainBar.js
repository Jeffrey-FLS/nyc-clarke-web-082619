import React from 'react';

class MainBar extends React.Component {
    render() {
        
        let pet = this.props.currentUser.pet
        // let userPhotos = this.props.currentUser.photos

        // console.log(user)
        // console.log(pet)
        // console.log(userPhotos)
        return (
            <div>
                <h4>XX Miles Away</h4>
                <h4>I am a {pet.gender} {pet.species}</h4>
               <h4>Bio</h4>
               <h5>Other Photos</h5>  
            </div>
        );
    }
}

export default MainBar