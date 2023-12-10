const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formObject = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  console.log(formObject);
  form.reset();
}
