document.addEventListener("DOMContentLoaded", () => {
  const recipeForm = document.getElementById("recipe-form");
  const recipeList = document.getElementById("recipe-list");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  let recipes = [];
  let editIndex = -1;

  function displayRecipes(filteredRecipes = recipes) {
    recipeList.innerHTML = "<h2>All Recipes</h2>";
    filteredRecipes.forEach((recipe, index) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");
      recipeDiv.innerHTML = `
                <img src="${recipe.imageUrl}" alt="${recipe.title}">
                <div class="recipe-details">
                    <h3>${recipe.title}</h3>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                    <button class="edit-button" data-index="${index}">Edit</button>
                    <button class="delete-button" data-index="${index}">Delete</button>
                </div>
            `;
      recipeList.appendChild(recipeDiv);
    });
    addEventListeners();
  }

  function addEventListeners() {
    const editButtons = document.querySelectorAll(".edit-button");
    const deleteButtons = document.querySelectorAll(".delete-button");

    editButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        editIndex = event.target.dataset.index;
        const recipe = recipes[editIndex];
        document.getElementById("recipe-id").value = editIndex;
        document.getElementById("title").value = recipe.title;
        document.getElementById("ingredients").value = recipe.ingredients;
        document.getElementById("instructions").value = recipe.instructions;
        document.getElementById("image-url").value = recipe.imageUrl;
        recipeForm.querySelector("button").textContent = "Update Recipe";
      });
    });

    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        recipes.splice(index, 1);
        displayRecipes();
      });
    });
  }

  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const ingredients = document.getElementById("ingredients").value;
    const instructions = document.getElementById("instructions").value;
    const imageUrl = document.getElementById("image-url").value;

    if (editIndex === -1) {
      recipes.push({ title, ingredients, instructions, imageUrl });
    } else {
      recipes[editIndex] = { title, ingredients, instructions, imageUrl };
      editIndex = -1;
      recipeForm.querySelector("button").textContent = "Add Recipe";
    }

    recipeForm.reset();
    displayRecipes();
  });

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
  });

  displayRecipes();
});
