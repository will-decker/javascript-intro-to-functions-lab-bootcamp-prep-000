function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  const uppercase = string.toUpperCase();
  console.log(uppercase);
}

function logWhisper(string) {
  const lowercase = string.toLowerCase();
  console.log(lowercase);
}

function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var lowercase = 'hello!'
  var mixedCase = "I love you, Grandma."
  
  if (string.toUpperCase === uppercase) {
    return "YES INDEED!";
  } 
  else if (string.toLowerCase === lowercase) {
    return "I can't hear you!";
  }
  else if (string === mixedCase) {
    return 
  }
}