

let show_ing = document.querySelector('.show_ing');
let show_input = document.querySelector('.show_input');
show_ing.addEventListener('click', showInput);

function showInput(){
    show_ing.style.display = "none"; 
    show_input.style.display = "flex"; 
}


let icon_search = document.querySelector('.icon_search');
let add_ing = document.querySelector('.add_ing');
let info_search = document.querySelector('.info_search')
icon_search.addEventListener('click', showInfo);


function showInfo(){
    info_search.style.display = 'flex';
}

let find_recipes = document.querySelector('.find_recipes');
let find_ingredients = document.querySelector('.find_ingredients');
let search_recipe = document.getElementById('search_recipe');
let search_ingredients = document.getElementById('search_ingredients');


icon_search.addEventListener('click', showInfoRecipes);
function showInfoRecipes(){
    if(search_recipe.value.length > 0){
        info_search.style.display = 'flex';
        find_recipes.innerHTML += ' ' + search_recipe.value;
    }else{
        alert('Please enter recipe');
    }
}

add_ing.addEventListener('click', showInfoIngredients);
function showInfoIngredients(){
    if(search_ingredients.value.length > 0){
        info_search.style.display = 'flex';
        find_ingredients.innerHTML += ' ' + search_ingredients.value;
    }else{
        alert('Please enter ingredients');
    }
}

let btn_clear = document.getElementById('btn_clear');
btn_clear.addEventListener('click', hideInfo);
function hideInfo(){
    info_search.style.display = 'none';
    find_recipes.innerHTML = 'Recipes of';
    find_ingredients.innerHTML = 'ingredients';
}