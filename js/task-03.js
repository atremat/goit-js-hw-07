const nameInput = document.querySelector("input#name-input");
const nameOuput = document.querySelector("span#name-output");

nameInput.addEventListener("input", (event) => {
  nameOuput.textContent = event.currentTarget.value.trim() || "Anonymous";
});
