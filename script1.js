

let show_ing = document.querySelector('.show_ing');
let show_input = document.querySelector('.show_input');
let search_ingredients = document.getElementById('search_ingredients');
show_ing.addEventListener('click', showInput);

function showInput(){
    show_ing.style.display = "none"; 
    show_input.style.display = "flex"; 
}