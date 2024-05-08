const cardName = document.querySelector(".cardName");
const cardNameInput = document.getElementById("cardNameInput");
const cardNumber = document.querySelector(".cardNumber");
const cardNumberInput = document.getElementById("cardNumberInput");
const monthInput = document.querySelector(".monthInput");
const cardMonth = document.querySelector(".cardMonth");
const yearInput = document.querySelector(".yearInput");
const cardYear = document.querySelector(".cardYear");
const cvcInput = document.querySelector(".cvcInput");
const textCvc = document.querySelector(".textCvc");
const errorMsg = document.querySelectorAll(".errorMsg");
const errorMsgMonth = document.querySelector(".errorMsgMonth");
const errorMsgYear = document.querySelector(".errorMsgYear");
const errorMsgCvc = document.querySelector(".errorMsgCvc");
const submitButton = document.querySelector(".button");
const continueButton = document.querySelector(".continueButton");
const form = document.querySelector(".form");
const card = document.querySelector(".card");

cardNameInput.addEventListener("input", cardNameUpdating);
cardNumberInput.addEventListener("input", cardNumberUpdating);
cardNumberInput.addEventListener("keydown", throwError);
monthInput.addEventListener("input", monthInputUpdating);
yearInput.addEventListener("input", yearInputUpdating);
cvcInput.addEventListener("input", cvcInputUpdating);
submitButton.addEventListener("click", submitButtonClick);
continueButton.addEventListener("click", continueButtonClick);

function cardNameUpdating() {
  let cardNameInputValue = cardNameInput.value;
  let uppercaseName = cardNameInputValue.toUpperCase();
  cardName.innerHTML = uppercaseName;

  if (cardNameInput.value == "") {
    cardName.innerHTML = "JANE APPLESEED";
  }
}

function cardNumberUpdating() {
  let getInput = cardNumberInput.value;
  cardNumber.innerHTML = getInput.replace(/[^\d]/g, "");

  let a = getInput.match(/\d{1,4}/g);

  if (a !== null) {
    cardNumber.innerHTML = a.join(" ");
  }

  if (cardNumberInput.value.length <= 15) {
    errorMsg.innerHTML = "Too short";
  } else {
    errorMsg.innerHTML = "";
  }

  if (cardNumberInput.value == "") {
    cardNumber.innerHTML = "0000 0000 0000 0000";
  }
}

function limitInput(element, maxLength) {
  if (element.value.length > maxLength) {
    element.value = element.value.slice(0, maxLength);
  }
}

function throwError(event) {
  if (event.key === "e" || event.key === "-") {
    errorMsg.classList.add("errorMsg-active");
    cardNumberInput.classList.add("cardNumberInput-active");
    errorMsg.innerHTML = "Wrong format, numbers only";
  } else if (cardNumberInput.value == "") {
    errorMsg.classList.remove("errorMsg-active");
    cardNumberInput.classList.remove("cardNumberInput-active");
    errorMsg.innerHTML = "";
  }
}

function monthInputUpdating() {
  var inputValue = parseInt(monthInput.value);

  if (inputValue >= 12) {
    monthInput.value = 12;
  } else if (inputValue > 0 && inputValue < 10) {
    monthInput.value = "0" + inputValue;
  } else if (inputValue >= 10 && inputValue <= 12) {
    monthInput.value = "" + inputValue;
  } else if (inputValue === 00) {
    monthInput.value = "";
  }

  cardMonth.innerHTML = monthInput.value;
  const maxLength = 2;

  if (monthInput.value.length >= maxLength) {
    monthInput.value = monthInput.value.slice(0, maxLength);
  }

  cardMonth.innerHTML = monthInput.value;

  // thrown error
  if (monthInput.value != "") {
    yearInput.classList.add("yearInput-active");
    cvcInput.classList.add("cvcInput-active");
    errorMsgYear.classList.add("errorMsgYear-active");
    errorMsgYear.innerHTML = "Can't be blank";
    errorMsgCvc.classList.add("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "Can't be blank";
  } else {
    yearInput.classList.remove("yearInput-active");
    cvcInput.classList.remove("cvcInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (monthInput.value != "" && yearInput.value != "") {
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
  }

  if (monthInput.value != "" && cvcInput.value != "") {
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (monthInput.value != "" && yearInput.value != "" && cvcInput != "") {
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }
}

function yearInputUpdating() {
  cardYear.innerHTML = yearInput.value;
  const maxLength = 2;

  if (yearInput.value.length >= maxLength) {
    yearInput.value = yearInput.value.slice(0, maxLength);
  }

  cardYear.innerHTML = yearInput.value;

  // thrown error
  if (yearInput.value != "") {
    monthInput.classList.add("monthInput-active");
    cvcInput.classList.add("cvcInput-active");
    errorMsgMonth.classList.add("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "Can't be  blank";
    errorMsgCvc.classList.add("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "Can't be blank";
  } else {
    monthInput.classList.remove("monthInput-active");
    cvcInput.classList.remove("cvcInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (monthInput.value != "" && yearInput.value != "") {
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
  }

  if (yearInput.value != "" && cvcInput.value != "") {
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (monthInput.value != "" && yearInput.value != "" && cvcInput != "") {
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }
}

function cvcInputUpdating() {
  // if (cvcInput.value == "") {
  //   textCvc.innerHTML = "000";
  // }

  textCvc.innerHTML = cvcInput.value;
  const maxLength = 3;

  if (cvcInput.value.length >= maxLength) {
    cvcInput.value = cvcInput.value.slice(0, maxLength);
  }

  textCvc.innerHTML = cvcInput.value;

  // thrown error
  if (cvcInput.value != "") {
    monthInput.classList.add("monthInput-active");
    yearInput.classList.add("yearInput-active");
    errorMsgMonth.classList.add("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "Can't be  blank";
    errorMsgYear.classList.add("errorMsgYear-active");
    errorMsgYear.innerHTML = "Can't be blank";
  } else {
    monthInput.classList.remove("monthInput-active");
    yearInput.classList.remove("yearInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
  }

  if (monthInput.value != "" && cvcInput.value != "") {
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (yearInput.value != "" && cvcInput.value != "") {
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }

  if (monthInput.value != "" && yearInput.value != "" && cvcInput != "") {
    monthInput.classList.remove("monthInput-active");
    errorMsgMonth.classList.remove("errorMsgMonth-active");
    errorMsgMonth.innerHTML = "";
    yearInput.classList.remove("yearInput-active");
    errorMsgYear.classList.remove("errorMsgYear-active");
    errorMsgYear.innerHTML = "";
    cvcInput.classList.remove("cvcInput-active");
    errorMsgCvc.classList.remove("errorMsgCvc-active");
    errorMsgCvc.innerHTML = "";
  }
}
function submitButtonClick(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    if (!form.classList.contains("form-active")) {
      form.classList.add("form-active");
      card.classList.add("card-active");
    } else {
      form.classList.remove("form-active");
      card.classList.remove("card-active");
    }
  }
}

function continueButtonClick() {
  if (form.classList.contains("form-active")) {
    form.classList.remove("form-active");
    card.classList.remove("card-active");
  } else {
    form.classList.add("form-active");
    card.classList.add("card-active");
  }

  cardNumberInput.value = "";
  cardNameInput.value = "";
  monthInput.value = "";
  yearInput.value = "";
  cvcInput.value = "";
  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardName.innerHTML = "JANE APPLESEED";
  cardMonth.innerHTML = "00";
  cardYear.innerHTML = "00";
  textCvc.innerHTML = "000";
}
