!function(){var t=document.querySelector(".list"),n="".concat("https://newsapi.org/v2","/top-headlines?apiKey=").concat("1d73d62656b44f67ad7d9bb6f8b6e98e","&category=general&country=us&pageSize=12");fetch(n).then((function(t){return t.json()})).then((function(t){c(t.articles)})).catch((function(t){console.log("error",t)}));var c=function(n){var c=function(t){return t.reduce((function(t,n){return t+function(t){return'<li class="list__item">\n  <img class="list__pic" src="'.concat(t.urlToImage,'" alt="').concat(t.description,'">\n  <h2 class="list__title">').concat(t.title,'</h2>\n  <p class="list__description">').concat(t.description,'"</p>\n  <p class="list__author">').concat(t.author,'"</p>\n  <a class="list__link" href="').concat(t.url,'" target="_blank">Read more</a>\n  </li>')}(n)}),"")}(n);t.insertAdjacentHTML("beforeend",c)}}();
//# sourceMappingURL=index.862bd7cb.js.map
