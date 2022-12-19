

let show_ing = document.querySelector('.show_ing');
let show_input = document.querySelector('.show_input');
let search_menu = document.querySelector('.search_menu');
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
        search_menu.style.top = "140px";
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
        search_menu.style.top = "140px";
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
    search_menu.style.top = "100px";
}



/* Create list of recipes and pagination */




function load(){
	let myRecipes = recipes;
    let pagination = document.getElementById('pagination');

    let cardsOnPage = 16;
    let countOfItems = Math.ceil(myRecipes.length/cardsOnPage);

    let showPage = (function(){
        let active;
            return function(item){
    
             if (active){
                active.classList.remove('active_item');
            }

            active = item;
            item.classList.add('active_item');



            let pageNumber =+item.innerHTML;
             let start = (pageNumber - 1 ) * cardsOnPage;
            let end = start + cardsOnPage;

            let cards = myRecipes.slice(start, end);
            let parent = document.getElementById('recipes');
            parent.innerHTML = '';
            for(let elem of cards){
      
                let new_recipe = document.createElement('div');
                new_recipe.classList.add('recipe_card');
                parent.appendChild(new_recipe);
    
    
                /* Add image */
                let recipe_image = document.createElement('img');
                recipe_image.classList.add('recipe_image');
                recipe_image.src = elem.image;
                new_recipe.appendChild(recipe_image);
    
    
                /* Add caption */
                let recipe_caption = document.createElement('div');
                recipe_caption.classList.add('recipe_caption');
                recipe_caption.innerHTML = elem.caption;
                new_recipe.appendChild(recipe_caption);
        
                /* Add ingredients */
                let recipe_ingredients = document.createElement('div');
                recipe_ingredients.classList.add('recipe_ingredients');
                recipe_ingredients.innerHTML = 'Ingredients: ' + elem.ingredients;
                new_recipe.appendChild(recipe_ingredients);
         }
    
    };
}());


let items = [];

/* pagination's items */
    for(let i = 1; i<= countOfItems; i++){
        let li = document.createElement('li');
        li.innerHTML = i;
        pagination.appendChild(li)
        items.push(li);
    }

    showPage(items[0]);

    for(let item of items){
        item.addEventListener('click', function(){
            showPage(this);
        });
    }


}

