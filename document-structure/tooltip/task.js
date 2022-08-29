let helpText = document.getElementsByClassName("has-tooltip");

let helpTextArr = Array.from(helpText);
let tip = document.createElement("div");
tip.setAttribute("class", "tooltip"); 
tip.classList.add("tooltip_active"); 
helpTextArr.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let tipActive = document.querySelector('.tooltip_active')
    console.log(tipActive)
    if (tipActive) {
      tipActive.remove();    
      return  
    }
    let tipTitle = item.getAttribute("title"); 
    tip.innerText = tipTitle; 
    
    item.insertAdjacentElement("afterEnd", tip);
    
    let tipPosition = item.getBoundingClientRect();
    tip.style.left = `${tipPosition.left}px`
  });
});
