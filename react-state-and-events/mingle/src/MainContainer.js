import React from 'react';
import UserContainer from './UserContainer';
import SearchBar from './SearchBar';

const initialFormState = {
        name: "",
        age: "",
        bio: "",
        gender: "",
        imgURL: ""
}


class MainContainer extends React.Component {
    state = {
        searchTerm: "",
        ...initialFormState,
        wrestlers: [],
    }

    getWrestlerData = () => {
        fetch('http://localhost:3001/wrestlers')
        .then(res => res.json())
        .then(data => {

            // SETSTATE MAKES A RERENDER OCCUR
            this.setState({
                wrestlers: [...this.state.wrestlers, ...data ]
            })
        })
    }

    // handleSearchChange = (event) => {
    //     // console.log(event.target.value)
    //     this.setState({
    //         searchTerm: event.target.value   
    //     })
    // }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        let {age, name, bio, imgURL, gender} = this.state

        fetch('http://localhost:3001/wrestlers',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                age: age,
                name: name,
                bio: bio,
                img: imgURL,
                gender: gender

            })
        }).then(res => res.json())
        .then(data => {
            this.setState({
                wrestlers: [...this.state.wrestlers, data]
            })
        })

        this.setState({
            ...initialFormState
        })
    }


    render(){

        return (
            <div className="main-container">
                <SearchBar {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <UserContainer
                    searchTerm={this.state.searchTerm}
                    photoView={this.props.photoView} 
                    wrestlers={this.state.wrestlers}
                    getWrestlerData={this.getWrestlerData} 
                    />
            </div>
        )
    }
}

export default MainContainer;