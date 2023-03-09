const dish1 = {
    name: "pizza",
    ingredients: ["dough", "tomato sauce", "chees", "ham", "champignons"],
    price: 12,
    cost: 5
  };
  
  const dish2 = {
    name: "salad",
    ingredients: ["lettuce", "tomatoes", "cucumbers", "olives", "feta cheese"],
    price: 6,
    cost: 2
  };
  
  const dish3 = {
    name: "soup",
    ingredients: ["meat broth", "potato", "carrot", "onion", "chicken"],
    price: 8,
    cost: 3
  };
  
  const menu = [dish1, dish2, dish3];
  
  menu.shift();
  const removedDish = {
    name: "pizza",
    ingredients: ["dough", "tomato sauce", "chees", "champignons"],
    price: 12,
    cost: 5
  };
  menu.unshift(removedDish);
  
  menu.forEach(dish => {
    const profit = dish.price - dish.cost;
    dish.profit = profit;
  });
  console.log(menu);

  //Выводим все четные числа до 10, без continue

  let count = 0;
let i = 0;

while (count < 10) {
  if (i % 2 === 0) {
    console.log(i);
    count++;
  }
  i++;
}

//Создаем цикл и прерываем на 5

let count2 = 0;

while (true) {
  if (count === 5) {
    break;
  }
  console.log("Iteration:", count2);
  count2++;
}
//3 задание из урока)

//Создаю объект хранения ингредиентов
const ingredientStorage = {
  flour: { cost: 2 },
  sugar: { cost: 1 },
  butter: { cost: 3 },
  eggs: { cost: 2 },
  salt: { cost: 0.5 },
};

//Создаю набор блюд
const dishes = [  {    name: "Chocolate chip cookies",    ingredients: ["flour", "sugar", "butter", "eggs", "salt"],
    cookingCost: 0,
    sellingPrice: 5,
    profit: 0,
  },
  {
    name: "Spaghetti with meatballs",
    ingredients: ["pasta", "ground beef", "tomato sauce", "breadcrumbs", "eggs"],
    cookingCost: 0,
    sellingPrice: 12,
    profit: 0,
  },
  {
    name: "Chicken stir-fry",
    ingredients: ["chicken breast", "vegetables", "soy sauce", "cornstarch", "rice"],
    cookingCost: 0,
    sellingPrice: 15,
    profit: 0,
  },
];

// Рассчитываю стоимость приготовления каждого блюда
for (let i = 0; i < dishes.length; i++) {
  let cookingCost = 0;
  for (let j = 0; j < dishes[i].ingredients.length; j++) {
    let ingredient = dishes[i].ingredients[j];
    cookingCost += ingredientStorage[ingredient].cost;
  }
  dishes[i].cookingCost = cookingCost;
}

// Рассчитаю прибыль по каждому блюду
for (let i = 0; i < dishes.length; i++) {
  let profit = dishes[i].sellingPrice - dishes[i].cookingCost;
  dishes[i].profit = profit;
}

console.log(dishes);

  