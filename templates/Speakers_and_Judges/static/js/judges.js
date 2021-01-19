// Speakers module pattern
export let judges = (function(){
  // Total number of judges
  let judgeTotalNumber = 6;

  let judgeNames = [
    'RICHARD STALLMAN',
    'LINUS TORVALDS',
    'EDWARD SNOWDEN',
    'RICHARD STALLMAN',
    'LINUS TORVALDS',
    'EDWARD SNOWDEN',
  ];
  let judgeImageSrc = [
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
    './static/images/img2.png',
    './static/images/img3.png',
    './static/images/pichai.png',
  ];

  let judgeInsta = [
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
    'https://www.instagram.com/mlsc_tiet/?hl=en',
    'https://www.instagram.com/microsoft/?hl=en',
  ];
  let judgeLinkedIn = [
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
    'https://www.linkedin.com/company/microsoft',
    'https://in.linkedin.com/company/microsoft-learn-student-chapter',
  ];
  let judgeGitHub = [
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
    'https://github.com/microsoft',
    'https://github.com/MicrosoftStudentChapter',
  ];

  // judge attributes for their info page
  let judgeInfoHeading2 = [
    'DAY 1',
    'DAY 2',
    'DAY 1',
    'DAY 2',
    'DAY 1',
    'DAY 2',
  ];
  let judgeInfoDate = [
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
    'DECEMBER 69, 2069',
    'APRIL 20, 2042',
  ];
  let judgeInfoPlatformAndTime = [
    'JITSI MEET, 4:20 PM',
    'YOUTUBE LIVE, 6:30 PM',
    'MASTODON 4:20 PM',
    'JITSI MEET, 4:20 PM',
    'YOUTUBE LIVE, 6:30 PM',
    'MASTODON 4:20 PM'
  ];
  let judgeInfoSummary = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.',
  ];

  // Array that stores all the judge objects
  let judgeObjects = [];

  //init();
  function init(){
    addJudgesToJudgeObjects();
  }

  // const imgFilePath = "./static/images";

  // TODO : Add function that maps img file names to file path by appending
  // file path in front of every image name

  // Factory function which returns a judge object
  let createJudgeObject = function(id, name, imgSrc, insta, linkedin, github, 
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

  function addJudgesToJudgeObjects(){
    for(let i = 0; i < speakerTotalNumber; i++){
      speakerObjects.push(
        createJudgeObject(
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
  
  function getJudgeTotalNumber(){
    return judgeTotalNumber;
  }

  function getJudgeObjects(){
    return judgeObjects;
  }

  return{
    init,
    getJudgeObjects,
    getJudgeTotalNumber
  }

})();








