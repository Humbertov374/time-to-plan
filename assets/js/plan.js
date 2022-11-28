// current date to top
var m = document.querySelector("#currentDay");
m.textContent = moment().format('dddd[,] MMMM Do YYYY');

//current time turns the current hour into a digit.
var currentTime = moment().format('H');
currentTime = parseInt(currentTime);