function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2c25e8ee30afc855b6tobf84420a3ae3";
  let context =
    "You are a culinary genius with many delicacies at your disposal. Please generate a simple and short recipe when a keyword is entered. You are tasked to generate a 7 line recipe and separate each line with a <br />. Make sure to follow the user instructions. Sign the recipe with 'SheCodes AI' inside a <strong> element at theS end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a Recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
