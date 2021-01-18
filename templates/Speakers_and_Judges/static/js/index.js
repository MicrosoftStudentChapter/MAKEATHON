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

