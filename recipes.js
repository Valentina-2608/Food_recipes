let recipes = `[
    { 
        "id":1,
        "image":"img/black_cake.jpg",
        "caption": "Black Cake",
        "ingredients": "prune, current, cherriesm raisins, citrus peel, cherry brandy, sugar, flower, eggs, lemon"
    },

    { 
        "id":2,
        "image":"img/pumkin_cake.jpg",
        "caption": "Pumpkin Spice Crumb Cake",
        "ingredients": "flour, larg eggs, cinnaman, pumpkin purée, sugar, vegetable oil, vanilla extract, grated fresh ginger"
    },
    { 
        "id":3,
        "image":"img/blueberry_cake.jpg",
        "caption": "Blueberry Muffin Cake",
        "ingredients": "flour, sugar, butter, milk, blueberries, vanilla extract, egg, ground cinnamon"
    },
    { 
        "id":4,
        "image":"img/sticky_pudding.jpg",
        "caption": "Sticky Toffee Apple Pudding",
        "ingredients": "butter, flour, sugar, baking powder, milk, egg, bramley apples, vanille extract"
    },
    { 
        "id":5,
        "image":"img/apple_walnut_cake.jpg",
        "caption": "Apple-Walnut Upside-Down Cake",
        "ingredients": "walnuts, flour, baking soda,baking powder, sugar, cinnamon, eggs, butter, baking apples, Greek yogurt"
    },
    { 
        "id":6,
        "image":"img/lemon_cake.jpg",
        "caption": "Lemon Cake with Fruit",
        "ingredients": "butter, flour, baking powder, lemon, eggs, pear or apple brandy, pear or apples, blueberries"
    },
    { 
        "id":6,
        "image":"img/honey_cake.jpg",
        "caption": "Honey Cake",
        "ingredients": "flour, baking powder, butter, honey, eggs, milk, orange zest, almond flakes, lemon juice, water"
    },
    { 
        "id":7,
        "image":"img/burgers-caprese.jpg",
        "caption": "Caprese Burger",
        "ingredients": "balsamic vinegar, virgine olive oil, salt, pepprer, slice tomato, tomato paste, Parmesan cheese, Mozzarella cheese, hamburger buns"
    },
    { 
        "id":8,
        "image":"img/mushroom-burger.jpeg",
        "caption": "Mushroom Veggie Burger",
        "ingredients":"olive oil, mushrooms, black pepper, oregano, breadcrumbs, eggs, shredded Parmigiano-Reggiano cheese"
    },
    { 
        "id":8,
        "image":"img/chicken-burger.jpg",
        "caption": "Baked Chicken Burger",
        "ingredients":"ground chicken, egg, vegetable oil, liquid smoke flavoring, garlic powder, fresh basil"
    },
    { 
        "id":9,
        "image":"img/caesar_salad.jpg",
        "caption": "Caesar Salad Supreme",
        "ingredients":"garlic, mayonnaise, Parmesan cheese, lemon juice, olive oil, day-old bread, anchovy fillets"
    },
    { 
        "id":9,
        "image":"img/fruit_salad.jpg",
        "caption": "Summer Fruit Salad",
        "ingredients": "pineapple, kiwi, bananas, oranges, grapes, blueberries, strawberried, fresh lemon and orange juice"
    },
    { 
        "id":9,
        "image":"img/vegetable_salad.jpeg",
        "caption": "Vegetable Salad",
        "ingredients": "lettuce, radishes, tomatoes, green onion, cucumber, red bell pepper, olive oil, lemon juice, basil"
    },
    { 
        "id":10,
        "image":"img/chicken_salad.jpg",
        "caption": "Chicken Salad",
        "ingredients": "chicken, mayonnaise, celery, almonds, lemon juice, black pepper"
    },
    { 
        "id":11,
        "image":"img/greek_salad.jpg",
        "caption": "Greek Orzo Salad",
        "ingredients": "orzo pasta, cucumber, tomato, red onion, feta cheese, lemon juice, oregano, black olives, artichokes"
    },
    { 
        "id":11,
        "image":"img/mozzarella_salad.jpg",
        "caption": "Tomato Mozzarella Salad",
        "ingredients": "tomatoes, mozzarella cheese, olive oil, balsamic vinegar, black pepper, fresh basil"
    },
     { 
        "id":12,
        "image":"img/green_pea_salad.jpg",
        "caption": "Green Pea Salad With Cheddar Cheese",
        "ingredients": "green sweets peas, eggs, Cheddar cheese, mayonnaise, onion, black pepper"
     },
     { 
        "id":13,
        "image":"img/pasta_salad.jpg",
        "caption": "Simple Pasta Salad",
        "ingredients": "rotini pasta, cucumbers, tomatoes, green onion, Parmesan cheese, Italian seasoning"
     },
     { 
        "id":13,
        "image":"img/s_s_salad.jpg",
        "caption": "Spinach and Strawberry Salad",
        "ingredients": "spinach, strawberries, sugar, white wine vinegar, sesame seeds, poppy seeds"
     },
     { 
        "id":14,
        "image":"img/roast_chicken.jpg",
        "caption": "Roast Chicken",
        "ingredients": "chicken, salt, pepper, onion powder, celery"
     },
     { 
        "id":15,
        "image":"img/smoked_chicken_drumsticks.jpg",
        "caption": "Smoked Chicken Drumsticks",
        "ingredients": "chicken drumsticks, vegetable oil"
     },
     { 
        "id":16,
        "image":"img/marmalade_chicken.jpg",
        "caption": "Orange Marmalade Chicken",
        "ingredients": "chicken drumsticks, salt, pepper, orange marmalade, barbeque sauce, soy sauce"
     },
     { 
        "id":17,
        "image":"img/apricot_chicken.jpeg",
        "caption": "Apricot Chicken Curry",
        "ingredients": "chicken drumsticks, salt, pepper, olive oil, garlic, apricot nectar, dried apricots, onion, carrots, water chestnuts"
     },
     { 
        "id":17,
        "image":"img/lemon_chicken.jpg",
        "caption": "Italian Chicken with Garlic and Lemon",
        "ingredients": "chicken drumsticks, potatoes, wine vinegar, lemons, garlic, oregano, onion, parsley, salt, pepper"
     },
     { 
        "id":18,
        "image":"img/coconut_chicken.jpg",
        "caption": "Green Coconut Chicken",
        "ingredients": "Chicken legs, salt, vegetable oil, coconut milk, garlic, pepper, cilantro, onion, ginger, lemon juice, sweet potato"
    },
    { 
        "id":19,
        "image":"img/grapefruit_chicken.jpeg",
        "caption": "Roast Chicken with Grapefruit",
        "ingredients": "red grapefruit, chicken, pepper, parsley, bacon, olive oil, cognac or brandy, "
    },
    { 
        "id":20,
        "image":"img/roast_turkey.jpeg",
        "caption": "Roast turkey",
        "ingredients": "Turkey, salt, pepper, turkey stock"
    },
    { 
        "id":21,
        "image":"img/grill_turkey.jpg",
        "caption": "Gas Grill Turkey",
        "ingredients": "Turkey, water, butter, salt, chicken bouillon granules, black pepper"
    },
    { 
        "id":22,
        "image":"img/turkey_and_apples.jpg",
        "caption": "Apple-Stuffed Turkey",
        "ingredients": "Turkey, vegetable oil, apples, unpeeled apples"
    },
    { 
        "id":23,
        "image":"img/honey_turkey.jpg",
        "caption": "Honey-Smoked Turkey",
        "ingredients": "Turkey, honey, vegetable oil, pepper, salt, fresh basil, salt"
    },
    { 
        "id":24,
        "image":"img/tuna_steak.jpg",
        "caption": "Marinated Tuna Steak",
        "ingredients": "orange juice, soy sauce, olive oil, parsley, lemon juice, garlic, fresh oregano, tuna steaks"
        
    },
    { 
        "id":25,
        "image":"img/grilled_salmon.jpg",
        "caption": "Grilled Salmon",
        "ingredients": "salmon, black pepper, garlic powder, soy sauce, brown sugar, water, vegetable oil "
    },
    { 
        "id":26,
        "image":"img/maple_salmon.jpg",
        "caption": "Maple Salmon",
        "ingredients": "maple syrup, soy sauce, garlic, seasonings, salmon "
    },
    { 
        "id":26,
        "image":"img/cedar_salmon.jpeg",
        "caption": "Cedar Planked Salmon",
        "ingredients": "soy sauce, vegetable oil, rice vinegar, sesame oil, green onions, garlic, salmon fillets"
    },
    { 
        "id":27,
        "image":"img/haddock.jpg",
        "caption": "Simple Broiled Haddock",
        "ingredients": " haddock fillets, onion powder, paprika, garlic powder, black pepper, salt, butter, lemon"
    },
    { 
        "id":27,
        "image":"img/flounder.jpg",
        "caption": "Baked Flounder with Panko and Parmesan",
        "ingredients": "flounder fillets, butter, bread crumbs, Parmesan cheese, salt, ground black pepper"
    },
    { 
        "id":27,
        "image":"img/fish_chips.jpg",
        "caption": "Classic Fish and Chips",
        "ingredients": "potatoes,flour, baking powder, salt,  black peppe, milk, egg, vegetable oil, cod fillets"
    }

    ]`