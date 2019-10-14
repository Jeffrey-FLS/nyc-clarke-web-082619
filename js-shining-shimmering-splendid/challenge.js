/**
 * In these challenges, you're tasked with refactoring the code
 * There are multiple techniques you could with each
 * Ask your instructor for how you will be grouped and answer each challenge
 * Use the techniques from the README
 */


/***************** CHALLENGE 1 *****************/

function renderSinglePokemon(pokemon) {
    /**
     * Takes a pokemon object with keys name (string), id (int) and sprites (object with keys front and back strings)
     * returns string of HTML for pokemon 
     */
    return (`
    <div class="pokemon-card" id=${pokemon.id}>
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
        <button data-action="delete" class="pokemon-button">Delete</button>
      </div>
    </div>`)
  }

  const BULBASAUR = {
      id: 1,
      name: 'Bulbasaur',
      sprites: {
          front: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
          back: ''
      }
  }

  console.log('\n\n********** PROBLEM 1 **********\n')
  console.log(renderSinglePokemon(BULBASAUR))
  console.log('******************************\n')




/***************** CHALLENGE 2 *****************/
// this is NOT the whole function 
function addNewPokemon(){

    // helper lines of code
    let document = {}
    document.getElementById = () => {return {value: undefined}}
    // helper lines of code


    let name = document.getElementById('name-input').value || 'Sebastian'
    let sprite = document.getElementById('sprite-input').value || 'https://cdn.pixabay.com/photo/2013/07/13/13/32/demon-161049_960_720.png'

    let requestBody = JSON.stringify({
        'name': name,
        'sprites': {
          'front': sprite,
        }
      })

    return requestBody
}
console.log('********** PROBLEM 2 **********\n')
console.log(addNewPokemon())
console.log('******************************\n')


/***************** CHALLENGE 3 *****************/
function fizzBuzzSingle(num){
    /** if multiple of 3 print fizz, if multiple of 5 print buzz, if both fizzbuzz */
    if( num%3 === 0 && num%5 === 0 ){
        console.log('FizzBuzz')
    } else if (num%5 === 0) {
        console.log('Buzz')
    } else if (num%3 === 0) {
        console.log('Fizz')
    } else {
        console.log(num)
    }
}

console.log('********** PROBLEM 3 **********\n')
console.log('original fuction -----> ')
fizzBuzzSingle(6)
fizzBuzzSingle(10)
fizzBuzzSingle(12)
fizzBuzzSingle(13)
fizzBuzzSingle(15)
console.log('******************************\n')


/***************** CHALLENGE 4 *****************/

function removeIdentifiers(person) {
    if(person['name']){
        delete person['name']
    }
    if (person['gender']){
        delete person['gender']
    }
    if (person['age']){
        delete person['age']
    }
    return person
}

let gryffindor = [
    {name: 'Hermione', age:'16', gender: 'F', avg: 'A', pet: 'cat'},
    {name: 'Ron', age:'17', gender: 'M', avg: 'C', pet: 'rat'},
    {name: 'Harry', age:'16', gender: 'M', avg: 'B', pet: 'owl'},
    {name: 'Ginny', age:'13', gender: 'F', avg: 'B-', pet: 'lizard'},
]

console.log('********** PROBLEM 4 **********\n')
console.log('original function ---->', gryffindor.map(student => removeIdentifiers(student)))
console.log('******************************\n')




/***************** CHALLENGE 5 *****************/
// JS Date months start at 0 (So December is 11)
const birthdays= [
    [1931, 9, 09],
    [1956, 7, 16],
    [1982, 3, 25],
    [1988, 6, 11]
]

// REFERENCE
// new Date(year, month, day)

const jsDateBdays = birthdays.map(function([year, month, day]) {return new Date(year, month, day)})

console.log('********** PROBLEM 5 **********\n')
console.log(jsDateBdays)
console.log('******************************\n')