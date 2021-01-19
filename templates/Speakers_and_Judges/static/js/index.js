import { speakers } from "./speakers.js";
import { judges } from './judges.js'

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
function showJudgeAndHideInfo() {
  document.querySelector("#judges").style.display = "none";
  document.querySelector("#info").style.display = "block";
}

let currentSpeakerOnInfoPage;

init();
function init(){
  speakers.init();
  judges.init();

  // Add event listeners to speakers button and judges button
  document.getElementById("speakers-button").addEventListener("click", showSpeakersAndHideJudges);
  document.getElementById("judges-button").addEventListener("click", showJudgesAndHideSpeakers);

  createSpeakerCardsInDOM();
  createJudgeCardsInDOM();
  showSpeakersAndHideJudges();
  addEventListenersToInfoArrows();
}



function createSpeakerCardsInDOM(){
  let speakerWrapper = document.getElementById("speakers");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Speakers";
  speakerWrapper.append(pageHeader);

  iterateAndCreatePersonCardInDOM(speakers.getSpeakerObjects(), speakerWrapper);
}


function iterateAndCreatePersonCardInDOM(persons, containerDiv){
  for(let person of persons){
    let personContainer = document.createElement("div");
    personContainer.classList.add = "person";
    
    let personImg = document.createElement("img");
    personImg.classList.add("imgperson");
    personImg.src = `${person.imgSrc}`;
    personImg.addEventListener("click", personOnClick.bind(person));
    personContainer.append(personImg);

    let cardsContainer = document.createElement("div");
    cardsContainer.classList.add("cards");

    let socialMedias = [ 
      [ person.insta, "./static/images/insta.png", "insta" ], 
      [ person.linkedin, "./static/images/link.png", "link" ], 
      [ person.github, "./static/images/git.png", "git" ]
    ]

    let socialMediaLink, socialMediaImgSrc, socialMediaImgClass;
    for([socialMediaLink, socialMediaImgSrc, socialMediaImgClass] of socialMedias){
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

function createJudgeCardsInDOM(){
  let judgeWrapper = document.getElementById("judges");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Judges";
  judgeWrapper.append(pageHeader);
  
  iterateAndCreatePersonCardInDOM(judges.getJudgeObjects(), judgeWrapper);

}




function getCurrentSpeakerOnInfoPage(){
  return currentSpeakerOnInfoPage;
}

function setCurrentSpeakerOnInfoPage(speaker){
  currentSpeakerOnInfoPage = speaker;
}


function personOnClick(){
  setCurrentSpeakerOnInfoPage(this);
  console.log('hi');

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

// A conscious decision was taken to add event listeners to the arrows outside the personOnClick()
// The alternative would involve reduntantly redefining arrow event listeners every time, despite the fact that their functionality remains the same
// More importantly, it would also involve recursive calls to personOnClick(), with the end result being 2^n personClick() executions 
// for the nth arrow click, which is highly inefficient 
function addEventListenersToInfoArrows(){
  let leftArrow = document.getElementById("info-left-arrow");
  leftArrow.addEventListener("click", () => {
    let currentSpeaker = getCurrentSpeakerOnInfoPage();

    // currentSpeaker.id stores the index of the currentSpeakerin the speakerObjects array.
    // Now, on clicking the left arrow, the info of the person prior to it in the array should be shown
    // if it is not the first element. If it is the first element, the info of the last person in the array
    // should be shown
    let previousPerson = (currentSpeaker.id !== 0)? speakers.getSpeakerObjects()[currentSpeaker.id-1] 
                                      : speakers.getSpeakerObjects()[speakers.getSpeakerTotalNumber() -1]; 

    // .call() calls a function but by binding this of the function to the first argument of the call function
    // Here, we call the personOnClick function with its this bounded to previousPerson, and hence the details of
    // the previousPerson are displayed                                    
    personOnClick.call(previousPerson);
  });

  let rightArrow = document.getElementById("info-right-arrow");
  rightArrow.addEventListener("click", () => {
    let currentSpeaker = getCurrentSpeakerOnInfoPage();

    // currentSpeaker.id stores the index of the currentSpeakerin the speakerObjects array.
    // Now, on clicking the right arrow, the info of the person next to it in the array should be shown
    // if it is not the last element. If it is the last element, the info of the first person in the array
    // should be shown
    let nextPerson = (currentSpeaker.id !== speakers.getSpeakerTotalNumber() -1)? 
      speakers.getSpeakerObjects()[currentSpeaker.id+1] : speakers.getSpeakerObjects()[0];

    // .call() calls a function but by binding this of the function to the first argument of the call function
    // Here, we call the personOnClick function with its this bounded to nextPerson, and hence the details of
    // the nextPerson are displayed   
    personOnClick.call(nextPerson);
  })
}






