import { speakers } from "./speakers.js";
import { judges } from "./judges.js";

function showSpeakersAndHideJudges() {
  document.querySelector("#judges").style.display = "none";
  document.querySelector("#speakers").style.display = "grid";
  document.querySelector("#info").style.display = "none";
}

function showJudgesAndHideSpeakers() {
  document.querySelector("#speakers").style.display = "none";
  document.querySelector("#judges").style.display = "grid";
  document.querySelector("#info").style.display = "none";
}

function showInfoAndHideCards() {
  document.querySelector("#speakers").style.display = "none";
  document.querySelector("#judges").style.display = "none";
  document.querySelector("#info").style.display = "block";
}

// Stores the current speaker/judge object displayed on the info page
let currentSpeakerOnInfoPage;

init();

// Function that calls all the requisite functions required for initialisation

function init() {
  speakers.init();
  judges.init();

  // Add event listeners to speakers button and judges button
  document
    .getElementById("speakers-button")
    .addEventListener("click", showSpeakersAndHideJudges);
  document
    .getElementById("judges-button")
    .addEventListener("click", showJudgesAndHideSpeakers);

  createSpeakerCardsInDOM();
  createJudgeCardsInDOM();
  showSpeakersAndHideJudges();
  addEventListenersToInfoArrows();
}

// Creates and adds all the speaker cards to the DOM
function createSpeakerCardsInDOM() {
  let speakerWrapper = document.getElementById("speakers");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Speakers";
  speakerWrapper.append(pageHeader);

  iterateAndCreatePersonCardInDOM(speakers.getSpeakerObjects(), speakerWrapper);
}

// Similar to createSpeakerCardsInDOM(), but for judges
// Creates and adds all judges cards to the DOM
function createJudgeCardsInDOM() {
  let judgeWrapper = document.getElementById("judges");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Judges";
  judgeWrapper.append(pageHeader);

  iterateAndCreatePersonCardInDOM(judges.getJudgeObjects(), judgeWrapper);
}

// Common code to interate through speakers/judges and add their cards to the DOM
function iterateAndCreatePersonCardInDOM(persons, containerDiv) {
  for (let person of persons) {
    let personContainer = document.createElement("div");
    personContainer.classList.add = "person";

    let personImg = document.createElement("img");
    personImg.classList.add("imgperson");
    personImg.src = `${person.imgSrc}`;

    // func.bind(obj) binds the this of the func to the obj passed to it
    // Since personOnClick is a callback function, instead of a convulated way to pass the person object to it
    // a much better way is to simply bind the person object to its this, such that anytime this is referred to in
    // personOnClick it refers to the person object
    personImg.addEventListener("click", personOnClick.bind(person));
    personContainer.append(personImg);

    let cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards");

    // Array containing arrays in the form of :
    // [link of social media for the person, img src of social media icon, type of social media]
    let socialMedias = [
      [person.insta, "./static/images/insta.png", "insta"],
      [person.linkedin, "./static/images/link.png", "link"],
      [person.github, "./static/images/git.png", "git"],
    ];

    // Instead of repeating three times very similar code to create and the three social media links and icons
    // to the DOM, the socialMedias array is iterated through
    let socialMediaLink, socialMediaImgSrc, socialMediaImgClass;
    for ([
      socialMediaLink,
      socialMediaImgSrc,
      socialMediaImgClass,
    ] of socialMedias) {
      let socialMediaContainer = document.createElement("div");
      socialMediaContainer.classList.add("icon");

      let link = document.createElement("a");
      link.href = socialMediaLink;
      link.target = "_blank";

      let img = document.createElement("img");
      img.classList.add(socialMediaImgClass);
      img.src = socialMediaImgSrc;
      link.append(img);

      socialMediaContainer.append(link);
      cardsContainer.append(socialMediaContainer);
    }

    personContainer.append(cardsContainer);

    let personNameHeader = document.createElement("h5");
    personNameHeader.classList.add("title");
    personNameHeader.textContent = `${person.name}`;
    personContainer.append(personNameHeader);

    containerDiv.append(personContainer);
  }
}

