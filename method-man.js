const words = (str) => str.split(" ");
const sentence = (arr) => arr.join(" ");
const yell = (str) => String(str).toUpperCase();
const whisper = (str) => "*"+String(str).toLowerCase()+"*";
const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();