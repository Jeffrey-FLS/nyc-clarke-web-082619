# Topics

## Key Value assignment shortcut
```javascript 
const name = 'Hermione'
const house = 'Gryffindor'

const student = {
  name: name,
  house: house
}

// name of key is the same as the name of the variable we wish to assign to that key
const student2 = { name, house }
```
-------
## Forms of arrow funcs
```javascript
// without curly brackets, the return is implicit
const implicitReturn = () => 'hi' 
// with curly brackets you need to explicitly return 
const explicitReturn = () => {
  return 'hi'
}

// an example with parameters for good measure
const implicitWithParams = (a, b) => a * b
```
-------
## Spread Operator
Can be used on any iterable like below
```javascript 
// Used with an array
const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // literally prints the array '['This', 'is', 'a', 'sentence']'
console.log(...items) // will print 'This is a sentence'
```
```javascript
// Used with a string
const flatiron = 'FLATIRON'; 
const characters = [ ...flatiron ];  // ['F','L','A','T','I','R','O','N' ]
```
```javascript
// Used with an object - mostly for copying objects
const movie1 = {'year': 2018, 'title': 'Joker' } 
const movie2 = {...movie1} // {'year': 2018, 'title': 'Joker' }

movie1.title = 'Abominable'

movie1 // {'year': 2018, 'title': 'Abominable' }
movie2 // {'year': 2018, 'title': 'Joker' }

// You can also combine objects this way
const cambioClarke = {'tony': 12, 'caryn': 20, 'yoan': 3}
const cambio2nd = {'steven': 8, 'tashawn': 15}

const cambioFlatiron = {...cambioClarke, ...cambio2nd, 'evans': 6}

console.log(cambioFlatiron) // {'tony': 12, 'caryn': 20, 'yoan': 3, 'steven': 8, 'tashawn': 15, 'evans': 6}

```
---
## Destructuring assignment
```javascript
const spaceship = {
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}
/* from the object spaceship,
please pull out the VALUES stored at
pilot and chef */
const { pilot, chef, captain } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'
console.log(captain) // undefined

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor(props) {
    this.name = props.name
    this.favColor = props.favColor
  }
}

//VS

class Person {
  // props -> { name: 'winfield', favColor: 'red' }
  constructor({ name, favColor }) {
    this.name = name
    this.favColor = favColor
  }
}
```
```javascript
// You can destructure arrays as well. Position in the array is everything! Notice the empty spaces between commas in the destructuring. If those weren't included, we'd get the wrong values for city and zipCode. 
const address = ['11', 'Broadway', '', 'New York', 'NY', ''];
const [number, line1, , city, , zipCode] = address;

```
-------
## Rest Operator
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const [ firstNumber, ...restOfTheNumbers ] = numbers; 

function printTwoReturnRest(first, second, ...theRest){
    console.log(first, second)
    if(theRest.length){
        printTwoReturnRest(...theRest)
    }

}
```