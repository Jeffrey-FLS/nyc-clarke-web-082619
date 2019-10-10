document.addEventListener('DOMContentLoaded', function() {
  // crud for hogans

  // find the form
  const hoganForm = document.querySelector('form');
  const hoganContainer = document.getElementsByClassName('hogan-container')[0];

  // talk to the server and get data for hogans
  fetch('http://localhost:3000/hogans')
    .then(function(response) {
      return response.json();
    })
    .then(function(hogansArray) {
      // iterate through the data and create hogan divs
      hogansArray.forEach(function(hoganObj) {
        // create a hogan card
        let hoganCard = newHoganCard(hoganObj.name, hoganObj.era, hoganObj.imgUrl, hoganObj.id)
        // append card to hogan container
        hoganContainer.append(hoganCard);
      })
      // append those hogan divs to hogan container
    })

  // create new hogan ===================================
  hoganForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // make a new div.hogan-card then append it to the page.
      // grab value from form;
    const name = event.target.hogan.value;
    const era = event.target.hoganEra.value;
    const imgUrl = event.target.hoganImg.value;

    fetch("http://localhost:3000/hogans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        era: era,
        imgUrl: imgUrl
      })
    })

    // create a new hogan card from these values
    hoganContainer.append(newHoganCard(name, era, imgUrl));
  })
  // ===================================================

  // delete hogan :( ====================================
  hoganContainer.addEventListener('click', function(event) {
    if (event.target.className === "delete-btn") {
      const id = event.target.parentNode.getAttribute('data-id');
      fetch(`http://localhost:3000/hogans/${id}`, {
        method: 'DELETE'
      })
      event.target.parentNode.remove();
      console.log('deleted!');
    }

    if (event.target.className === "like-btn") {
      console.log(event.target);
      console.log('Liked!!')
    }
  })
})


function newHoganCard(name, era, imgUrl, id) {
  const newHoganCard = document.createElement('div');
  newHoganCard.setAttribute("data-id", id);
  newHoganCard.classList.add('hogan-card');
  newHoganCard.innerHTML = `
      <p class="hogan-type">${name}</p>
      <p class="hogan-era">${era}</p>
      <div class="img-container">
        <img class="hogan-img" src="${imgUrl}" alt="${name}">
      </div>
      <button class="delete-btn">Delete 🗑</button>
      <button class="like-btn">Like 💪</button>
    `;
  // add eventlisterner to the hogan cards

  return newHoganCard;
}



