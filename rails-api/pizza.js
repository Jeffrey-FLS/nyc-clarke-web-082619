document.addEventListener('DOMContentLoaded', () => {
  // find the pizza-container
  const pizzaContainer = document.querySelector('.pizza-container');

  
  // fetch data from pizza server
  fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(({ data }) => {
      data.forEach( ({ attributes: { name, img_url } }) => {

        // use the data to create pizza divs (cards)
        let pizzaCard = document.createElement('div');
        pizzaCard.classList.add('pizza-card');
        pizzaCard.innerHTML = `
        <p>${name}</p>
        <img src="${img_url}">
        `
        // append those cards to pizza container
        pizzaContainer.append(pizzaCard)
      })
    }) 
})