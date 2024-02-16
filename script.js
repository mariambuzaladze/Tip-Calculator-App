let billInput = document.getElementsByClassName("input")[0];
let peopleInput = document.getElementsByClassName("input")[1];

let fivePercent = document.getElementsByClassName("percent")[0];
let tenPercent = document.getElementsByClassName("percent")[1];
let fifteenPercent = document.getElementsByClassName("percent")[2];
let twentyPercent = document.getElementsByClassName("percent")[3];
let twentyFivePercent = document.getElementsByClassName("percent")[4];
let userPercent = document.getElementsByClassName("tip-input")[0];

let bill;

billInput.addEventListener("input", function () {
  bill = billInput.value;
  tipCalculator();
});

let peopleNum;

peopleInput.addEventListener("input", function () {
  peopleNum = peopleInput.value;
  tipCalculator();
});

let tip;

fivePercent.addEventListener("click", function () {
  tip = 5;
  tipCalculator();
});

tenPercent.addEventListener("click", function () {
  tip = 10;
  tipCalculator();
});

fifteenPercent.addEventListener("click", function () {
  tip = 15;
  tipCalculator();
});

twentyPercent.addEventListener("click", function () {
  tip = 20;
  tipCalculator();
});

twentyFivePercent.addEventListener("click", function () {
  tip = 25;
  tipCalculator();
});

userPercent.addEventListener("input", function () {
  tip = userPercent.value;
  tipCalculator();
});

let tipAmount;
let total;

let tipOutput = document.getElementsByClassName("tip-amount")[0];
let totalOutput = document.getElementsByClassName("total")[0];

function tipCalculator() {
  if (bill !== undefined && peopleNum !== undefined && tip !== undefined) {
    tipAmount = (bill * tip) / 100;
    total = (bill + tipAmount) / peopleNum;

    tipOutput.textContent = "$" + tipAmount;
    totalOutput.textContent = "$" + total;
    resetButton.style.backgroundColor = "#9fe8df";
  }
}

let resetButton = document.getElementsByClassName("reset")[0];

resetButton.addEventListener("click", function () {
  tipOutput.textContent = "$0.00";
  totalOutput.textContent = "$0.00";
  billInput.value = 0;
  peopleInput.value = 0;
  resetButton.style.backgroundColor = "#0d686d";
});
