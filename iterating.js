const menu = [
    { name: "Борщ", cost: 5, vegetarian: false },
    { name: "Салат", cost: 3, vegetarian: true },
    { name: "Пицца", cost: 8, vegetarian: false },
    { name: "Омлет", cost: 6, vegetarian: true },
    { name: "Гречка", cost: 2, vegetarian: true }
  ];

// Функция для вычисления себестоимости блюда
let calculateCost = (totalCost, item) => totalCost + item.cost;

// Используем reduce для вычисления общей себестоимости всех блюд
let totalCost = menu.reduce(calculateCost, 0);
console.log("Общая себестоимость блюд: ", totalCost);

// Используем map для создания массива объектов только с названием и стоимостью блюд
let reducedMenu = menu.map(item => ({ name: item.name, cost: item.cost }));
console.log("Меню с названиями и стоимостью блюд: ", reducedMenu);

// Используем some для проверки, есть ли в меню хоть одно вегетарианское блюдо
let hasVegetarian = menu.some(item => item.vegetarian);
console.log("Есть ли в меню вегетарианские блюда: ", hasVegetarian);

// Используем every для проверки, является ли меню полностью веганским
let isVegetarianMenu = menu.every(item => item.vegetarian);
console.log("Является ли меню полностью вегетарианским: ", isVegetarianMenu);

// Используем filter для создания массива только с веганскими блюдами
let vegetarianMenu = menu.filter(item => item.vegetarian);
console.log("Меню с вегетарианскими блюдами: ", vegetarianMenu);


