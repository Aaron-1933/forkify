import * as model from './model.js';


const recipeContainer = document.querySelector('.recipe');

async function showRecipe() {
  try {
    // 1) Obtener el id del hash
    const id = window.location.hash.slice(1);
    if (!id) return;

    // 2) Mostrar spinner
    renderSpinner(recipeContainer);

    // 3) Pedir datos al model
    await model.loadRecipe(id);

    // 4) Leer la receta desde el state
    const recipe = model.state.recipe; //revisar

    // 5) Renderizar
    const markup = `
   
    `;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}



['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
