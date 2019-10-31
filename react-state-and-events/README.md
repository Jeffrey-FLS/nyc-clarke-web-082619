State, Events, and Conditional Rendering
==============

## SWBATs
- [X] Add event handlers to elements in React
- [X] Explain why we have Synthetic Events
- [X] Instantiate `state` inside and outside of the `constructor`
- [X] Create event handler callbacks that manipulate `state`
- [X] Trigger rerenders by calling `setState`
- [X] Manipulate the DOM by changing values in `state` instead of using vanilla JS
- [X] Correctly choose when to use `props` vs `state`, and explain why one would use one or the other

## Features
- [X] Get wrestlers from backend using button
- [ ] Click on wrestler to view info page
- [X] Switch to PhotoCard View

## Lecture Notes

1. passing props down to children (esp. multi layer)
2. where should state live? 


### State v Props
State = Internal state (ie mental state) that determines your behavior and changes internally
Props = Things inherited from your parents (hair color, eye color)


### Passing callbacks and execution context 
When passing callbacks, use arrow functions or bind them so that `this` will always refer to the instance of your component.
...Otherwise if you use it, say as a button onClick handler, `this` may be undefined if the function is unbound.

### Next time! 
Forms & Start with CREATE A WRESTLER FORM



### Using Events
1. Find piece of DOM 
  - `const beef = document.getElementById("beef")`
2. Add event listener to that piece 
  - `beef.addEventListener`
3. Give callback to event listener (remove, add, etc.)
  - `beef.addEventListener("click", () => {console.log("BEEF!")})`

In React, we don't have to do step 1, we can skip directly to step 2 by adding event handlers directly to our JSX. We still must supply the event handler with a callback.


### Events
Synthentic events ensure that you can use the `event` object in the same way regardless of browser or machine. This comes back to the `learn once, write anywhere` principle.

Otherwise, events are more or less the same as they are in vanilla JS.

Because the `event` object in React is a Synthetic Event that is pooled, the event loses its value after some time. This means that in asynchronous events (intervals, timeouts, fetches) events will lose their values. Must use `event.persist()` to keep values around.

### State
State is used for data that needs to be dynamic. Where props are passed down from parents to children and are static, values stored in state are meant to change, especially as the user interacts with the DOM. 

This is a key component of declarative programming in React: we tie our components to our state by integrating values in state into logic (e.g. conditional rendering). This way, changes in state eventually precipitate changes to the DOM

`setState` is a function inherited from `React.Component` and is used to change state. You MUST use `setState` if you wish to rerender your component - direct mutations to state will NOT trigger a rerender.

`setState` is asynchronous - this means that code written immediately after a `setState` will not see changes in your state. If you wish to call a function after state has been changed, you can pass a callback as the second argument to `setState`

`setState` can take an object OR a function as its first argument. Use the function when you intend to use the old state values when writing the new state values.

### Props

You can pass anything in `props`, even functions! We will often find ourselves passing functions down to children components - this is because while we might need state in one part of our application, our event listener might be attached to an entirely different component. To get around this, we define our state-changing functions in a component and then pass these functions downwards to be called by children components.