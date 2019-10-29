import React from 'react';
import './stylesheets/App.css';
import NavBar from './NavBar';
import MainContainer from './MainContainer';


class App extends React.Component {
  // photoView is lifted to App state because NavBar and UserContainer both need it 
  state = {
    photoView: false
  }

  // constructor(){
  //   super()
  //   this.state = {
  //     photoView: false
  //   }
  // }

  // switch methods are lifted to App because the state it's editing is App's state 

  // bound b/c it's an arrow function 
  switchToPhoto = () => {
    this.setState({
        photoView: true
    })
  }

  switchToInfo = () => {
      this.setState({
          photoView: false
      })
  }


  render(){
    let { photoView } = this.state; // TODO ADD NOTES RE DECONSTRUCTION

    return (
      <div className="App">
        <NavBar
          photoView={this.state.photoView}
          switchToInfo={this.switchToInfo}
          switchToPhoto={this.switchToPhoto}
          />
        <MainContainer photoView={photoView} />
      </div>
    );
  }
}


export default App;

// Alternate format for using NAMED EXPORTS instead of DEFAULT EXPORTS
// export {App, UserCard}
