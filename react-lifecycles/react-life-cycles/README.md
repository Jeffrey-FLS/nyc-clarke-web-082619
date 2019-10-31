---
title: React Component Lifecycle
layout: post
---

# Component Lifecycle Methods

## SWBAT
* Write methods that interact with data at different points throughout a component's life.
* Identify why we fetch data using ComponentDidMount.
* Recognize the most-used lifecyle methods.


### React Component Lifecycle
Can be separated into three categories:
* Mounting
* Updating
* Unmounting
* Error Handling

## Resources
* [React Docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
* [React Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [Starter Code](https://github.com/learn-co-curriculum/lectures-starter-code/tree/master/react/react-lifecycle-starter-code)
* [Solution Code]()


### Birth (Mounting)
- *constructor(props)*
  - called before it is mounted
  - set initial state here
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- *render()*
  - called after mounting and updating
- *componentDidMount()*
  - invoked immediately after a component is mounted (inserted into the tree).
  - this is where you should request data from remote endpoints

### Life (Updating)
- static getDerivedStateFromProps(props, state)
  - invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
- shouldComponentUpdate(nextProps, nextState)
  - invoked before rendering when new props or state are being received
  - returns boolean which determines if render should be called
- *render()*
  - called after mounting and updating
- getSnapshotBeforeUpdate(prevProps, prevState)
  - invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate()
- *componentDidUpdate(prevProps, prevState)*
  - invoked immediately after updating occurs. This method is not called for the initial render
  - watch out for infinite loops if setting state!

### Death (Unmounting)
- *componentWillUnmount()*
  -  invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
