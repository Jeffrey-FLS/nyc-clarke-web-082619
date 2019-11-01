import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      todoList: [],
      todoInput: '',
      loading: true
    }
    // console.log("Hello from App constructor")
  }

  componentDidMount() {
    // will only ever fire ONCE after the component has been mounted.
    console.log('Hello from App Did Mount')
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)

    fetch("http://localhost:3001/todoList")
    .then(response => response.json())
    .then(todoArray => {
      this.setState({
        todoList: todoArray,
        loading: false
      })
    })
  }

  componentDidUpdate() {
    // console.log('Hello from App Did Update')
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.setState( (previousState) => {
      return {
        todoList: [
          ...previousState.todoList,
          { id: Math.random(), content: this.state.todoInput }
        ]
      }
    })

    fetch("http://localhost:3001/todoList", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.todoInput,
        completed: false
      })
    })
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleDestruction = (id) => {
    // delete from dom,
    this.setState(previousState => ({ 
      todoList: previousState.todoList.filter(todo => todo.id !== id)
     }))
    // send request to backend
    fetch('http://localhost:3001/todoList/' + id, {
      method: "DELETE"
    })
  }

  render() {
    // console.log('Hello App Component render')
    return (
      <div>
        <h1>Halloween Todo <span role="img">🎃</span>!!</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>

        <form className="todo-list" onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text" 
            name="todoInput" 
            value={this.state.todoInput} />
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {
            this.state.loading ? 
            <p>loading...</p> :
            this.state.todoList.map(todo => 
            <li key={todo.id}>
              {todo.content}
              <button onClick={() => this.handleDestruction(todo.id) }>🗑</button>
            </li>)
          }
        </ul>
      </div>
    )
  }
} 

export default App;