let storedText = localStorage.getItem("text");
document.getElementById("editor").value = storedText;

window.addEventListener("unload", function () {
  let text = document.getElementById("editor").value;
  localStorage.setItem("text", text);
});
