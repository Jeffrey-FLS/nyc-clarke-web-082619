Intro to Redux
==============

## SWBATs

### Message Passing
- [X] Explain the pattern / technique of message passing
- [X] Refactor a component's behavior to use message passing 

### Redux
- [X] Install the redux library so it can be used in a project.
- [X] Create a `store` in redux with some default `state`.
- [X] Create a `reducer` to change `state` based on an `action.type`.
- [X] Use `dispatch` to send an `action` to the `store` to make changes to `state`.
- [X] Read `state` in the `store`.

### React Redux
- [X] Install the `react-redux` library so it can be used in a project.
- [X] Make the `store` available to their application by using the `Provider` component.
- [X] Use `connect` to give components the ability to listen for changes to the `store`.
- [X] Use `dispatch` in a React component.
- [X] Use `mapStateToProps` to read data from the `state` in the Redux `store`.
- [X] Use `mapDispatchToProps`
- [X] Rethinking in React with Redux


![React State vs. Redux][visual]

[visual]: https://css-tricks.com/wp-content/uploads/2016/03/redux-article-3-03.svg

Redux **will** test your JavaScript knowledge to the **MAX**!!!


## Lecture Notes
++1 on dessert x 1000000

Deicing what goes into redux...
- if mult components need it, put it in redux.. if not do not
- 

### Message Passing
1. State / previous data
2. Type ==> what kind of action are we doing?
3. PAYLOAD / new data
4. Function to handle doing all of the things `




### What is Message Passing?
```
"Message passing is a technique for invoking behavior (i.e., running a program) on a computer. In contrast to the traditional technique of calling a program by name, message passing uses an object model to distinguish the general function from the specific implementations. The invoking program sends a message and relies on the object to select and execute the appropriate code." -Wikipedia
```

Message passing is built on the idea of centralization of program flow: all program flows pass through **one** central function, which in turn invokes the desired functionality. In order to do this, the central function needs to be told 2 things: **a type** which tells the central function which function to call, and, because functions sometimes need data, **a payload** which contains all of the data needed to run the desired function (usually an object).

### Vocabulary
- [ ] Redux - library for centralized state management... global state management system
- [ ] store - centralized state, one stop shop for all our state needs...  return value of the `createStore`. holds your global state. also contains the functions for reading (`getState`) and writing (`dispatch`) to state
- [ ] reducer - a function that is used to create new state by REDUCING the old state and the incoming data (payload) into a new state. uses message passing based on your `action.type` to control what gets returned
- [ ] getState() - READ state; gets the state
- [ ] dispatch() - initiates the reducer and sets the new state; WRITE state
- [ ] action - specific thing we're going to do to change the state, issa object. contains type and payload 
- [ ] type - what kind of action are we going to do and is taken by the reducer... attribute of the action containing a string that is used to control program flow in the reducer
- [ ] payload - any extra data that needs to go to reducer to set the new state ...part of the action. contains the data that will be used to change state

### React Redux
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] Provider
- [ ] connect()

### Redux setup

1. Write a `reducer` function
```js
// the most basic template of a reducer:
const defaultState = {
  // whatever you want
}
function reducer(state = defaultState, action){
  // remember: WHATEVER is returned from the reducer BECOMES state
  return state
}
```

2. Create Store
```js
import {createStore} from 'redux'

// give the reducer to your store so it can initialize and setup your state
const store = createStore(reducer)
```

### Reading and Writing to Redux
```js
// read from redux
store.getStore()

// write to redux
store.dispatch({type: "SOME_TYPE"})
```

`dispatch` takes one argument: a POJO that we call an action. The action must at a minimum have a `type` attribute which will be used to figure out which part of your reducer to call. Any other data that is needed to change state is passed in as an attribute on the action that is called, by convention, `payload`.

```js
store.dispatch({type: "SOME_TYPE", payload: {data: "my data"}})
```


### Information Flow

Everytime `dispatch` is called, the `reducer` is called. The 1st argument is the previous state, the 2nd argument is the `action` object that was passed in when `dispatch` was called. Whatever is returned from `reducer` then **becomes** state (i.e. it does not update state, it completely **overwrites** it)





