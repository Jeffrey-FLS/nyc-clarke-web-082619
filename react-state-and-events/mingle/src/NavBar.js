import React from 'react';


class NavBar extends React.Component {
    
    render(){
        let { switchToPhoto, switchToInfo } = this.props

        return (
            <div className="navbar">
                <img src="https://files.slack.com/files-pri/T02MD9XTF-FPZFS9UQN/wrestlemaniamingle.png"></img>
                <div className="nav-link-container">
                    <div className="nav-link">Submit New Wrestler</div>
                    <div className="nav-link" onClick={switchToInfo}>Match View</div>
                    <div className="nav-link" onClick={switchToPhoto}>Photo View</div>
                    <div className="nav-link">Favorites View</div>
                    <div className="nav-link">My Profile</div>
                    <div className="nav-link">WWE Updates</div>
                </div>
            </div>
        )
    }
}

export default NavBar;