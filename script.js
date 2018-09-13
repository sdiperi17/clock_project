const HRHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

let hrPosition = 90;
let minPosition = 120;
let secPosition = 240;

HRHAND.style.transform = "rotate("+ hrPosition +"deg)";
MINHAND.style.transform = "rotate("+ minPosition +"deg)";
SECHAND.style.transform = "rotate("+ secPosition +"deg)";
