class Pet {
    constructor({id, species, name, age, comment, popularity}){
        this.name = name;
        this.species = species
        this.age = age;
        this.comment = comment; 
        this.popularity = popularity;
        this.id = id;
    }

    // increasePopularity 
    increasePopularity = () =>  { // need this to be an 
        this.popularity += 1; 

        // debugger;

        // find the popularity on the DOM and update it 
        // optimistically increase the popularity # of my instance
        let petChildrenElem = Array.from(this.element.children)
        let target = petChildrenElem.find(element => element.className === 'popularity')
        target.innerText = `${this.popularity} people want to rent ${this.name}`
        
        // send the PATCH back to the server 
        fetch(`http://localhost:3000/pets/${this.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"popularity": this.popularity})
        })
        .then(response => response.json())
        .then(data => {
            // could also pessimistically render here
            console.log(data)
        })
        // .catch(err => {
            // update the dom
            // update the instance of pet 
        // })
    }


    render() {
        this.element = document.createElement('div')
        this.element.setAttribute('class', 'pets-container')
        this.element.setAttribute('id', `pet-${this.id}`)
        let nameEl = document.createElement('h4');
        nameEl.setAttribute('class', 'name')
        nameEl.innerText = this.name
        let speciesEl = document.createElement('p');
        speciesEl.setAttribute('class', 'species')
        speciesEl.innerText = `Species: ${this.species}`
        let ageEl = document.createElement('p');
        ageEl.setAttribute('class', 'age')
        ageEl.innerText = `Age: ${this.age} years`
        let popularityEl = document.createElement('p');
        popularityEl.setAttribute('class', 'popularity')
        popularityEl.innerText = `${this.popularity} people want to rent ${this.name}`
        let commentEl = document.createElement('p');
        commentEl.setAttribute('class', 'comment')
        commentEl.innerText = `Owner comments: ${this.comment}`
        let interestButton = document.createElement('button')
        interestButton.setAttribute('class', 'interest')
        interestButton.innerText = "I'm interested!"

        this.element.appendChild(nameEl)
        this.element.appendChild(speciesEl)
        this.element.appendChild(ageEl)
        this.element.appendChild(popularityEl)
        this.element.appendChild(commentEl)
        this.element.appendChild(interestButton)

        interestButton.addEventListener('click', this.increasePopularity) // use arrow fnc above or this.increasePopularity.bind(this)
        // otherwise during execution "this" inside of increasePopularity refers to the button 

        return this.element

    }


}