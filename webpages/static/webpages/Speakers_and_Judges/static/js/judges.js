// judges module pattern is exported to be used in index.js
// Only the three parameters in the return of judges, that is
// init, getJudgeObjects() and getJudgeTotalNumber() is accessible
// wherever it would be imported

export let judges = (function () {
  // Total number of judges
  // In case of adding of addition or removal of judges
  // the value stored in it needs to be updated
  let judgeTotalNumber = 6;

  // Array having the names of all the judges
  // First element of the array corresponds to the
  // name of the first judge and so on
  let judgeNames = [
    "EDWARD SNOWDEN",
    "RICHARD STALLMAN",
    "LINUS TORVALDS",
    "EDWARD SNOWDEN",
    "RICHARD STALLMAN",
    "LINUS TORVALDS",
  ];

  // Array having the path of the image of each judge
  let judgeImageSrc = [
    "/static/webpages/Speakers_and_Judges/static/images/img3.png",
    "/static/webpages/Speakers_and_Judges/static/images/pichai.png",
    "/static/webpages/Speakers_and_Judges/static/images/img2.png",
    "/static/webpages/Speakers_and_Judges/static/images/img3.png",
    "/static/webpages/Speakers_and_Judges/static/images/pichai.png",
    "/static/webpages/Speakers_and_Judges/static/images/img2.png",
  ];

  // Array having the instagram id of each judge
  let judgeInsta = [
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
  ];

  // Array having the linkedin url of each judge
  let judgeLinkedIn = [
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
  ];

  // Array having the GitHub url of each judge
  let judgeGitHub = [
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
  ];

  /* -----------------Info Page Attributes-----------------*/

  // Array containing secondary heading below the name to be displayed in the info page
  let judgeInfoHeading2 = [
    "DAY 1",
    "DAY 2",
    "DAY 1",
    "DAY 2",
    "DAY 1",
    "DAY 2",
  ];

  // Array containing the date, or whichever tertiary heading text lies
  // just below the secondary heading
  let judgeInfoDate = [
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
  ];

  // Array containing the platform and the time
  // or whichever text lies just below the judgeInfoDate[] corresponding value
  let judgeInfoPlatformAndTime = [
    "JITSI MEET, 4:20 PM",
    "YOUTUBE LIVE, 6:30 PM",
    "MASTODON 4:20 PM",
    "JITSI MEET, 4:20 PM",
    "YOUTUBE LIVE, 6:30 PM",
    "MASTODON 4:20 PM",
  ];

  // Array containing the paragraph to be displayed on the info page
  let judgeInfoSummary = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
  ];

  // Array that stores all the judge objects
  let judgeObjects = [];

  //init();
  function init() {
    addJudgesToJudgeObjects();
  }

  // Factory function which returns a judge object
  let createJudgeObject = function (
    id,
    type,
    name,
    imgSrc,
    insta,
    linkedin,
    github,
    infoHeading2,
    infoDate,
    infoPlatformAndTime,
    infoSummary
  ) {
    return {
      id,
      type,
      name,
      imgSrc,
      insta,
      linkedin,
      github,
      infoHeading2,
      infoDate,
      infoPlatformAndTime,
      infoSummary,
    };
  };

  // It iterates through all the arrays containing the attributes,
  // passing the ith index of each to the factory function, and then
  // pushes the created object to the judgeObjects[] array
  function addJudgesToJudgeObjects() {
    for (let i = 0; i < judgeTotalNumber; i++) {
      judgeObjects.push(
        createJudgeObject(
          i,
          "judge",
          judgeNames[i],
          judgeImageSrc[i],
          judgeInsta[i],
          judgeLinkedIn[i],
          judgeGitHub[i],
          judgeInfoHeading2[i],
          judgeInfoDate[i],
          judgeInfoPlatformAndTime[i],
          judgeInfoSummary[i]
        )
      );
    }
  }

  function getJudgeTotalNumber() {
    return judgeTotalNumber;
  }

  function getJudgeObjects() {
    return judgeObjects;
  }

  return {
    init,
    getJudgeObjects,
    getJudgeTotalNumber,
  };
})();
