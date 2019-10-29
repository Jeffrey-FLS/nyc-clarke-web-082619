import React from 'react';

class SearchBar extends React.Component {
    
    render(){
        return (
            <div className="search-bar">
                <h4>Filter</h4>
                    <div>
                        <label>Has Photo</label>
                        <input type="checkbox"></input>
                    </div>
                    <div>
                        <label>High Match %</label>
                        <input type="checkbox"></input>
                    </div>
                    
            </div>
        )
    }
}

export default SearchBar;