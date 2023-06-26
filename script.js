const gallery = document.getElementById('gallery');
//

//
fetch("https://randomuser.me/api/?results=12")
.then((response)=> response.json())
.then((data)=> showImage(data.results))

function showImage(display) {

    let box;

display.forEach((display, index) => {
    box = document.createElement('div');
    box.className = 'card';
    box.innerHTML = `
    <div class="card-img-container">
    <img class="card-img" src="${display.picture.medium}" alt="${display.name.last}">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${display.name.first} ${display.name.last}</h3>
    <p class="card-text">${display.email}</p>
    <p class="card-text cap">${display.location.city}, ${display.location.state}</p>
</div>`

    gallery.insertAdjacentElement('beforeend', box);

    box.addEventListener('click', (e)=>{

        modalFunction(display, index)
    })


})

}

function modalFunction(display, index){



    let modalDisplay = document.createElement('div');
    modalDisplay.className = 'modal-container';


    
//
    gallery.appendChild(modalDisplay);
//

const dob = new Date(display.dob.date);
const formattedDate = dob.toLocaleDateString('en-US', {

    year: 'numeric',
    month: 'long',
    day: 'numeric'

});


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
    //

modalDisplay.addEventListener('click', (e)=> {
    if(e.target.tagName === 'STRONG'){
        gallery.removeChild(gallery.lastElementChild);

        }

    })


}




