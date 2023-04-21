//Создаю объект хранения ингредиентов
const ingredientStorage = {
  flour: { cost: 2 },
  sugar: { cost: 1 },
  butter: { cost: 3 },
  eggs: { cost: 2 },
  salt: { cost: 0.5 },
  pasta: { cost: 2 },
  groundBeef: { cost: 4 },
  tomatoSauce: { cost: 0.5 },
  breadCrumbs: { cost: 1 },
  chickenBreast: { cost: 2 },
  vegetables: { cost: 2 },
  soySauce: { cost: 0.5 },
  cornstarch: { cost: 0.2 },
  rice: { cost: 0.3 },
};

//Создаю набор блюд
const dishes = [{
  name: "Chocolate chip cookies",
  ingredients: ["flour", "sugar", "butter", "eggs", "salt"],
  cookingCost: 0,
  sellingPrice: 24,
  profit: 0,
},
{
  name: "Spaghetti with meatballs",
  ingredients: ["pasta", "groundBeef", "tomatoSauce", "breadCrumbs", "eggs"],
  cookingCost: 0,
  sellingPrice: 28,
  profit: 0,
},
{
  name: "Chicken stir-fry",
  ingredients: ["chickenBreast", "vegetables", "soySauce", "cornstarch", "rice"],
  cookingCost: 0,
  sellingPrice: 15,
  profit: 0,
},
];

// // Рассчитываю стоимость приготовления каждого блюда
// for (let i = 0; i < dishes.length; i++) {
//   let cookingCost = 0;
//   for (let j = 0; j < dishes[i].ingredients.length; j++) {
//     let ingredient = dishes[i].ingredients[j];
//     cookingCost += ingredientStorage[ingredient].cost;
//   }
//   dishes[i].cookingCost = cookingCost;
// }

// // Рассчитаю прибыль по каждому блюду
// for (let i = 0; i < dishes.length; i++) {
//   let profit = dishes[i].sellingPrice - dishes[i].cookingCost;
//   dishes[i].profit = profit;
// }

// console.log(dishes);

// Функция для подсчета себестоимости блюда
function calculateCookingCost(dish) {
    return dish.ingredients.reduce(function(acc, ingredient) {
      return acc + ingredientStorage[ingredient].cost;
    }, 0);
  }
  
  // Рассчитываю стоимость приготовления каждого блюда
  dishes.forEach(function(dish) {
    dish.cookingCost = calculateCookingCost(dish);
  });
  
  // Используем map для получения массива с названием и стоимостью каждого блюда
  const dishNamesAndCosts = dishes.map(function(dish) {
    return { name: dish.name, cost: dish.cookingCost };
  });
  
  console.log(dishNamesAndCosts);
  
  // Определяем, есть ли в меню хоть одно вегетарианское блюдо
  const hasVegetarianDish = dishes.some(function(dish) {
    return dish.ingredients.every(function(ingredient) {
      return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
    });
  });
  
  console.log("Есть ли в меню хоть одно вегетарианское блюдо? " + hasVegetarianDish);
  
  // Определяем, полностью ли у нас вегетарианское меню
  const isAllVegetarian = dishes.every(function(dish) {
    return dish.ingredients.every(function(ingredient) {
      return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
    });
  });
  
  console.log("Полностью ли у нас вегетарианское меню? " + isAllVegetarian);
  
  // Создаем массив с вегетарианскими блюдами с помощью filter
  const vegetarianDishes = dishes.filter(function(dish) {
    return dish.ingredients.every(function(ingredient) {
      return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
    });
  });
  
  console.log(vegetarianDishes);
  