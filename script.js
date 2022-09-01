"use strict";
let myBtn = document.querySelector("button");
myBtn.addEventListener("click", calculateBMI);
let myInput = document.querySelector(".weight");
myInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    calculateBMI();
  }
});

function calculateBMI() {
  let heightValue = parseInt(document.querySelector(".height").value);
  let weightValue = parseInt(document.querySelector(".weight").value);
  let name = document.querySelector(".name").value;
  let BMI = (weightValue / (heightValue * heightValue)).toFixed(2);
  document.querySelector("span").innerHTML = BMI;
  createObject(name, heightValue, weightValue, BMI);
  resetInputs();
}
let myarray = [];
function createObject(name, heightValue, weightValue, BMI) {
  const data = {
    name: name,
    height: heightValue,
    weight: weightValue,
    BMI: BMI,
  };
  myarray.push(data);
  console.log(myarray);
}
function resetInputs() {
  document.querySelector(".height").value = "";
  document.querySelector(".weight").value = "";
  document.querySelector(".name").value = "";
}
