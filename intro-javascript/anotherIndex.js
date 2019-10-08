// Add an eventlistener to the form
// I have to find the form

const form = document.querySelector('form');
const todoListNode = document.querySelector('ul.todolist');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // when a user submits the form
  // take what is in the input
    // use javascript to get the input node
    // console.dir(event.target[0].value);

  let inputValue = event.target.newTodo.value;
  // let inputTag = document.querySelector('input');
  // console.log(inputTag.value);
  // add it to the todo list
    // make a new node with the value as innerText
    // append that node to the UL
      // find the UL first
  // newLi.className = "list-items";
  // newLi.setAttribute('class', 'list-items');


  let ulTag = document.querySelector('ul.todolist');
  ulTag.append(createTodoItem(inputValue));
  event.target.newTodo.value = '';
})

// add event lister to todoListNode
todoListNode.addEventListener('click', function(event) {

  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.remove();
  }
})



function createTodoItem(content) {
  let newLi = document.createElement('li');
  newLi.classList.add('list-items');
  newLi.innerHTML = `
    <p>${content}</p>
    <button>🗑</button>
  `
  return newLi
}