// Event handler for when a speaker/judge card is clicked and also when arrows are clicked in the info view
// Changes the text content and other parameters unique to a speaker/judge in the info page to that of whichever
// speaker/judge is clicked or who's info page needs to be seen on clicking an arrow.
//
// It does not re-create the entire HTML code for the info page, just changes the textContent and image src
// of the requisite HTML tags already present in the index.html file for the info page

function personOnClick() {
  // The currentSpeakerOnInfoPage is updated so that the arrows can work, as the arrows on clicked
  // call the previous person or the next person depending on who the currentSpeakerOnInfo page is
  setCurrentSpeakerOnInfoPage(this);

  // Update the info-box-card with information unique to each person

  let infoHeading1 = document.getElementById("info-heading-1");
  infoHeading1.textContent = this.name;

  let infoHeading2 = document.getElementById("info-heading-2");
  infoHeading2.textContent = this.infoHeading2;

  let infoDate = document.getElementById("info-date");
  infoDate.textContent = this.infoDate;

  let infoPlatformAndTime = document.getElementById("info-platform-and-time");
  infoPlatformAndTime.textContent = this.infoPlatformAndTime;

  let infoSummary = document.getElementById("info-summary");
  infoSummary.textContent = this.infoSummary;

  let infoImg = document.getElementById("info-img");
  infoImg.src = this.imgSrc;

  // After updating info-box-card with the information of the person clicked,
  // hide the cards view and enable the info view
  showInfoAndHideCards();
}

function getCurrentSpeakerOnInfoPage() {
  return currentSpeakerOnInfoPage;
}

function setCurrentSpeakerOnInfoPage(speaker) {
  currentSpeakerOnInfoPage = speaker;
}

// A conscious decision was taken to add event listeners to the arrows outside the personOnClick()
// The alternative would involve reduntantly redefining arrow event listeners every time, despite the fact that their functionality remains the same
// More importantly, it would also involve recursive calls to personOnClick(), with the end result being 2^n personClick() executions
// for the nth arrow click, which is highly inefficient
function addEventListenersToInfoArrows() {
  let leftArrow = document.getElementById("info-left-arrow");
  leftArrow.addEventListener("click", () => {
    let currentSpeaker = getCurrentSpeakerOnInfoPage();
    let personsArray =
      this.type === "speaker"
        ? speakers.getSpeakerObjects()
        : judges.getJudgeObjects();
    let totalPersons =
      this.type === "speaker"
        ? speakers.getSpeakerTotalNumber()
        : judges.getJudgeTotalNumber();

    // currentSpeaker.id stores the index of the currentSpeakerin the speakerObjects array.
    // Now, on clicking the left arrow, the info of the person prior to it in the array should be shown
    // if it is not the first element. If it is the first element, the info of the last person in the array
    // should be shown
    let previousPerson =
      currentSpeaker.id !== 0
        ? personsArray[currentSpeaker.id - 1]
        : personsArray[totalPersons - 1];

    // .call() calls a function but by binding this of the function to the first argument of the call function
    // Here, we call the personOnClick function with its this bounded to previousPerson, and hence the details of
    // the previousPerson are displayed
    personOnClick.call(previousPerson);
  });

  let rightArrow = document.getElementById("info-right-arrow");
  rightArrow.addEventListener("click", () => {
    let currentSpeaker = getCurrentSpeakerOnInfoPage();
    let personsArray =
      currentSpeaker.type === "speaker"
        ? speakers.getSpeakerObjects()
        : judges.getJudgeObjects();
    let totalPersons =
      currentSpeaker.type === "speaker"
        ? speakers.getSpeakerTotalNumber()
        : judges.getJudgeTotalNumber();
    // currentSpeaker.id stores the index of the currentSpeakerin the speakerObjects array.
    // Now, on clicking the right arrow, the info of the person next to it in the array should be shown
    // if it is not the last element. If it is the last element, the info of the first person in the array
    // should be shown
    let nextPerson =
      currentSpeaker.id !== totalPersons - 1
        ? personsArray[currentSpeaker.id + 1]
        : personsArray[0];

    // .call() calls a function but by binding this of the function to the first argument of the call function
    // Here, we call the personOnClick function with its this bounded to nextPerson, and hence the details of
    // the nextPerson are displayed
    personOnClick.call(nextPerson);
  });
}
