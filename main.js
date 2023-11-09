/**
 * Get All HTML Elements
 */
const playerOneBox = document.querySelector(".player-1");
const playerTowBox = document.querySelector(".player-2");

const playerOneInput = document.getElementById("playerOneInput");
const playerTwoInput = document.getElementById("playerTwoInput");

const playerOneValid = document.getElementById("playerOneValidation");
const playerTwoValid = document.getElementById("playerTwoValidation");

const playerOneSubmit = document.getElementById("playerOneBtn");
const playerTwoSubmit = document.getElementById("playerTwoBtn");

const resultScreen = document.querySelector(".resultScreen");
const resultText = document.getElementById("resultText");

const reset = document.getElementById("reset");

let playerOnevalue = "";
let playerTwoValue = "";
// console.log(playerTwoSubmit);

const validationMessage = (element, message) => {
  element.innerHTML = message;
  setTimeout(() => {
    element.innerHTML = "";
  }, 5000);
};

const declareResult = () => {
  if (playerOnevalue == playerTwoValue) {
    resultScreen.classList.remove("d-none");
    resultText.innerHTML = "Loading....";
    setTimeout(() => {
      resultText.innerHTML = "Player 2 Winner";
    }, 2000);
  } else {
    resultScreen.classList.remove("d-none");
    resultText.innerHTML = "Loading....";
    setTimeout(() => {
      resultText.innerHTML = "Player 1 Winner";
    }, 2000);
  }
};

//event for player one button

playerOneSubmit.addEventListener("click", () => {
  playerOnevalue = playerOneInput.value;
  //   console.log(playerOnevalue);

  if (playerOnevalue == "") {
    validationMessage(
      playerOneValid,
      "Input Is Empty. Please Enter A Valid Number"
    );
  } else if (isNaN(playerOnevalue)) {
    validationMessage(playerOneValid, "Please Enter Only Number");
  } else if (playerOnevalue >= 10) {
    validationMessage(playerOneValid, "Number Input Must Be In 0 - 9");
  } else if (playerOnevalue <= 0) {
    validationMessage(playerOneValid, "Nagative Number Not Allowed");
  } else {
    validationMessage(playerOneValid, "");
    playerOneBox.classList.add("disable");
    playerTowBox.classList.remove("disable");
  }
});

// Event for player two button
playerTwoSubmit.addEventListener("click", () => {
  playerTwoValue = playerTwoInput.value;

  if (playerTwoValue == "") {
    validationMessage(
      playerTwoValid,
      "Input Is Empty. Please Enter A Valid Number"
    );
  } else if (playerTwoValue >= 10) {
    validationMessage(playerTwoValid, "Number Input Must Be In 0 - 9");
  } else if (playerTwoValue <= 0) {
    validationMessage(playerTwoValid, "Nagative Number Not Allowed");
  } else {
    playerTowBox.classList.add("disable");
    validationMessage(playerTwoValid, "");
    declareResult();
  }
});

reset.addEventListener("click", () => {
  location.reload();
});
