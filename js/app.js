function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector("small");
  msg.innerText = message;

  input.className = type ? "success" : "error";
  return type;
}

function showSuccess(input) {
  return showMessage(input, "", true);
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function hasValue(input, message) {
  if (input.value.trim() === "") return showError(input, message);

  return showSuccess(input);
}

function validateEmail(input, requiredMessage, invalidMessage) {
  if (!hasValue(input, requiredMessage)) return false;

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) return showError(input, invalidMessage);

  return true;
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = "Please enter your email address";
const EMAIL_INVALID = "Please enter a correct email address format";

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
  let emailValid = validateEmail(
    form.elements["email"],
    EMAIL_REQUIRED,
    EMAIL_INVALID
  );

  if (nameValid && emailValid) alert("Valid name and email address!");
});
