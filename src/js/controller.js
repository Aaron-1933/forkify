import * as model from './model.js';
import recipeView from './views/Recipeview.js';


const recipeContainer = document.querySelector('.recipe');

async function controlRecipes() {
  try {
    // 1) Obtener el id del hash
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 2) Mostrar spinner
   recipeView.renderSpinner();

    // 3) Pedir datos al model
    await model.loadRecipe(id);

    // 4) Leer la receta desde el state
    recipeView.render(model.state.recipe); //revisar
  } catch (err) {
    recipeView.renderError();
  }
}
  const controlSearchResults = async function () {
  try {
    const query = 'pizza'; // 👈 temporal para prueba

    await model.loadSearchResults(query);

    console.log(model.state.search.results);

  } catch (err) {
    console.log(err);
  }
};


  function init() {
    recipeView.addHandlerRender(controlRecipes)
  }
  init();


 // controlSearchResults();

