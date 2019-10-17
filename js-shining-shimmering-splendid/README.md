# JS: Shining Shimmering, Splendid 
![](https://media2.giphy.com/media/DCrq12xnZDmzS/source.gif)

## Key Value Assignment Shortcut
Keeping object definition & access simple by naming variables the same as the corresponding key

```js 
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
## Forms of Arrow Functions
A shorter, cleaner way to write functions (especially one liners)

```js
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
Expands any iterable (string, array, object) to its set of items 

```js 
// Used with an array
const items = ['This', 'is', 'a', 'sentence'];
console.log(items) 
console.log(...items)


// it can be used to combine arrays, without nesting them
const array = [1, 2];
const array2 = [...array, 3, 4];

// instead of...
const array3 = [array, 3, 4];

```
```js
// Used with a string
const flatiron = 'FLATIRON'; 
const characters = [ ...flatiron ];  // ['F','L','A','T','I','R','O','N' ]
```
```js
// Used with an object - mostly for copying objects
const movie1 = {'year': 2018, 'title': 'Joker' } 
const movie2 = {...movie1} 

movie1.title = 'Abominable'

movie1
movie2 

// You can also combine objects this way
const cambioClarke = {'tony': 12, 'caryn': 20, 'yoan': 3, 'sebastian': 47}
const cambio2nd = {'steven': 8, 'tashawn': 15}

const cambioFlatiron = {...cambioClarke, ...cambio2nd, 'evans': 6}

console.log(cambioFlatiron) // {'tony': 12, 'caryn': 20, 'yoan': 3, 'steven': 8, 'tashawn': 15, 'evans': 6}

```
---
## Destructuring Assignment
Unpacks values from an array or object into discrete variables

- Objects
```js
const spaceship = {
  name: 'rocket power',
  pilot: 'elon musk',
  guidance: 'marc zucc',
  chef: 'gordon ramsay'
}

function printSpaceShip(ship){
  console.log(`Welcome aboard the ${ship.name}!`)
  console.log(`Today your pilot will be ${ship.pilot} and you'll be served delicious meals by ${ship.chef}`)
}

/* from the object spaceship,
please pull out the VALUES stored at
pilot and chef */
const { pilot, chef, captain } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'
console.log(captain) // undefined


function printSpaceShip(ship){
  console.log(`Welcome aboard the ${ship.name}!`)
  console.log(`Today your pilot will be ${ship.pilot} and you'll be served delicious meals by ${ship.chef}`)
}
```
- Arrays 
```js
// You can destructure arrays as well. Position in the array is everything! Notice the empty spaces between commas in the destructuring. If those weren't included, we'd get the wrong values for city and zipCode. 
const address = ['11', 'Broadway', '', 'New York', 'NY', ''];
const [number, line1, , city, , zipCode] = address;

```
- As Parameters
```js
// If you know the shape of the parameters you're expecting, you can destructure them as well 
const arrayItems = [['a',1], ['b',2], ['c', 3], ['d', 4], ['e',5]]
const objectFromArray = arrayItems.map(([key, value]) => { return {[key]:value}})
```
-------
## Rest Operator
Represents an indefinite number of arguments as an array (or an object in the case of objects)

```js

const numbers = [1, 2, 3, 4, 5, 6];
const [ firstNumber, ...restOfTheNumbers ] = numbers; 

function printTwoReturnRest(first, second, ...theRest){
    console.log(first, second)
    if(theRest.length){
        printTwoReturnRest(...theRest)
    }

}
// this function is an example of a recursive function 

// remember this? cambioFlatiron = {...cambioClarke, ...cambio2nd, 'evans': 6}
// we can use destructuring and the rest operator to grab everyone except one of us, say if we're on vacation
```
- As Parameters
```js
// If you know the shape of the parameters you're expecting, you can destructure them as well 
const arrayItems = [['a',1,2,3,4], ['b',280,29384], ['c', 3,0], ['d', 4, 'basketball'], ['e',5, 'here ye here ye!']]
const objectFromArray = arrayItems.map(([key, ...rest]) => { return {[key]:rest}})
```
-------
## Ternary Operator
Common shortcut for an "if" statement

```js
// Basic Syntax
// condition ? truthyClause : falsyClause

// so...
if(!monsterData.name.length === 0) {
  postNewMonster(monsterData);
} else {
  alert('I NEED A NAME 😔')
}


// becomes...
!monsterData.name.length === 0 ? postNewMonster(monsterData) : alert('I NEED A NAME 😔');

// You can even nest them 😳
// but make sure you make it easily readable
const makeDecisions = (is_raining, have_umbrella) => {
  !is_raining  // if
    ? console.log('enjoy the sunshine☀️') // if behavior 
    : have_umbrella  // else if 
      ? console.log('GO OUTSIDE') // else if behavior
      : console.log('Good excuse for a movie night') // else behavior
} 

// check that it works!
makeDecisions(true, true)
makeDecisions(true, false)
makeDecisions(false, false)
makeDecisions(false, true)
```
-------
## Let vs. Var
Let is block scoped and var is function scoped

```js
function createBoardLet(rowNum, colNum){
    let arr1 = []
    for(let row=0; row <rowNum; row++){
        arr1.push([])
        for(let col=0; col <colNum; col++){
            arr1[row].push(col)
        }
    }
    console.log(`arr1 --->`, arr1, '\n')
    console.log(`arr1 has ${row} rows and ${col} columns --> \n`, arr1)
}

function createBoardVar(rowNum, colNum){
    var arr2 = []
    for(var row=0; row <rowNum; row++){
        arr2.push([])
        for(var col=0; col <colNum; col++){
            arr2[row].push(col)
        }
    }
    console.log(`arr2 has ${row} rows and ${col} columns --> \n`, arr2)
}
```
-------
-------
-------

# Summary
- Key Value Assignment Shortcut
  - keeping object definition & access simple by naming variables the same as the corresponding key
- Forms of Arrow Functions 
  - a shorter, cleaner way to write functions (especially one liners)
  - has implications for binding of methods (OO in JS)
- Spread Operator
  - expands any iterable (string, array, object) to its set of items 
- Destructuring Assignment
  - unpacks values from an array or object into discrete variables
- Rest Operator
  - represents an indefinite number of arguments as an array (or an object in the case of objects)
- Ternary Operator
  - common shortcut for an "if" statement

-----
## External Resources

- [Modern Javascript](http://www.reactnativeexpress.com/modern_javascript)
- [Wes Bos Simple Guide for Undertanding Destructuring in JS](https://wesbos.com/destructuring-objects/)
- [MDN Article on ES6 Object Shorthand Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
- [MDN Article on ES6 Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN Article on Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Article on forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN `Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Future Reading
- [MDN Article on ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN Article on Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN "Working with Objects"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [MDN Article on `Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)



PARKING LOT 
- arrow funcs in reduce 