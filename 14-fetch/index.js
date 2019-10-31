// on document load get a new joke
// create a button and on click get a new joke and add it to the page


function getNewJoke() {
    fetch('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw',{
        method: 'GET'
        // headers: {}
        // body: {}
    })
        .then(function (response) {return response.json()} ) // response => response.json()
        .then(function(json) { 
            let joke = json.joke || json.setup + '\n'+ json.delivery;
            console.log(json)
            let container = document.getElementById('jokes');
            let jokeP = document.createElement('p');
            jokeP.innerText = joke;
            container.appendChild(jokeP)
        })
}


//document.addEventListener('DOMContentLoaded', getNewJoke)

document.addEventListener('DOMContentLoaded', function() {
    getNewJoke()
    // GOAL: when the button is pressed, add a new joke to the screen 
    let button = document.getElementById('new-joke-button')
    button.addEventListener('click', getNewJoke)
})



























// if we're feeling fancy (and there are ids on the jokes which there should be....)
//      make sure that the new joke is not currently already on the page 
//      if it is, just don't add a new joke. Maybe add some sassy WOMP WOMPPPP response? clear
