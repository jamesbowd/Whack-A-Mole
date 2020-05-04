const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const grid = document.querySelector(".grid");
let score = document.querySelector("#score");
const gridSize = document.querySelectorAll(".grid-size-btn");

let squares;
let square;
let currentTime;
let randomTime;

let result = 0;

let timerID = null;

for (const button of gridSize) {
  button.addEventListener("click", setGridSize);
}

function init() {
  grid.innerHTML = "";
  score.textContent = "0";
  timeLeft.textContent = "10";
  currentTime = 10;
  randomTime = 10;
}

function setGridSize() {
  init();
  if (this.getAttribute("id") == "three-by-three") {
    squares = 9;
    grid.style.width = "30vw";
    createBoard();
  }
  if (this.getAttribute("id") == "four-by-three") {
    squares = 12;
    grid.style.width = "40vw";
    createBoard();
  }
  if (this.getAttribute("id") == "five-by-three") {
    squares = 15;
    grid.style.width = "50vw";
    createBoard();
  }
  square = document.querySelectorAll(".square");
  click();
  moveMole();
}

function createBoard() {
  for (let i = 0; i < squares; i++) {
    let createSquare = document.createElement("div");
    createSquare.setAttribute("id", i);
    createSquare.setAttribute("class", "square");
    grid.appendChild(createSquare);
  }
}

function randomSquare() {
  randomTime--;
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * squares)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
  if (randomTime === 0) {
    clearInterval(randomID);
  }
}

function click() {
  square.forEach((id) => {
    id.addEventListener("mouseup", () => {
      if (id.id === hitPosition) {
        result = result + 1;
        score.textContent = result;
      }
    });
  });
}

function moveMole() {
  //let timerID = null;
  
  timerID = setInterval(countDown, 1000);
  randomID = setInterval(randomSquare, 1000);
}

function countDown() {  
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerID);
  }
}
