import React from 'react';
import MainPhoto from './MainPhoto';
import MainBar from './MainBar';
const APIURL = "http://localhost:3000/connect"
class Connect extends React.Component {
    
    componentDidMount() {
        fetch(APIURL, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'userID': 1
            }
        })
        .then(resp => resp.json())
        .then(resp =>{
            console.log(resp);
        })
    }

    render() {
        return(
            <div>
                <MainPhoto />
                <MainBar />
                <button>NO</button><button>Yes</button>
            </div>
        );
    }
}

export default Connect;