const billAmount = document.querySelector("#bill-amount");
const tipPerc = [...document.querySelectorAll(".tip-perc-amount")];
const pplNum = document.querySelector("#ppl-num");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const customTip = document.querySelector("#six");
let tipPercentage = 0;

tipPerc.forEach((x) => (x.oninput = tipPercCheck));
customTip.addEventListener("input", tipPercCheck);

function tipPercCheck() {
  if (customTip.value == "") {
    for (el in tipPerc) {
      if (tipPerc[el].checked) {
        tipPercentage = tipPerc[el].value;
      }
    }
  } else {
    for (el in tipPerc) {
      tipPerc[el].checked = false;
    }
    tipPercentage = Number(customTip.value / 100);
  }
}

function calcTip() {
  billWithTip =
    Number(billAmount.value) +
    Number((tipPercentage * billAmount.value) / pplNum.value);
  totalAmount.innerHTML = "$" + billWithTip;
  tipAmount.innerHTML = Number((billWithTip - billAmount) / pplNum.value);
}

billAmount.addEventListener("input", calcTip);
tipPerc.forEach((x) => (x.onchange = calcTip));
pplNum.addEventListener("input", calcTip);
