// Speakers module pattern is exported to be used in index.js
// Only the three parameters in the return of speakers, that is
// init, getSpeakerObjects() and getSpeakerTotalNumber() is accessible
// wherever it would be imported

export let speakers = (function () {
  // Total number of speakers
  // In case of adding of addition or removal of speakers
  // the value stored in it needs to be updated
  let speakerTotalNumber = 6;

  // Array having the names of all the speakers
  // First element of the array corresponds to the
  // name of the first speaker and so on
  let speakerNames = [
    "RICHARD STALLMAN",
    "LINUS TORVALDS",
    "EDWARD SNOWDEN",
    "RICHARD STALLMAN",
    "LINUS TORVALDS",
    "EDWARD SNOWDEN",
  ];

  // Array having the path of the image of each speaker
  let speakerImageSrc = [
    "/static/webpages/Speakers_and_Judges/static/images/img2.png",
    "/static/webpages/Speakers_and_Judges/static/images/img3.png",
    "/static/webpages/Speakers_and_Judges/static/images/pichai.png",
    "/static/webpages/Speakers_and_Judges/static/images/img2.png",
    "/static/webpages/Speakers_and_Judges/static/images/img3.png",
    "/static/webpages/Speakers_and_Judges/static/images/pichai.png",
  ];

  // Array having the instagram id of each speaker
  let speakerInsta = [
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
    "https://www.instagram.com/mlsc_tiet/?hl=en",
    "https://www.instagram.com/microsoft/?hl=en",
  ];

  // Array having the linkedin url of each speaker
  let speakerLinkedIn = [
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
    "https://www.linkedin.com/company/microsoft",
    "https://in.linkedin.com/company/microsoft-learn-student-chapter",
  ];

  // Array having the GitHub url of each speaker
  let speakerGitHub = [
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
    "https://github.com/microsoft",
    "https://github.com/MicrosoftStudentChapter",
  ];

  /* -----------------Info Page Attributes-----------------*/

  // Array containing secondary heading below the name to be displayed in the info page
  let speakerInfoHeading2 = [
    "DAY 1",
    "DAY 2",
    "DAY 1",
    "DAY 2",
    "DAY 1",
    "DAY 2",
  ];

  // Array containing the date, or whichever tertiary heading text lies
  // just below the secondary heading
  let speakerInfoDate = [
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
    "DECEMBER 69, 2069",
    "APRIL 20, 2042",
  ];

  // Array containing the platform and the time
  // or whichever text lies just below the speakerInfoDate[] corresponding value

  let speakerInfoPlatformAndTime = [
    "JITSI MEET, 4:20 PM",
    "YOUTUBE LIVE, 6:30 PM",
    "MASTODON 4:20 PM",
    "JITSI MEET, 4:20 PM",
    "YOUTUBE LIVE, 6:30 PM",
    "MASTODON 4:20 PM",
  ];

  // Array containing the paragraph to be displayed on the info page
  let speakerInfoSummary = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
  ];

  // Array that stores all the speaker objects
  let speakerObjects = [];

  function init() {
    addSpeakersToSpeakerObjects();
  }

  // Factory function which returns a speaker object
  let createSpeakerObject = function (
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
  // pushes the created object to the speakerObjects[] array
  function addSpeakersToSpeakerObjects() {
    for (let i = 0; i < speakerTotalNumber; i++) {
      speakerObjects.push(
        createSpeakerObject(
          i,
          "speaker",
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
      );
    }
  }

  function getSpeakerTotalNumber() {
    return speakerTotalNumber;
  }

  function getSpeakerObjects() {
    return speakerObjects;
  }

  return {
    init,
    getSpeakerObjects,
    getSpeakerTotalNumber,
  };
})();
