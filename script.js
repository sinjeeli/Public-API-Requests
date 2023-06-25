
function fetchData(url){
return fetch(url)
.then((response)=>(response.json()))
.then((data)=>data.results)
.catch((error)=> console.log('Errorz boi!:', error));

}
//
function createEmployeeCard(employee){

let anything;

employee.forEach((employee, index)=>
{
    anything = document.createElement('div');
    anything.className = 'card';
    anything.innerHTML = `
    <div class="card-img-container">
    <img class="card-img" src="${employee.picture.medium}" alt="${employee.name.first}">
</div>
<div class="card-info-container">
<h3 id="name" class="card-name cap">${result.name.first} ${result.name.last} </h3>
</div>`

})
gallery.insertAdjacentElement('beforeend', anything)

}
//
function createModal(employee, index){

    let modalContainer = document.createElement("div");;

    modalContainer.className = 'modal-container';

    modalContainer.innerHTML = `
    <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src="${employee?.picture?.medium}" alt="${employee?.name?.first}">

    `

    gallery.appendChild(modalContainer);


}
//
function formatCellNumber(employee){


}
//
function formatBirthday(employee){


}
//


fetchData('https://randomuser.me/api/?results=12')
.then((anything)=>{

    anything.forEach((anything2)=>{
        createEmployeeCard(anything2);

    });

})
//
.catch((error)=> console.log('Error', error));
//

document.getElementById('gallery').addEventListener('click', (e)=> {

    createModal(result, index)

});

document.getElementById('modal-close-btn').addEventListener('click', (e)=> {

    if(e.target.tagName === 'STRONG'){
        gallery.removeChild(gallery.lastElementChild);
    }

});
