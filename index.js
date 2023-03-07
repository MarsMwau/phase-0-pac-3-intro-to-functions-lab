function shout(string) {
    return string.toUpperCase();
}

function whisper(weee){
return weee.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
  }
  logShout("complete");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
    logWhisper("complete");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
      }
      
    console.log(sayHiToHeadphonedRoommate('hello')); // Output: "I can't hear you!"
    console.log(sayHiToHeadphonedRoommate('Hello')); // Output: "YES INDEED!"
    console.log(sayHiToGrandma("Let's have dinner together!")); // Output: "Let's have dinner together!"
