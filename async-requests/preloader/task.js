let loader = document.getElementById("loader");
let items = document.getElementById("items");
// let data = {};
let xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    let data = JSON.parse(xhr.responseText);
    loader.classList.remove("loader_active");
    let itemCode, itemValue;
    for (key in data.response.Valute) {
      let item = data.response.Valute[key];
      itemCode = item.CharCode;
      itemValue = item.Value;
      items.insertAdjacentHTML(
        "afterBegin",
        `
       <div class="item">
        <div class="item__code">${itemCode}</div>
        <div class="item__value">${itemValue}</div>
        <div class="item__currency">руб.</div></div>`
      );
    }
  }
});
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
