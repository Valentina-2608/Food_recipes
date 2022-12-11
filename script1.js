

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
        info_search.style.display = 'none';
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
    search_recipe.value = '';
    search_ingredients.value = '';
}



/* Create list of recipes */

function createRecipe(elem, elem_image, elem_caption, elem_ingredients){
    let parent = document.getElementById('recipes');
    let new_recipe = document.createElement('div');
    new_recipe.classList.add('recipe_card');
    parent.appendChild(new_recipe);


    /* Add image */
    let recipe_image = document.createElement('img');
    recipe_image.classList.add('recipe_image');
    recipe_image.src = elem_image;
    new_recipe.appendChild(recipe_image);


    /* Add caption */
	let recipe_caption = document.createElement('div');
	recipe_caption.classList.add('recipe_caption');
	recipe_caption.innerHTML = elem_caption;
	new_recipe.appendChild(recipe_caption);
	
	/* Add ingredients */
	let recipe_ingredients = document.createElement('div');
	recipe_ingredients.classList.add('recipe_ingredients');
	recipe_ingredients.innerHTML = 'Ingredients: ' + elem_ingredients;
	new_recipe.appendChild(recipe_ingredients);

}




function load(){
	let myRecipes = JSON.parse(recipes);
    for(let recipe of myRecipes){
        createRecipe(recipe, recipe.image, recipe.caption, recipe.ingredients);
       
}
 /* creating arr from nodelist */
let recipe_cards = document.querySelectorAll('.recipe_card');
let arr = [];
for(let elem of recipe_cards){
    arr.push(elem);
   
} 
/* creating pagination */

let pagination = document.getElementById('pagination');

let cardsOnPage = 16;
let countOfItems = arr.length/cardsOnPage;
let items = [];

for(let i = 1; i<= countOfItems; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li)
    items.push(li);
}

for(let item of items){
    item.addEventListener('click', function(){
        let pageNumber =+this.innerHTML;
        console.log(typeof(pageNumber));
        let start = (pageNumber - 1 ) * cardsOnPage;
        let end = start + cardsOnPage;

        let cards = arr.slice(start, end);
        


    });

}

}
