

let show_ing = document.querySelector('.show_ing');
let search_ingredients = document.getElementById('search_ingredients');
show_ing.addEventListener('click', showInput);

function showInput(){
    show_ing.style.display = "none"; 
    search_ingredients.style.display = "block"; 
}