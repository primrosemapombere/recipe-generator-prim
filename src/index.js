function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "Marinate your chicken pieces in spices of your choice for 4 hours",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let typeElement = document.querySelector("#type");
typeElement.addEventListener("submit", generateRecipe);
