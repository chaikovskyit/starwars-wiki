

// // Функція яка повертає promise
// fetch('https://swapi.dev/api/people/1/')
//   // коли вона виконається ми тримаємо обєкт "response" тобто результат по запиту
//   .then((res) => {
//     return res.json()
//   })
//   // тіло результату
//   .then((body) => {
//     console.log(body);
//   })

// Функція яка буде витягувати дані по API, тобто ми передаємо їй link вона його обробляє і на виході повертає нам обєкт з даними
const getResource = async (url) => {
  // чекаємо доки результат промісу стане доступним і записуємо його в res
  const res = await fetch(url)
  // витягуємо тіло результату, чекаємо результат промісу і пишемо його в body
  const body = await res.json()
  // в результаті повертаємо body
  return body
}

// example
getResource('https://swapi.dev/api/people/1/')
  .then((body) => {
    console.log(body);
  })

