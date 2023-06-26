const gallery = document.getElementById('gallery');
//

function showImage(display) {

    let box;

display.forEach((display) => {
    box = document.createElement('div');
    box.className = 'card';
    box.innerHTML = 
    `
    <div class="card-img-container">
    <img class="card-img" src=${display.picture.medium}" alt=${display.name.last}>
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${display.name.first} ${display.name.last}</h3>
    <p class="card-text">${display.email}</p>
    <p class="card-text cap">${display.location.city}, ${display.location.state}</p>
</div>
    `

    gallery.insertAdjacentElement('beforeend', box);

    box.addEventListener('click', (e)=>{

        modalFunction(display)
    });


});

};

function modalFunction(display){



    let modalDisplay = document.createElement('div');
    modalDisplay.className = 'modal-container';

    modalDisplay.innerHTML = 
    `
    <div class="modal">
    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
    <img class="modal-img" src="${display?.picture?.medium}" alt="${display?.name?.last}">
    <h3 id="name" class="modal-name cap">${display?.name?.first} ${display?.name?.last}</h3>
    <p class="modal-text">${display?.email}</p>
    <p class="modal-text cap">${display?.location?.city}</p>
    <hr>
    <p class="modal-text">${display?.phone}</p>
    <p class="modal-text">${display?.location?.street?.number}, ${card?.location?.street?.name}, ${card?.location?.city}, ${card?.location?.state} ${card?.location?.postcode}</p>
    <p class="modal-text">Birthday: ${month}${day}${year}</p>
    </div>
    `
    
//
    gallery.appendChild(modalDisplay);

    //

modalDisplay.addEventListener('click', (e)=>{
    if(e.target.tagName === 'STRONG'){
        gallery.removeChild(gallery.lastElementChild);

        }

    });


}




//
fetch("https://randomuser.me/api/?results=12")
.then((response)=> response.json())
.then((data)=> showImage(data.results))