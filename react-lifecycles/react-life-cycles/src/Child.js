import React, { Component } from 'react'

class Child extends Component {

  constructor(props) {
    super(props)
    console.log("Hello from Child constructor")
  }

  componentDidMount() {
    console.log('Hello from Child Did Mount')
  }

  render() {
    console.log('Hello Child Component render')
    return (
      <p>Spooookkkyyy! 👻</p>
    )
  }
}

export default Child;