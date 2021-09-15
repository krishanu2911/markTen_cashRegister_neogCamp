const billAmount = document.querySelector("#bill-amount");
const checkbutton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
// console.log(billAmount.value);
checkbutton.addEventListener("click", function validbillamount() {
  message.style.display = "none";

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
    } else {
      showMessage(
        "cash given amount should be grater and or equal to bill amount"
      );
    }
  } else {
    showMessage("please enter bill amount greated than 0");
  }
});

function calculateChange() {}

function showMessage(text) {
  message.style.display = "block";
  message.innerText = text;
}
