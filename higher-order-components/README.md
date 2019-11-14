# Higher Order Components


## SWBATs
- [ ] Describe the relationship between higher-order functions and higher-order components
- [ ] Explain composition as an alternative to inheritance
- [ ] Create and use a higher-order component to abstract behavior
- [ ] Give common examples of higher-order components


## Notes

### Higher-order Functions
- take a function as an argument
  - map
  - sort
  - filter
  - reduce
  - setInterval

- return a function
  - bind 
 ` this.handleClick = this.handleClick.bind(this)`
 `() => {return (n) => { return n+2 }}`


- both

Notes
- use callbacks



### Higher-order Components
- takes a component and returns a new component with some added functionality or data

























ex: withColorChange

```jsx
import React from 'react'

function withColorChange(MyComponent){
  return class extends React.Component {

    state = {
      clicked: false
    }

    colorChange = () => {
      this.setState({
        clicked: !this.state.clicked
      })
    }

    render(){
      return ( 
        <div onClick={this.colorChange} style={{color: this.state.clicked ? "blue" : "red"}}>
          <MyComponent {...this.props}/>
        </div>
      )
    }
  }
}

export default withColorChange
```

### Some examples

- Add the same styling to multiple components
- Add the same props to multiple components (withRouter)
- Add the same conditional rendering to multiple components (withLoading)
- Add the same functionality to multipleComponents using state/component lifecycle methods (withAds)