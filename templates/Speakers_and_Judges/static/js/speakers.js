// Speakers module pattern
export let speakers = (function(){
  // Total number of speakers
  let speakerTotalNumber = 6;

  let speakerNames = [
    'Richard Stallman',
    'Linus Torvalds',
    'Edward Snowden',
    'Richard Stallman',
    'Linus Torvalds',
    'Edward Snowden',
  ];
  let speakerImageSrc = [
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
  ];

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

  //init();
  function init(){
    addSpeakersToSpeakerObjects();
  }

  // const imgFilePath = "./static/images";

  // TODO : Add function that maps img file names to file path by appending
  // file path in front of every image name

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
    init,
    getSpeakerObjects,
    getSpeakerTotalNumber
  }

})();








