const gallery = document.getElementById('gallery');
//declaring the gallery variable for future markups

//
fetch("https://randomuser.me/api/?results=12")
.then((response)=> response.json())
.then((data)=> showImage(data.results))
//fetching required data from randomuser api, with 12 results

function showImage(display) {

    let box;
//forEach will iterate for every card being displayed
display.forEach((display, index) => {
    box = document.createElement('div');
    //create a div for each card
    box.className = 'card';
    //applying css
    box.innerHTML = `
    <div class="card-img-container">
    <img class="card-img" src="${display.picture.medium}" alt="${display.name.last}">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${display.name.first} ${display.name.last}</h3>
    <p class="card-text">${display.email}</p>
    <p class="card-text cap">${display.location.city}, ${display.location.state}</p>
</div>`
//gallery markup from index.html sample

    gallery.insertAdjacentElement('beforeend', box);
    //required statement per instructions for displaying

    box.addEventListener('click', (e)=>{
        //event listener for clicks on the card, will show
        //the modal
        modalFunction(display, index)
    })


})

}

function modalFunction(display, index){
//function to display the modal

    let modalDisplay = document.createElement('div');
    //create the div to display the modal
    modalDisplay.className = 'modal-container';
    //apply css


    
//
    gallery.appendChild(modalDisplay);
    //append to gallery
//

const dob = new Date(display.dob.date);
//changing the dob to only show year month date, and not time
const formattedDate = dob.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'

});
//



    modalDisplay.innerHTML = `
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
    <img class="modal-img" src="${display?.picture?.medium}" alt="${display?.name?.last}">
    <h3 id="name" class="modal-name cap">${display?.name?.first} ${display?.name?.last}</h3>
    <p class="modal-text">${display?.email}</p>
    <p class="modal-text cap">${display?.location?.city}</p>
    <hr>
    <p class="modal-text">Phone Number: ${display?.phone}</p>
    <p class="modal-text">Address: ${display?.location?.street?.number}, ${display?.location?.street?.name}, ${display?.location?.city}, ${display?.location?.state} ${display?.location?.postcode}</p>
    <p class="modal-text">Birthday: ${formattedDate} </p>
    </div>
    </div>
    `
    //modal markup from html sample

modalDisplay.addEventListener('click', (e)=> {
    if(e.target.tagName === 'STRONG'){
        gallery.removeChild(gallery.lastElementChild);

        }

    })
    //event listener for the click for the X-tagName is STRONG;



}




