//import { speakers } from './speakers.js'

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

let imgperson1 = document.getElementById('imgperson1');
imgperson1.addEventListener("click", showInfoAndHideCards);

//console.log(speakers.getSpeakerTotalNumber());
