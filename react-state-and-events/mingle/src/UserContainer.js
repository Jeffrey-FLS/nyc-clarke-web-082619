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

    state = {
        wrestlers: [],
        // toggleView: 'photo' <== could've used a string instead of a boolean which got lifted to App Component state
    }

    // another way to bind functions is to use arrow functions
    getWrestlerData = () => {
        fetch('http://localhost:3001/wrestlers')
        .then(res => res.json())
        .then(data => {

            // SETSTATE MAKES A RERENDER OCCUR
            this.setState({
                wrestlers: [...this.state.wrestlers, ...data ]
            })

            // DO NOT DO THIS - IT DOES NOT TRIGGER RE-RENDER
            // this.state.wrestlers = data
        })
    }

    // use bang and previous state
    // switchView = (event) => {
    //     console.log('switching thangs up')
    //     this.setState(prevState => {
    //         return {photoView: !prevState.photoView}
    //     })
    // }

    // PARKING LOT - fix that this flips back and forth regardless of what button we click on 
    // switchView = (truthyValue) => {
    //     console.log('switching thangs up')
    //     this.setState(prevState => {
    //         return {photoView: truthyValue}
    //     })
    // }
    // THEN IN THE BUTTON COMPONENTS IN THE RENDER
    // onClick={() => {this.switchView(true/false)}}

    // OTHER STRATEGIES
    // give names to the buttons and get the event target name

    render(){
        console.log(this.props.photoView)
        return (
            <div className="user-container">
                <button onClick={this.getWrestlerData}>Get Wrestler Data</button>
                <button onClick={this.switchToInfo}>Match View</button>
                <button onClick={this.switchToPhoto}>Photo View</button>
                <div className="wrestler-container">
                    {this.state.wrestlers.map((wrestler, i) => {
                        return this.props.photoView ? 
                            <PhotoCard 
                                key={i}
                                wrestler={wrestler}
                            />
                            : 
                            <UserCard 
                                key={i}
                                wrestler={wrestler}
                            />
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default UserContainer;