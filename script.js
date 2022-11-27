/* Script */


/* Show and hide search window */

let search_btn = document.getElementById('search_btn');
let input_find = document.getElementById('input_find');
let modal = document.querySelector('.modal');
let close_modal = document.querySelector('.close_modal');
search_btn.addEventListener('click', openWindowSearch);
input_find.addEventListener('click', openWindowSearch);
close_modal.addEventListener('click', closeModal);
	
function openWindowSearch(){
     modal.style.display = "block"; 
}



function closeModal(){
    modal.style.display = "none"; 
}



