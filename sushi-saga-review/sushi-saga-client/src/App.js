import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  
  state = {
    sushis: [],
    eatenSushis: [],
    dollarsLeft: 100
  }

  // dollarsLeft in App state 
  // send dollars left to table as prop and iterpolate in Table
  // inside of eatsSushi function to accept price in addition to ID
  // in eatSushi subtract price 

  eatSushi = (id, price) => {
    if (this.state.dollarsLeft >= price){
      let newSushis = this.state.sushis.map(sushi => {
        if (sushi.id === id && !sushi.eaten) { // can I add the sushi instead to an array of eaten sushi
          return {...sushi, eaten: true}
        } else {
          return sushi // does not add an eaten key to all other sushis
        }
      })
      this.setState({
        sushis: newSushis,
        eatenSushis: [...this.state.eatenSushis, id],  // add an additional item to eatenSushis array
        dollarsLeft: this.state.dollarsLeft - price
      }) 
    }

    // BUG ALERT ==> if you keep clicking empty plate, it keeps adding plates to the table 
    // STRATEGY: update state inside of eatSushi conditional

      // and the sushi.id matches our id(_param) then
      // make a copy of the sushi in state, and add {eaten: true}
      // otherwise just return the old sushi
  }

  // eatSushi function takes an id pass down to sushi component
  // map state sushis and if sushi.id == id_param then add an eaten attribute to to the indi
  // 

  componentDidMount(){ // PARKING LOT DIFFERENCES HERE
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }  

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} sushis={this.state.sushis} />
        <Table dollarsLeft={this.state.dollarsLeft} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;