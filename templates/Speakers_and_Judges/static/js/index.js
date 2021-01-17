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
    personImg.addEventListener("click", showInfoAndHideCards);
    personContainer.append(personImg);

    let personNameHeader = document.createElement("h5");
    personNameHeader.classList.add("title");
    personNameHeader.textContent = `${person.name}`;
    personContainer.append(personNameHeader);

    //let cardsContainer = document.createElement("div");


    speakerWrapper.append(personContainer);
  }
}

createSpeakerCardsInDOM();

