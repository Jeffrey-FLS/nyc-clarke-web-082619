import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {

  /*************************** MESSAGE PASSING CODE ***************************/
  // dispatch = (type, payload) => { // actually changes our state / writes to state
  //   console.log(payload)

  //   let newState = this.reducer(type,  payload)

  //   this.setState(newState);
  // }

  // reducer = (type, payload) => { // will just return a new version of state for us 
  //   switch(type){
  //     case "LIKE":
  //       return {...this.state, likes: this.state.likes + 1}
  //     case "DISLIKE":
  //       return {...this.state, likes: this.state.likes - 1}
  //     case "DARK_MODE":
  //       return {...this.state, darkMode: !this.state.darkMode}
  //     case "HANDLE_CHANGE":
  //       return {...this.state, text: payload}
  //     case "ADD_TEXT":
  //       return {...this.state, text: "", thangs: [...this.state.thangs, this.state.text]}
  //     default:
  //       return {...this.state}
  //   }
  // }

  render(){

    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.handleChange(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { likes, text, darkMode, thangs } = state;

  return {
    likes,
    text,
    darkMode,
    thangs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    like: () => { dispatch({type: "LIKE"}) },
    dislike: () => { dispatch({ type: "DISLIKE" })},
    toggleDark: () => { dispatch({ type: "DARK_MODE" })},
    handleChange: (payload) => {dispatch({ type: "HANDLE_CHANGE", payload})},
    addText: () => { dispatch({type: "ADD_TEXT"}) }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);