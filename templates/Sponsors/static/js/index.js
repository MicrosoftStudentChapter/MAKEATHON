const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = Math.floor(Math.random()*slides.length);
let prev = current > 0 ? current - 1 : slides.length - 1;
let next = current < slides.length - 1 ? current + 1 : 0;

const update = () => {
  slides.forEach(it => {
    it.classList.remove("active");
    it.classList.remove("prev");
    it.classList.remove("next");
  });
  
  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}

for (let i = 0; i < button.length; i++) {
		button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
  current = number;
	prev = current > 0 ? current - 1 : slides.length - 1;
  next = current < slides.length - 1 ? current + 1 : 0;
  
  update();
}

update();