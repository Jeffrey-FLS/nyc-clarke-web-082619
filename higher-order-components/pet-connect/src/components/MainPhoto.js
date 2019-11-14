import React from 'react';

class MainPhoto extends React.Component {

    
    render() {
        let pet = this.props.currentUser.pet
        let userPhotos = this.props.currentUser.photos[0]

        
        console.log(pet.name)
        console.log(userPhotos.source)
        return (
            <div>
               <img src={userPhotos.source} alt='doggo'></img>
               <h2>{pet.name}</h2>
               <h3>{pet.age}</h3>
            </div>
        );
    }
}

export default MainPhoto