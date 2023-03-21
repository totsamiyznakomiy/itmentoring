// Пишем функцию принимающую 2 числа и возвращаем меньшее
function findSmaller(num1, num2) {
    if (num1 < num2) {
      return num1;
    } else {
      return num2;
    }
  };
console.log(findSmaller(1,5));

//Пишем функцию для подсчета профита из урока(блюда). Передаем все данные для рассчета профита, результат в обьект блюда
function countProfit(dish) {
    let profit = dish.price - dish.cost;
  
    return {
      dish,
      profit,
    };
  }

  let dish = {
    name: "pizza",
    ingredients: ["dough", "tomato sauce", "chees", "ham", "champignons"],
    price: 12,
    cost: 5
  };

  let dishWithPrifit = countProfit(dish);
  console.log(dishWithPrifit);

  