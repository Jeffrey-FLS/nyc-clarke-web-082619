const URL_PREFIX = 'http://localhost:3000/';
let page = 1;


/********************************* FETCH MONSTER FUNCTIONS ******************************/
function getMonsters(pageNum) {
    fetch(URL_PREFIX+`monsters/?_limit=50&_page=${pageNum}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#monster-container').innerHTML='';
            for(let monsterIdx=0; monsterIdx < data.length; monsterIdx++) {
                // console.log('monster',data[monsterIdx])
                createMonsterCard(data[monsterIdx])
            }
        }) 
}

/********************************* DISPLAYING FUNCTIONS ******************************/
function createMonsterCard(monster){
    let container = document.createElement('div'),
        name = document.createElement('h2'),
        // QUESTION 1 ANSWER 1 - age was an int element before 
        age = document.createElement('h4'),
        description = document.createElement('p');
    
    name.innerHTML = `${monster.name}`;
    age.innerHTML = `Age: ${monster.age}`;
    description.innerHTML = `Bio: ${monster.description}`;
    container.appendChild(name);
    container.appendChild(age);
    container.appendChild(description);
    document.querySelector('#monster-container').appendChild(container)
}

/********************************* NEW MONSTER RELATED FUNCTIONS ******************************/
const createMonsterForm = () => {
    const form = document.createElement('form'),
        nameInput = document.createElement('input'),
        ageInput = document.createElement('input'),
        descriptionInput = document.createElement('input'),
        submit = document.createElement('button');
    
    form.setAttribute('id','monster-form');
    nameInput.setAttribute('id','name')
    // QUESTION 5 ANSWER 1 (commented out)
    // nameInput.setAttribute('required', true);
    nameInput.setAttribute('placeholder', 'name...');
    ageInput.setAttribute('id','age')
    ageInput.setAttribute('placeholder', 'age...');
    descriptionInput.setAttribute('id','description')
    descriptionInput.setAttribute('placeholder', 'description...');
    submit.innerHTML = 'Create';

    [nameInput, ageInput, descriptionInput, submit].forEach(element => form.appendChild(element))


    document.getElementById('create-monster').appendChild(form);
    addSubmitEventListener()
}

const addSubmitEventListener = () => {
    document.querySelector('#monster-form').addEventListener('submit', event => { 
        event.preventDefault();
        console.log('submitted',getFormData());
        const monsterData = getFormData()
        // QUESTION 5 ANSWER 2 (commented out)
        // if(!monsterData.name.length === 0) {
            postNewMonster(monsterData);
            clearForm()
        // }
        // else {
        //     alert('I NEED A NAME 😔')
        // }
    })
}

const getFormData = () => {
    let name = document.querySelector('#name'),
        age = document.querySelector('#age'),
        description = document.querySelector('#description');
    // QUESTION 5 ANSWER 3 
    if(name.value === ""){
        alert ('CANT BE EMPTY')
    } else {
        return{
            name: name.value,
            // QUESTION 4 ANSWER 1
            // we also looked at parseInt, but that returns an int instead of a float
            age: parseFloat(age.value), 
            description: description.value
        }
    }
        
}

function postNewMonster(monsterObj){
    // QUESTION 3 ANSWER 1 - before it was '/monsters' which cause there
    // to be two slashes - and the request to fail
    let url = URL_PREFIX + `monsters`,
        requestOptions = {
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(monsterObj)};
            
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => console.log('new monster', data))
        // QUESTION 6 PROMISE ERROR HANDLING
        // .catch(err => {
        //     alert('AYO USER THAT FAILED. WASNT YOUR FAULT BRO.')
        // }) 
}

const clearForm = () => { document.querySelector('#monster-form').reset() }


/********************************* PAGE NAVIGATION FUNCTIONS ******************************/
const addNavListeners = () => {
    let backButton=document.querySelector('#back'),
        forwardButton=document.querySelector('#forward');
    backButton.addEventListener('click',()=>{pageDown()});
    forwardButton.addEventListener('click',()=>{pageUp()});
}
const setPageNum = (page) => {
    const pageNumElement = document.getElementById('page-num')
    pageNumElement.innerHTML = page
}
const pageUp = () => { page++; getMonsters(page); setPageNum(page) }
const pageDown = () => {
    // QUESTION 2 ANSWER 1
    if(page > 1) {
        page--; 
        getMonsters(page);
        setPageNum(page)
    } else {
        alert('No monsters there homie')
    }
}

const init = () => {
    console.log('innit, mate')
    setPageNum(page);
    getMonsters(page);
    createMonsterForm();
    addNavListeners();
    };


/********************************* DOMCONTENTLOADED LISTENER ******************************/
document.addEventListener('DOMContentLoaded', init);