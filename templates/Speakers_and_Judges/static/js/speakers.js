// Speakers module pattern
let speakers = (function(){
  // Total number of speakers
  let speakerTotalNumber;

  let speakerNames = [];
  let speakerImageSrc = [];

  let speakerInsta = [];
  let speakerLinkedIn = [];
  let speakerGitHub = [];

  // Speaker attributes for their info page
  let speakerInfoHeading2 = [];
  let speakerInfoDate = [];
  let speakerInfoPlatformAndTime = [];
  let speakerInfoSummary = [];

  // Array that stores all the speaker objects
  let speakerObjects = [];

  _init();
  function _init(){
    addSpeakersToSpeakerObjects();
  }

  // Factory function which returns a speaker object
  let createSpeakerObject = function(name, imgSrc, insta, linkedin, github, 
    infoHeading2, infoDate, infoPlatformAndTime, infoSummary){
      return{
        name,
        imgSrc,
        insta,
        linkedin,
        github,
        infoHeading2,
        infoDate,
        infoPlatformAndTime,
        infoSummary,  
      }  
  }

  function addSpeakersToSpeakerObjects(){
    for(let i = 0; i < speakerTotalNumber; i++){
      speakerObjects.push(
        createSpeakerObject(
          speakerNames[i],
          speakerImageSrc[i],
          speakerInsta[i],
          speakerLinkedIn[i],
          speakerGitHub[i],
          speakerInfoHeading2[i],
          speakerInfoDate[i],
          speakerInfoPlatformAndTime[i],
          speakerInfoSummary[i]
        )
      ) 
    }
  }

  function getSpeakerTotalNumber(){
    return speakerTotalNumber;
  }

  function getSpeakerObjects(){
    return speakerObjects;
  }

  return{
    getSpeakerObjects,
    getSpeakerTotalNumber
  }

})();








