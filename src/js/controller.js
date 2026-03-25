import * as model from './model.js';

const icons = new URL('../img/icons.svg', import.meta.url).href;
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
      <figure class="recipe__fig">
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
      </div>
    `;

    recipeContainer.innerHTML = '';
    recipeContainer.insertAdjacentHTML('afterbegin', markup);

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

function renderSpinner(parentEl) {
  const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, showRecipe)
);


