let boxes = document.querySelectorAll(".player");
let reset = document.getElementById("reset-game");
let winnerText = document.getElementById("winner-text");
let isX = true;
let a = 0;
let b = 0;

let winnerPattren = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (isX) {
      box.innerText = "X";
      box.style.color = "#0087ff";
      isX = false;
    } else {
      box.innerText = "O";
      isX = true;
      box.style.color = "white";
    }
    box.disabled = true;
    a++;
    checkWinner();
    drawGame(a);
  });
});

const checkWinner = () => {
  for (pattern of winnerPattren) {
    let box0 = boxes[pattern[0]].innerText;
    let box1 = boxes[pattern[1]].innerText;
    let box2 = boxes[pattern[2]].innerText;
    if (box0 !== "" && box1 !== "" && box2 !== "") {
      if (box0 === box1 && box1 === box2) {
        winnerText.innerText = `Winner is ${box1}`;
        disableButtons();
        b = 1;
      }
    }
  }
};

const disableButtons = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

reset.addEventListener("click", () => {
  isX = true;
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  winnerText.innerText = "";
  a = 0;
  b = 0;
});

const drawGame = (a) => {
  if (a === 9 && b === 0) {
    winnerText.innerText = "Game was a Draw";
  }
};
