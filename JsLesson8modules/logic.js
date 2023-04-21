// Запрашиваем имя пользователя
let username = prompt('Введите имя пользователя:', '');

// Проверка имени и пароля
if (username === 'admin' || username === 'user') {
  // Запрос пароля
  const password = prompt('Введите пароль:', '');

  // Проверка пароля
  if ((username === 'admin' && password === 'root') ||
      (username === 'user' && password === '123')) {
    console.log('Вы вошли');
  } else {
    console.log('Неправильный пароль');
  }
} else {
  console.log('Такого пользователя не существует');
}