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
//это тема обьекты и массивы
//Условияю Квиз
const answer = prompt("What is the name of the highest-grossing TV series of all time?");

if (answer.toLowerCase() === "game of thrones") {
  alert("Congratulations, you are correct!");
} else {
  alert(`Sorry, "${answer}" is not correct. The correct answer is "Game of Thrones".`);
};
const questions = [
  {
    question: "What is the name of the highest-grossing TV series of all time?",
    answer: "Game of Thrones"
  },
  {
    question: "What is the name of the fictional city where Batman operates?",
    answer: "Gotham"
  },
  {
    question: "What is the name of the character played by Johnny Depp in the Pirates of the Caribbean series?",
    answer: "Jack Sparrow"
  }
];

let score = 0;

questions.forEach((item, index) => {
  const userAnswer = prompt(`${index + 1}. ${item.question}`);
  if (userAnswer.toLowerCase() === item.answer.toLowerCase()) {
    alert("Congratulations, you are correct!");
    score++;
  } else {
    alert(`Sorry, "${userAnswer}" is not correct. The correct answer is "${item.answer}".`);
  }
});

alert(`Quiz completed. You scored ${score} out of ${questions.length}!`);
