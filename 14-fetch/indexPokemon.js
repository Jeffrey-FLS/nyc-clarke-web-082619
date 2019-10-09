// GOAL: pokemon appear on screen! 
// fetch (localhost:3000/pokemon)
// parse the json 
// get the element where we want to put it
// use helper method to create HTML coresponding to each pokemon object
// put the new HTML pokemon into the container 

function gottaCatchEmAll() {
  fetch('http://localhost:3000/pokemon', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) { // (response) => {}
      return response.json()
    })
    .then(data => {
      let container = document.getElementById('pokemon-container');
      let htmlArray = data.map(function(pokemon) {
         return renderSinglePokemon(pokemon)
      })
      let joinedArray = htmlArray.join(' ')
      container.innerHTML = joinedArray

    })
}


function addNewPokemon(event){
  event.preventDefault()

  // get the info from the form, 
  //     the container where we'll put the new pokemon
  //     and create a new HTML string using our helper function

  let name = document.getElementById('name-input').value
  let sprite = document.getElementById('sprite-input').value
  let newPokemonOptimistic = renderSinglePokemon({name: name, id:'temp', sprites: {'front': sprite}})
  let container = document.getElementById('pokemon-container');

  // send a POST request with our data in a stringified JSON body, formatted correctly 
  fetch('http://localhost:3000/pokemon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'sprites': {
        'front': sprite,
        'back': ''
      }
    })
  }) 
  .then(response => {
    return response.json()
  })
  .then(resource => {
    document.getElementById('temp').setAttribute('id',resource.id)
      // change the id for the optimistically rendered pokemon
  })
  .catch(err => {
    // remove the optimistically rendered pokemon if something failed 
    let optimisticPokemon = document.getElementById('temp')
    container.removeChild(optimisticPokemon)
  })

    //optimistically render the HTML string of our new Pokemon while the fetch runs 
    container.innerHTML += newPokemonOptimistic

}

document.addEventListener('DOMContentLoaded', () => {
  gottaCatchEmAll()
  document.getElementById('pokemon-post-form').addEventListener('submit', addNewPokemon)
})

/******************************* HELPER FUNCTIONS *******************************/

  
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
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites ? pokemon.sprites.front : pokemon.sprite.front}">
        </div>
        <button data-action="delete" class="pokemon-button">Delete</button>
      </div>
    </div>`)
  }
/******************************* END HELPER FUNCTIONS *******************************/


 
