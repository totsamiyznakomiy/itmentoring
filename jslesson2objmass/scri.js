let dishes = [
  {
    name: 'Beef Stew',
    ingredients: ['potatoes', 'carrots', 'onions', 'beef'],
    sellPrice: 15,
    costOfPreparation: 0 
  },
  {
    name: 'Roasted Chicken',
    ingredients: ['chicken', 'potatoes', 'carrots', 'onions'],
    sellPrice: 12,
    costOfPreparation: 0 
  },
  {
    name: 'Fish and Chips',
    ingredients: ['fish', 'potatoes'],
    sellPrice: 10,
    costOfPreparation: 0 
  }
];

let ingredientsCost = {
  'potatoes': 1,
  'carrots': 0.5,
  'onions': 0.3,
  'beef': 5,
  'chicken': 3,
  'fish': 4
};

for (let i = 0; i < dishes.length; i++) {
  let cost = 0;
  for (let j = 0; j < dishes[i].ingredients.length; j++) {
    cost += ingredientsCost[dishes[i].ingredients[j]];
  }
  dishes[i].costOfPreparation = cost;
};

for (let i = 0; i < dishes.length; i++) {
  dishes[i].profit = dishes[i].sellPrice - dishes[i].costOfPreparation;
};

for (let i = 0; i < dishes.length; i++) {
  console.log(`Dish: ${dishes[i].name}`);
  console.log(`Ingredients: ${dishes[i].ingredients.join(', ')}`);
  console.log(`Cost of preparation: $${dishes[i].costOfPreparation}`);
  console.log(`Sell price: $${dishes[i].sellPrice}`);
  console.log(`Profit: $${dishes[i].profit}\n`);
}


	