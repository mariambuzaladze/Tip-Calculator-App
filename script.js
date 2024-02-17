let billInput = document.getElementsByClassName("input")[0];
let peopleInput = document.getElementsByClassName("input")[1];

let percents = document.getElementsByClassName("percent");
let userPercent = document.getElementsByClassName("tip-input")[0];

let bill;

billInput.addEventListener("input", function () {
  bill = Number(billInput.value);
  tipCalculator();
});

let peopleNum;
let errorMessage = document.getElementsByClassName("zero-people")[0];

peopleInput.addEventListener("input", function () {
  peopleNum = Number(peopleInput.value);
  if (peopleNum !== 0) {
    tipCalculator();
  } else {
    errorMessage.style.display = "inline";
  }
});

let tip = 0;

for (let i = 0; i < percents.length; i++) {
  percents[i].addEventListener("click", function () {
    tip = Number(percents[i].textContent.split("%")[0]);
    tipCalculator();
  });
}

userPercent.addEventListener("input", function () {
  tip = userPercent.value;
  tipCalculator();
});

let tipAmount;
let total;

let tipOutput = document.getElementsByClassName("tip-amount")[0];
let totalOutput = document.getElementsByClassName("total")[0];

function tipCalculator() {
  if (!isNaN(bill) && !isNaN(peopleNum) && !isNaN(tip)) {
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
