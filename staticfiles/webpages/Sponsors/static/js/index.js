/*This provides functionality to the buttons in the main page.All the divs are attached to it  */

function ShowTitleHideOthers() {
  document.querySelector(".sponsors").style.display = "none";
  document.querySelector(".title_sponsors").style.display = "block";
}
function ShowPowerHideOthers() {
  document.querySelector(".sponsors").style.display = "none";
  document.querySelector(".power_sponsors").style.display = "block";
}
function ShowAssociateHideOthers() {
  document.querySelector(".sponsors").style.display = "none";
  document.querySelector(".associate_sponsors").style.display = "block";
}
function ShowOutreachHideOthers() {
  document.querySelector(".sponsors").style.display = "none";
  document.querySelector(".outreach_sponsors").style.display = "block";
}
function ShowInternshipHideOthers() {
  document.querySelector(".sponsors").style.display = "none";
  document.querySelector(".internship_sponsors").style.display = "block";
}
function Return() {
  document.querySelector(".associate_sponsors").style.display = "none";
  document.querySelector(".outreach_sponsors").style.display = "none";
  document.querySelector(".internship_sponsors").style.display = "none";
  document.querySelector(".power_sponsors").style.display = "none";
  document.querySelector(".title_sponsors").style.display = "none";
  document.querySelector(".sponsors").style.display = "block";
}

function createCarousal(sponsorName) {
  const slider = document.querySelector(`.items_${sponsorName}`);
  const slides = document.querySelectorAll(`.item_${sponsorName}`);
  const button = document.querySelectorAll(`.button_${sponsorName}`);

  /***************CAROUSEL***************/

  let current = 1;
  let prev = current > 0 ? current - 1 : slides.length - 1;
  let next = current < slides.length - 1 ? current + 1 : 0;
  let lastPrev = current > 1 ? current - 2 : slides.length - 2 + current;
  let nextToNext =
    current < slides.length - 2
      ? current + 2
      : slides.length - current === 2
      ? 0
      : 1;

  const update = () => {
    slides.forEach((it) => {
      it.classList.remove("active");
      it.classList.remove("prev");
      it.classList.remove("last-prev");
      it.classList.remove("next");
      it.classList.remove("next-to-next");
    });
    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
    slides[nextToNext].classList.add("next-to-next");
    slides[lastPrev].classList.add("last-prev");
  };

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
      i == 0 ? gotoPrev() : gotoNext()
    );
  }

  const gotoPrev = () =>
    current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
  const gotoNext = () =>
    current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

  const gotoNum = (number) => {
    current = number;
    prev = current > 0 ? current - 1 : slides.length - 1;
    next = current < slides.length - 1 ? current + 1 : 0;
    lastPrev = current > 1 ? current - 2 : slides.length - 2 + current;
    nextToNext =
      current < slides.length - 2
        ? current + 2
        : slides.length - current === 2
        ? 0
        : 1;
    update();
  };

  update();

  //(*****If you want to set a rotating timer you can uncommnet this :****)

  setInterval(() => {
    document
      .querySelector(
        `.sponsback-1 .items_${sponsorName} .button .fa-angle-right`
      )
      .click();
  }, 5000);
}

// createCarousal("title");
createCarousal("power");
createCarousal("associate");
// createCarousal("internship");
createCarousal("outreach");
