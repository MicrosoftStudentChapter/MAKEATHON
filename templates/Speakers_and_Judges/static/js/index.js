//import { speakers } from './speakers.js'

import { speakers } from "./speakers.js";

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
  //console.log("Showing info hiding cards");
  document.querySelector("#speakers").style.display = "none";
  document.querySelector("#info").style.display = "block";
}
function showJudgeAndHideInfo() {
  document.querySelector("#judges").style.display = "none";
  document.querySelector("#info").style.display = "block";
}

// let imgperson1 = document.getElementById('imgperson1');
// imgperson1.addEventListener("click", showInfoAndHideCards);

speakers.init();

function createSpeakerCardsInDOM(){
  console.log("Hi");
  let speakerWrapper = document.getElementById("speakers");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Speakers";
  speakerWrapper.append(pageHeader);

  for(let person of speakers.getSpeakerObjects()){
    console.log('hi');
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
      [person.insta, "./static/images/insta.png", "insta"], 
      [person.linkedin, "./static/images/link.png", "link"], 
      [person.github, "./static/images/git.png", "git"]
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

    

    // cardsContainer.classList.add("icon");

    // let instaContainer = document.createElement("icon").classList.add("icon");
    
    // let instaLink = 


    speakerWrapper.append(personContainer);
  }
}


createSpeakerCardsInDOM();
showSpeakersAndHideJudges();

function personOnClick(person){

  console.log("I was clicked");
  // Update the info-box-card with information unique to each person

  let infoHeading1 = document.getElementById("info-heading-1");
  infoHeading1.textContent = person.name;

  let infoHeading2 = document.getElementById("info-heading-2");
  infoHeading2.textContent = person.infoHeading2;

  let infoDate = document.getElementById("info-date");
  infoDate.textContent = person.infoDate;

  let infoPlatformAndTime = document.getElementById("info-platform-and-time");
  infoPlatformAndTime.textContent = person.infoPlatformAndTime;

  let infoSummary = document.getElementById("info-summary");
  infoSummary.textContent = person.infoSummary;

  let infoImg = document.getElementById("info-img");
  infoImg.src = person.imgSrc;

  // After updating info-box-card with the information of the person clicked, 
  // hide the cards view and enable the info view

  showInfoAndHideCards();
}



// Adds the general template for the info page to the DOM, but without any
// unique information, which is then updated as and when a speaker/judge is clicked on

// function initialiseInfoPageInDOM(){
//   let infoContainerDiv = document.createElement("div");
//   infoContainerDiv.classList.add("info");
//   infoContainerDiv.id = "info";
//   infoContainerDiv.style = "display: none";

//   let arrowDiv = document.createElement("div");

//   let arrowLeft = document.createElement("img");
//   arrowLeft.classList.add("arrowleft")
//   arrowLeft.src = "static/images/arrow-left.png";
//   arrowDiv.append(arrowLeft);

//   let arrowLeft = document.createElement("img");
//   arrowRight.classList.add("arrowright")
//   arrowRight.src = "static/images/arrow-right.png";
//   arrowDiv.append(arrowRight);

//   infoContainerDiv.append(arrowDiv);

//   let boxContainerDiv = document.createElement("div");
//   boxContainerDiv.classList.add("box");

//   let textContainerDiv = document.createElement("div");
//   textContainerDiv.classList.add("text1");


// }




