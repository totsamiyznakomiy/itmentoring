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
  