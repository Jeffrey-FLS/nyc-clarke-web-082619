console.log('hello from index.js')

// find a DOM node using document.querySelector:
let h1 = document.querySelector('h1');

// lets decalare a function that will return the string "rgb(random_number random_number random_number)"
function getRandomRGB() {
  return `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`
}


// setInterval is a built-in function that accepts 2 arguments - a function definition and a number (milleseconds)
// setInteral will invoke our function after the specified amount of time we defined.

// the code below will change our h1 to a random color every half second.
setInterval(function() {
  h1.style.color = getRandomRGB();
}, 500)