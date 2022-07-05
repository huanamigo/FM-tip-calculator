const billAmount = document.querySelector("#bill-amount");
const tipPerc = [...document.querySelectorAll(".tip-perc-amount")];
const pplNum = document.querySelector("#ppl-num");
const tipAmount = document.querySelector(".tip-amount");
const totalAmount = document.querySelector(".total-amount");
const customTip = document.querySelector("#six");
const resetBtn = document.querySelector(".reset-button");
const tipPercBtn = document.querySelectorAll(".radio-label");
let tipPercentage = 0;

tipPercBtn.forEach((x) => (x.onclick = resetCustomTip));
tipPerc.forEach((x) => (x.oninput = tipPercCheck));
billAmount.addEventListener("input", calcTip);
tipPerc.forEach((x) => (x.onchange = calcTip));
pplNum.addEventListener("input", calcTip);
resetBtn.addEventListener("click", resetForm);

function resetCustomTip() {
  customTip.value = "";
}

function tipPercCheck() {
  if (customTip.value == "") {
    for (el in tipPerc) {
      if (tipPerc[el].checked) {
        tipPercentage = tipPerc[el].value;
      }
    }
  } else {
    tipPercentage = 0;
    for (el in tipPerc) {
      tipPerc[el].checked = false;
    }
    tipPercentage = Number(customTip.value / 100);
  }
}

function resetForm() {
  for (el in tipPerc) {
    tipPerc[el].checked = false;
  }
  tipPercentage = 0;
  billAmount.value = "";
  pplNum.value = 1;
  tipAmount.innerHTML = totalAmount.innerHTML = "$0.00";
  customTip.value = "";
}

function calcTip() {
  billWithTip =
    Number(billAmount.value) + Number(tipPercentage * billAmount.value);
  totalAmount.innerHTML = "$" + Number(billWithTip / pplNum.value).toFixed(2);
  tipAmount.innerHTML =
    "$" + Number((billWithTip - billAmount.value) / pplNum.value).toFixed(2);
}
