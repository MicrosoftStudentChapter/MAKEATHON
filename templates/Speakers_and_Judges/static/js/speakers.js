// Speakers module pattern
export let speakers = (function(){
  // Total number of speakers
  let speakerTotalNumber = 6;

  let speakerNames = [
    'RICHARD STALLMAN',
    'LINUS TORVALDS',
    'EDWARD SNOWDEN',
    'RICHARD STALLMAN',
    'LINUS TORVALDS',
    'EDWARD SNOWDEN',
  ];
  let speakerImageSrc = [
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
  ];

  let speakerInsta = [
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
  ];
  let speakerLinkedIn = [
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
  ];
  let speakerGitHub = [
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
  ];

  // Speaker attributes for their info page
  let speakerInfoHeading2 = [
    'DAY 1',
    'DAY 2',
    'DAY 1',
    'DAY 2',
    'DAY 1',
    'DAY 2',
  ];
  let speakerInfoDate = [
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
  ];
  let speakerInfoPlatformAndTime = [
    'JITSI MEET, 4:20 PM',
    'YOUTUBE LIVE, 6:30 PM',
    'MASTODON 4:20 PM',
    'JITSI MEET, 4:20 PM',
    'YOUTUBE LIVE, 6:30 PM',
    'MASTODON 4:20 PM'
  ];
  let speakerInfoSummary = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
  ];

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
  let createSpeakerObject = function(id, name, imgSrc, insta, linkedin, github, 
    infoHeading2, infoDate, infoPlatformAndTime, infoSummary){
      return{
        id,
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
          i,
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








