
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
  pasta: {cost:2},
  groundBeef: {cost:4},
  tomatoSauce: {cost:0.5},
  breadCrumbs: {cost:1},
  chickenBreast: {cost:2},
  vegetables: {cost:2},
  soySauce: {cost:0.5},
  cornstarch: {cost:0.2},
  rice: {cost:0.3},
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

