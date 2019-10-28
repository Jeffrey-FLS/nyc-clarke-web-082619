# Introduction to React
- [X] Review 
  - MOD3
    - headaches
    - the DOM
    - fetch
    - manipulation 
    - events
  - MOD4
    - it's weird
    - declarative
    - marriage between JS and HTML (JSXXXXXX)
    - component style framework 
- [X] Main Lecture Content
- [X] Thinking in React & Looking Ahead


## SWBATs
- [X] Visualize / identify components on a website
- [X] Explain what a Component is conceptually in the UI
- [X] Briefly explain Babel's purpose in React
- [X] Explain what a React Component actually is in code
- [X] Use JSX to build custom components and render them in the browser
- [X] See how props are to components as arguments are to functions

## Component Based

## Declarative vs. Imperative 

#### Imperative
- more descriptive
- exactly what to do line by line 

order the tortillas / make them and this how 
cook the rice
book the beans
chop the tomatoes for the salsa 

```js
let firstDiv = document.createElement('div')
firstDiv.innerHTML = 'wassap'
let container = document.getElementById('root')
container.appendChild(firstDiv)

let secondDiv = document.createElement('div')
secondDiv.innerHTML = 'hey girl hey'
container.appendChild(secondDiv)
```

#### Declarative
- let the program do most of the method for 
- give some instructions, exactly how you implement it is... not my business? i'm unbothered. 

make me a burrito bowl
tortilla on the side
white rice
black beans
sofritas
mild salsa
corn salsa
lettuce
cheese 

```js
function createGreeting(greeting){
  let newDiv = document.createElement('div')
  newDiv.innerHTML = greeting
  let container = document.getElementById('root')
  container.appendChild(newDiv)
}

createGreeting("wassap")
createGreeting("hey girl hey")
```



## JSX

### V1 --> Static HTML
 ```jsx
  ReactDOM.render(
    <div>
      <h1>Hello, Luna!</h1>
      <h1>Hello, Hermione!</h1>
      <h1>Hello, Ron!</h1>
    </div>,
    document.getElementById('root')
  );
```

### V2 --> Declarative JS function 
 ```jsx
function Greeting(name){
  return <h1>Hello {name}!</h1>
}

ReactDOM.render(
  <div>
    {Greeting("Luna")}
    {Greeting("Hermione")}
    {Greeting("Ron")}
  </div>, 
  document.getElementById('root')
)
```

### V3 --> JSX Components 
 ```jsx
function Greeting(){
  return <h1>Hello Harry!</h1>
}

ReactDOM.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>, 
  document.getElementById('root')
)
```

### Final --> JSX Components with Props
```jsx
function Greeting(props){
  return <h1>Hello {props.name}!</h1>
}

ReactDOM.render(
  <div>
    <Greeting name="Luna"/>
    <Greeting name="Hermione"/>
    <Greeting name="Ron"/>
  </div>, 
  document.getElementById('root')
)
```


## Links
- [Babel](https://babeljs.io/)
- [React](https://reactjs.org/)
- [Whiteboarding App](https://awwapp.com)

