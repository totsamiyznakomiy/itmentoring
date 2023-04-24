// Получаем данные из файла с меню
fetch('/menu.json')
  .then(response => response.json())
  .then(response => console.log(response))
  .then(response => {
    menu = response;
    return fetch('/ingredientsPrice.json');
  })
  .then(response => response.json())
  .then(response => console.log(response));

// // Функция для подсчета себестоимости блюда
// function calculateCookingCost(dish) {
//   return dish.ingredients.reduce(function (acc, ingredient) {
//     return acc + ingredientStorage[ingredient].cost;
//   }, 0);
// }

// // Рассчитываю стоимость приготовления каждого блюда
// dishes.forEach(function (dish) {
//   dish.cookingCost = calculateCookingCost(dish);
// });

// // Используем map для получения массива с названием и стоимостью каждого блюда
// const dishNamesAndCosts = dishes.map(function (dish) {
//   return { name: dish.name, cost: dish.cookingCost };
// });

// console.log(dishNamesAndCosts);

// // Определяем, есть ли в меню хоть одно вегетарианское блюдо
// const hasVegetarianDish = dishes.some(function (dish) {
//   return dish.ingredients.every(function (ingredient) {
//     return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
//   });
// });

// console.log("Есть ли в меню хоть одно вегетарианское блюдо? " + hasVegetarianDish);

// // Определяем, полностью ли у нас вегетарианское меню
// const isAllVegetarian = dishes.every(function (dish) {
//   return dish.ingredients.every(function (ingredient) {
//     return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
//   });
// });

// console.log("Полностью ли у нас вегетарианское меню? " + isAllVegetarian);

// // Создаем массив с вегетарианскими блюдами с помощью filter
// const vegetarianDishes = dishes.filter(function (dish) {
//   return dish.ingredients.every(function (ingredient) {
//     return ingredient !== "groundBeef" && ingredient !== "chickenBreast";
//   });
// });

// console.log(vegetarianDishes);
