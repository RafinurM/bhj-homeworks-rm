let popup = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close");
let makeThisFineButton = document.querySelector(".btn_danger");

window.onload = function () {
  let cookie = document.cookie;
  if (!cookie) {
    popup.classList.add("modal_active");
  } else {
    return;
  }
};

closeButton.onclick = function () {
  popup.classList.remove("modal_active");
  setCookie("status", "closed");
};

function setCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value);
}
