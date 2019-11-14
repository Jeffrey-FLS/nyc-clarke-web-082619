import React from 'react';

class OwnerBar extends React.Component {
    render() {
        let user = this.props.currentUser.user
        // let pet = this.props.currentUser.pet
        // let userPhotos = this.props.currentUser.photos

        // console.log(user)
        // console.log(pet)
        // console.log(userPhotos)
        return (
            <div>
               <h1>{user.first_name}</h1>
               <h2>{user.age}</h2>
               <h3>Identifying as :{user.gender}, {user.orientation} </h3>
               <h3>Seeking: {user.orientation}</h3>
               <br></br>
               <p>BIO</p>
            </div>
        );
    }
}

export default OwnerBar