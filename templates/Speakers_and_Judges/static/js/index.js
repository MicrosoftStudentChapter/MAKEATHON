//import { speakers } from './speakers.js'

import { speakers } from "./speakers";

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

function createSpeakerCardsInDOM(){
  let speakerWrapper = document.getElementById("speakers");

  let pageHeader = document.createElement("h1");
  pageHeader.classList.add("header");
  pageHeader.textContent = "Speakers";
  speakerWrapper.append(pageHeader);

  // for(let i = 0; i < speakers.getSpeakerTotalNumber; i++){
  //   let personContainer = document.createElement("div");
  //   personContainer.classList.add = "person";

  //   let personImage
  // }

  for(person in speakers.getSpeakerObjects()){
    let personContainer = document.createElement("div");
    personContainer.classList.add = "person";
    
    let personImg = document.createElement("img");
    personImg.src = `${person.imgSrc}`;
    personImg.addEventListener("click", showInfoAndHideCards);
    personContainer.append(personImg);

    let personNameHeader = document.createElement("h5");
    personNameHeader.textContent = `${person.name}`;
    personContainer.append(personNameHeader);
  }
}

//console.log(speakers.getSpeakerTotalNumber());
