const list = document.querySelector('.list');
const KEY = '1d73d62656b44f67ad7d9bb6f8b6e98e';
const BASE_URL = 'https://newsapi.org/v2';
const URL = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=general&country=us&pageSize=12`;
fetch(URL)
  .then(response => response.json())
  .then(data => {
    // console.log('data', data);
    insertContent(data.articles);
  })
  .catch(error => {
    console.log('error', error);
  });

const createListItem = item =>
  `<li class="list__item">
  <img class="list__pic" src="${item.urlToImage}" alt="${item.description}">
  <h2 class="list__title">${item.title}</h2>
  <p class="list__description">${item.description}"</p>
  <p class="list__author">${item.author}"</p>
  <a class="list__link" href="${item.url}" target="_blank">Read more</a>
  </li>`;

const generateContent = array =>
  array.reduce((acc, item) => acc + createListItem(item), '');

const insertContent = array => {
  const result = generateContent(array);
  list.insertAdjacentHTML('beforeend', result);
};
