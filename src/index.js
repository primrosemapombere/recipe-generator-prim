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
    "You are culinary expert with all knowledge at your disposal. I am tasking you to generate a recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a recipe about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
