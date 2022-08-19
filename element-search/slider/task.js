let leftArrow = document.querySelector(".slider__arrow.slider__arrow_prev");
let rightArrow = document.querySelector(".slider__arrow.slider__arrow_next");
let sliderCount = document.getElementsByClassName("slider__item").length;
let sliders = document.querySelectorAll(".slider__item");
let slidersArray = Array.from(sliders);
let activeSliderIndex = slidersArray.indexOf(document.querySelector(".slider__item_active"));

leftArrow.onclick = function () {
  slidersArray[activeSliderIndex].classList.remove("slider__item_active");
  dotsArray[activeSliderIndex].classList.remove("slider__dot_active");
  activeSliderIndex--;
  if (activeSliderIndex < 0) {
    activeSliderIndex = sliderCount - 1;
  }
  dotsArray[activeSliderIndex].classList.add("slider__dot_active");
  return slidersArray[activeSliderIndex].classList.add("slider__item_active");
};

rightArrow.onclick = function () {
  slidersArray[activeSliderIndex].classList.remove("slider__item_active");
  dotsArray[activeSliderIndex].classList.remove("slider__dot_active");
  activeSliderIndex++;
  if (activeSliderIndex >= sliderCount) {
    activeSliderIndex = 0;
  }
  dotsArray[activeSliderIndex].classList.add("slider__dot_active");
  return slidersArray[activeSliderIndex].classList.add("slider__item_active");
};

// part 2

let dots = document.querySelectorAll(".slider__dot");
let dotsArray = Array.from(dots);

for (let dot of dotsArray) {
  dot.onclick = function () {
    slidersArray[activeSliderIndex].classList.remove("slider__item_active");
    dotsArray[activeSliderIndex].classList.remove("slider__dot_active");
    activeSliderIndex = dotsArray.indexOf(dot);
    dotsArray[activeSliderIndex].classList.add("slider__dot_active");
    return slidersArray[activeSliderIndex].classList.add("slider__item_active");
  };
}
