

// Функція яка повертає promise
fetch('https://swapi.dev/api/people/1/')
  // коли вона виконається ми тримаємо обєкт "response" тобто результат по запиту
  .then((res) => {
    return res.json()
  })
  // тіло результату
  .then((body) => {
    console.log(body);
  })


