// Pet Renting Service

let rootContainer = document.getElementById('root')

const createForm = () => {
    let form = document.createElement('form');
    form.setAttribute('id', 'pet-form')
    let species = document.createElement('input')
    species.setAttribute('id', 'species')
    species.setAttribute('placeholder', 'species')
    species.setAttribute('name', 'species')
    let name = document.createElement('input')
    name.setAttribute('id', 'name')
    name.setAttribute('placeholder', 'name')
    name.setAttribute('name', 'name')
    let age = document.createElement('input')
    age.setAttribute('id', 'age')
    age.setAttribute('placeholder', 'age')
    age.setAttribute('name', 'age')
    let comment = document.createElement('input')
    comment.setAttribute('id', 'comment')
    comment.setAttribute('placeholder', 'Comment')
    comment.setAttribute('name', 'comment')

    let submit = document.createElement('button')
    submit.innerHTML = 'Submit Pet';

    [species, name, age, comment, submit].forEach(element => form.appendChild(element))
    rootContainer.appendChild(form)
}

const renderPet = (data) => {
    let pet = new Pet(data)  // create new pet instance using backend data
    let petHTML = pet.render() // create HTML for the pet 
    rootContainer.appendChild(petHTML) // add HTML for pet to the DOM
}

const submitPet = (event) => {
    event.preventDefault();

    const comment = event.target.comment.value
    const species = event.target.species.value
    const name = event.target.name.value
    const age = event.target.age.value

    renderPet({age, name, species, comment, id: 0, popularity: 0})

    // RENDERPET DOES THE BELOW FOR ME
    // let newPet = new Pet() // create my pet instance
    // let newPetHTML = newPet.render()  // call the render
    // rootContainer.appendChild(newPetHTML)

   
    
    fetch('http://localhost:3000/pets', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, species, age, comment, "popularity": 0})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            // get the element we optimistically rendered
            // update the attributes that we set temporarily 
            // in this case just the id on the div 
        })
        // .catch(err => {
            // in the fail case
            // find the element with the id (or use the pet's element)
            // remove it from the DOM
        // })
}

createForm();
let petForm = document.getElementById('pet-form')
petForm.addEventListener('submit', submitPet)

fetch('http://localhost:3000/pets')
    .then(response => response.json())
    .then(data => {
        data.forEach(pet => renderPet(pet))
    })
