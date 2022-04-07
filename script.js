//Elements
const hoursElements = document.querySelector(".hour");
const minutesElements = document.querySelector(".minute");
const secondsElements = document.querySelector(".second");

//Event Listeners
document.addEventListener("DOMContentLoaded", set);

//Functions
function set() {
  //   hoursElements.innerText = 0;
  //   minutesElements.innerText = 0;
  //   secondsElements.innerText = 0;
  setInterval(function () {
    loadClock();
  }, 1000);
}
function loadClock() {
  let date = new Date();
  hoursElements.innerText = date.getHours();
  minutesElements.innerText = date.getMinutes();
  secondsElements.innerText = date.getSeconds();
}
