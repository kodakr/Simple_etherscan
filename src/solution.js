var date = new Date();
var Year = date.getFullYear();
var Hour = date.getHours();
var greeting;

if (Hour < 12) {greeting = "morning"}
else if (Hour >= 12 && Hour<16) {greeting = "afternoon"}
else {greeting = "evening"};

console.log(Hour);







export default Year;
export {greeting};