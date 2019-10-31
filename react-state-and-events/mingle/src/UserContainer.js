import React from 'react';
import UserCard from './UserCard';
import PhotoCard from './PhotoCard';

class UserContainer extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         wrestlers: [],
    //         photoView: false
    //         // toggledUser: null
    //     }
        
    //     // One way to bind a function to the instance of our component
    //     // this.getWrestlerData = this.getWrestlerData.bind(this)
    // }



    // another way to bind functions is to use arrow functions


    renderWrestlers() {
        let filteredWrestlers = this.props.wrestlers.filter(wrestler => wrestler.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()) )

        return (
            filteredWrestlers.map((wrestler, i) => {
                return this.props.photoView ? <PhotoCard key={i} wrestler={wrestler} /> : <UserCard key={i} wrestler={wrestler} />
            })
        )
    }

    render(){
        return (
            <div className="user-container">
                <button onClick={this.props.getWrestlerData}>Get Wrestler Data</button>
                <div className="wrestler-container">
                    {this.renderWrestlers()}
                </div>
            </div>
        )
    }
}

export default UserContainer;