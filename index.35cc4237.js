const e=document.querySelector(".list");fetch("https://newsapi.org/v2/top-headlines?apiKey=1d73d62656b44f67ad7d9bb6f8b6e98e&category=general&country=us&pageSize=12").then((e=>e.json())).then((e=>{t(e.articles)})).catch((e=>{console.log("error",e)}));const t=t=>{const s=(e=>e?e.reduce(((e,t)=>e+(e=>`<li class="list__item">\n${e.urlToImage?`<img src="${e.urlToImage}" alt="${e.description}">`:""}\n  <h2 class="list__title">${e.title}</h2>\n  <p class="list__description">${e.description?e.description:""}</p>\n  <p class="list__author">${e.author?e.author:""}</p>\n  <a class="list__link" href="${e.url}" target="_blank">Read more</a>\n  </li>`)(t)),""):"")(t);e.insertAdjacentHTML("beforeend",s)};
//# sourceMappingURL=index.35cc4237.js.map
