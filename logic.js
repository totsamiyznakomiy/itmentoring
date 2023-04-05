let users = {
    admin: 'root',
    user: '123'
  };
  
  let userName = prompt('Как вас зовут?', '');
  let password = prompt('Введите пароль:', '');
  
  if (users[userName]) {
    if (users[userName] === password) {
      console.log('Вы вошли');
    } else {
      console.log('Неправильный пароль');
    }
  } else {
    console.log('Такого пользователя не существует');
  }
  
  