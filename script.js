/* Script */


/* Show and hide search window */

let search_btn= document.getElementById('search_btn');
let modal = document.querySelector('.modal');
let content = document.querySelector('.content');
search_btn.addEventListener('click', openWindowSearch);
content.addEventListener('click', closeModal);
	
function openWindowSearch(){
     modal.style.display = "block"; 
}



function closeModal(){
    modal.style.display = "none"; 
}