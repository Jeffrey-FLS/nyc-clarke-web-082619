## SWBATs
* Revisit Object Oriented Programming Paradigm (in javascript)
  * Multi-paradigm
    * Object Oriented
    * Functional Programming
  * Inheritance

* Create Classes and Instances in javascript (but know a little bit about whats going on under the hood)


* *this* is the window object OR `undefined` when we "use strict";
```javascript
function Pokemon(name, type) {
  this.name = name;
  this.type = type;
}
Pokemon.prototype.attack = function() {
  return `${this.name} used ${this.type} attack!`
}
const charmander = new Pokemon("Charmander", "Fire")

function Cup(type) {
  this.type = type
}

Cup.prototype.drink = function() {
  returns "glug glug glug"
}

var cup1 = new Cup("Coffee Mug")
```


```javascript
class Pokemon {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  sayHi() {
    return `${this.name} says hello...`
  }

  attack() {
    return `${this.name} used ${this.type} attack!`
  }
}

const charmander = new Pokemon("Charmander", "Fire")
```