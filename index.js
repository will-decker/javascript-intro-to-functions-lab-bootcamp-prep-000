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
  
  if (uppercase.toUpperCase() === string) {
    return "YES INDEED!";
  } else if (lowercase.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string === mixedCase) {
    return "I love you, too.";
  }
}