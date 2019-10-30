import React from 'react';

class SearchBar extends React.Component {

    renderSearchFilter = () => {
       return ( 
        <>
            <h4>Search</h4>
                <input name="searchTerm" onChange={this.props.handleChange} value={this.props.searchTerm} placeholder="Search bios" />
            <h4>Filter</h4>
                <div>
                    <label>Has Photo</label>
                    <input type="checkbox"/>
                </div>
                <div>
                    <label>High Match %</label>
                    <input type="checkbox"/>
                </div>
        </>
        )
    }

    renderAddForm = () => {
        return (
            <div className="new-wrestler-form">
                <h4>Add New Wrestler</h4>
                <input name="name" onChange={this.props.handleChange} value={this.props.name} placeholder="Name"/>
                <input name="imgURL" onChange={this.props.handleChange} value={this.props.imgURL} placeholder="Image URL"/>
                <input name="age" onChange={this.props.handleChange} value={this.props.age} placeholder="Age"/>
                <input name="gender" onChange={this.props.handleChange} value={this.props.gender} placeholder="Gender"/>
                <input name="bio" onChange={this.props.handleChange} value={this.props.bio} placeholder="Bio"/>
                <button onClick={this.props.handleSubmit}>Submit</button>
            </div>
        )
    }
    render(){
        return (
            <div className="search-bar">
                {this.renderSearchFilter()}
                {this.renderAddForm()}
            </div>
        )
    }
}

export default SearchBar;