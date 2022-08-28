let incBtn = document.querySelectorAll("div.product__quantity-control_inc");
let decBtn = document.querySelectorAll("div.product__quantity-control_dec");
let addBtn = document.querySelectorAll("div.product__add");
let cart = document.querySelector("div.cart__products");
let products = document.querySelectorAll("div.product");

let incBtnArr = Array.from(incBtn);
incBtnArr.forEach((item) => {
  item.addEventListener("click", () => {
    item.previousElementSibling.innerHTML++;
  });
});

let decBtnArr = Array.from(decBtn);
decBtnArr.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.nextElementSibling.textContent <= 1) {
      return;
    }
    item.nextElementSibling.innerHTML--;
  });
});

let addBtnArr = Array.from(addBtn);
addBtnArr.forEach((item) => {
  item.addEventListener("click", () => {
    let dataId = item.closest(".product").getAttribute("data-id");
    let imageSrc = item.closest(".product__controls").previousElementSibling.getAttribute("src");
    let count = +item.previousElementSibling.firstElementChild.nextElementSibling.innerHTML;
    let cartProducts = Array.from(document.querySelectorAll(".cart__product"));
    let findedItem = cartProducts.find(
      (item) => item.getAttribute("data-id") === dataId
    );
    if (findedItem) {
        let findedItemCount = +findedItem.lastElementChild.innerHTML
        findedItem.lastElementChild.innerHTML = `${count + findedItemCount}`
    } else {
      cart.insertAdjacentHTML(
        "beforeEnd",
        `<div class="cart__product" data-id="${dataId}">
              <img class="cart__product-image" src="${imageSrc}">
              <div class="cart__product-count">${count}</div>
          </div>`
      );
    }
  });
});
