import React from 'react';
import UserContainer from './UserContainer';
import SearchBar from './SearchBar';


class MainContainer extends React.Component {
    render(){
        return (
            <div className="main-container">
                <SearchBar />
                <UserContainer photoView={this.props.photoView} />
            </div>
        )
    }
}

export default MainContainer;