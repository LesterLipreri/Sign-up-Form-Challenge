const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First Name cannot be empty");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last Name cannot be empty");
  } else {
    removeErrorFrom("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email cannot be empty");
  } else if (!validateEmail(email)) {
    addErrorTo("email", "Looks like this is not an email");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password cannot be empty");
  } else {
    removeErrorFrom("password");
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.opacity = "1";
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");

  const small = formControl.querySelector("small");
  small.style.opacity = "0";
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
