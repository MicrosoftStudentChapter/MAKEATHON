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

// Factory function which returns a speaker object
let speakerFactory = function(name, imgSrc, insta, linkedin, github, 
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






