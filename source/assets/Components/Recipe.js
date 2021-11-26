// Recipe.js
import { Router } from '../scripts/Router.js';

/*const router = new Router();
const LOCAL_URL = 'http://127.0.0.1:5000';
const data = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 12,
  gaps: 'no',
  lowFodmap: false,
  aggregateLikes: 1,
  spoonacularScore: 69.0,
  healthScore: 28.0,
  creditsText: 'Foodista.com â€“ The Cooking Encyclopedia Everyone Can Edit',
  license: 'CC BY 3.0',
  sourceName: 'Foodista',
  pricePerServing: 616.45,
  extendedIngredients: [
    {
      id: 10211821,
      aisle: 'Produce',
      image: 'yellow-bell-pepper.jpg',
      consistency: 'solid',
      name: 'bell pepper',
      nameClean: 'bell pepper',
      original: 'Freshly-ground black pepper to taste',
      originalString: 'Freshly-ground black pepper to taste',
      originalName: 'Freshly-ground black pepper to taste',
      amount: 2.0,
      unit: 'servings',
      meta: ['black', 'freshly-ground', 'to taste'],
      metaInformation: ['black', 'freshly-ground', 'to taste'],
      measures: {
        us: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
        metric: { amount: 2.0, unitShort: 'servings', unitLong: 'servings' },
      },
    },
    {
      id: 11215,
      aisle: 'Produce',
      image: 'garlic.png',
      consistency: 'solid',
      name: 'garlic clove',
      nameClean: 'garlic',
      original: '1 Garlic clove',
      originalString: '1 Garlic clove',
      originalName: 'Garlic clove',
      amount: 1.0,
      unit: '',
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 1.0, unitShort: '', unitLong: '' },
        metric: { amount: 1.0, unitShort: '', unitLong: '' },
      },
    },
    {
      id: 11297,
      aisle: 'Produce;Spices and Seasonings',
      image: 'parsley.jpg',
      consistency: 'solid',
      name: 'parsley',
      nameClean: 'parsley',
      original: '1/4 cup Chopped fresh Italian parsley',
      originalString: '1/4 cup Chopped fresh Italian parsley',
      originalName: 'Chopped fresh Italian parsley',
      amount: 0.25,
      unit: 'cup',
      meta: ['fresh', 'italian', 'chopped'],
      metaInformation: ['fresh', 'italian', 'chopped'],
      measures: {
        us: { amount: 0.25, unitShort: 'cups', unitLong: 'cups' },
        metric: { amount: 59.147, unitShort: 'ml', unitLong: 'milliliters' },
      },
    },
    {
      id: 10411529,
      aisle: 'Produce',
      image: 'plum-tomatoes.png',
      consistency: 'solid',
      name: 'plum tomatoes',
      nameClean: 'plum tomato',
      original: '2 cups Canned plum tomatoes drained, and',
      originalString: '2 cups Canned plum tomatoes drained, and',
      originalName: 'Canned plum tomatoes drained, and',
      amount: 2.0,
      unit: 'cups',
      meta: ['canned', 'drained'],
      metaInformation: ['canned', 'drained'],
      measures: {
        us: { amount: 2.0, unitShort: 'cups', unitLong: 'cups' },
        metric: { amount: 473.176, unitShort: 'ml', unitLong: 'milliliters' },
      },
    },
    {
      id: 2047,
      aisle: 'Spices and Seasonings',
      image: 'salt.jpg',
      consistency: 'solid',
      name: 'salt',
      nameClean: 'salt',
      original: '1/2 tablespoon Salt',
      originalString: '1/2 tablespoon Salt',
      originalName: 'Salt',
      amount: 0.5,
      unit: 'tablespoon',
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 0.5, unitShort: 'Tbsps', unitLong: 'Tbsps' },
        metric: { amount: 0.5, unitShort: 'Tbsps', unitLong: 'Tbsps' },
      },
    },
    {
      id: 15270,
      aisle: 'Seafood',
      image: 'shrimp.png',
      consistency: 'solid',
      name: 'shrimp',
      nameClean: 'shrimp',
      original: '1/2 pound Shrimp, shelled and deveined',
      originalString: '1/2 pound Shrimp, shelled and deveined',
      originalName: 'Shrimp, shelled and deveined',
      amount: 0.5,
      unit: 'pound',
      meta: ['shelled', 'deveined'],
      metaInformation: ['shelled', 'deveined'],
      measures: {
        us: { amount: 0.5, unitShort: 'lb', unitLong: 'pounds' },
        metric: { amount: 226.796, unitShort: 'g', unitLong: 'grams' },
      },
    },
    {
      id: 99074,
      aisle: 'Gourmet',
      image: 'squid-ink-pasta.jpg',
      consistency: 'solid',
      name: 'squid ink pasta',
      nameClean: 'squid ink pasta',
      original:
        '1/2 pound Dried squid ink linguine or 1/4 cup Extra-virgin olive oil',
      originalString:
        '1/2 pound Dried squid ink linguine or 1/4 cup Extra-virgin olive oil',
      originalName:
        'Dried squid ink linguine or 1/4 cup Extra-virgin olive oil',
      amount: 0.5,
      unit: 'pound',
      meta: ['dried', 'extra-virgin'],
      metaInformation: ['dried', 'extra-virgin'],
      measures: {
        us: { amount: 0.5, unitShort: 'lb', unitLong: 'pounds' },
        metric: { amount: 226.796, unitShort: 'g', unitLong: 'grams' },
      },
    },
  ],
  id: 654812,
  title: 'Pasta and Seafood',
  readyInMinutes: 45,
  servings: 2,
  sourceUrl: 'http://www.foodista.com/recipe/8YWWDKPS/pasta-and-seafood',
  image: 'https://spoonacular.com/recipeImages/654812-556x370.jpg',
  imageType: 'jpg',
  summary:
    'Pastan and Seafood is a <b>dairy free and pescatarian</b> main course. One serving contains <b>521 calories</b>, <b>38g of protein</b>, and <b>4g of fat</b>. This recipe serves 2 and costs $5.79 per serving. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from Foodista has 1 fans. If you have shrimp, squid ink linguine, parsley, and a few other ingredients on hand, you can make it. To use up the salt you could follow this main course with the <a href="https://spoonacular.com/recipes/apple-turnovers-recipe-48175">Apple Turnovers Recipe</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 57%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/seafood-pasta-373851">Seafood Pasta</a>, <a href="https://spoonacular.com/recipes/seafood-pasta-246928">Seafood Pasta</a>, and <a href="https://spoonacular.com/recipes/seafood-pasta-22624">Seafood Pasta</a> for similar recipes.',
  cuisines: [],
  dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
  diets: ['dairy free', 'pescatarian'],
  occasions: [],
  winePairing: {
    pairedWines: [],
    pairingText:
      'No one wine will suit every pasta dish. Pasta in a tomato-based sauce will usually work well with a medium-bodied red, such as a montepulciano or chianti. Pasta with seafood or pesto will fare better with a light-bodied white, such as a pinot grigio. Cheese-heavy pasta can pair well with red or white - you might try a sangiovese wine for hard cheeses and a chardonnay for soft cheeses. We may be able to make a better recommendation if you ask again with a specific pasta dish.',
    productMatches: [],
  },
  instructions:
    '<ol><li>Bring water to a boil for pasta. Cook for 10 minutes or until al dente. In one saucepan heat half of the olive oil. Add garlic and saute for a few seconds. Add tomatoes and cook for 5 minutes or until thickened; season with salt and pepper.</li><li>In another skillet cook the shrimp in half the remaining olive oil. Remove from heat and toss in the parsley; season with salt and pepper. Drain pasta and transfer to a serving bowl; add shrimp and tomato mixtures and toss; do not serve with cheese.</li><li>This recipe yields 2 servings.</li></ol>',
  analyzedInstructions: [
    {
      name: '',
      steps: [
        {
          number: 1,
          step: 'Bring water to a boil for pasta. Cook for 10 minutes or until al dente. In one saucepan heat half of the olive oil.',
          ingredients: [
            {
              id: 4053,
              name: 'olive oil',
              localizedName: 'olive oil',
              image: 'olive-oil.jpg',
            },
            {
              id: 20420,
              name: 'pasta',
              localizedName: 'pasta',
              image: 'fusilli.jpg',
            },
            {
              id: 14412,
              name: 'water',
              localizedName: 'water',
              image: 'water.png',
            },
          ],
          equipment: [
            {
              id: 404669,
              name: 'sauce pan',
              localizedName: 'sauce pan',
              image: 'sauce-pan.jpg',
            },
          ],
          length: { number: 10, unit: 'minutes' },
        },
        {
          number: 2,
          step: 'Add garlic and saute for a few seconds.',
          ingredients: [
            {
              id: 11215,
              name: 'garlic',
              localizedName: 'garlic',
              image: 'garlic.png',
            },
          ],
          equipment: [],
        },
        {
          number: 3,
          step: 'Add tomatoes and cook for 5 minutes or until thickened; season with salt and pepper.In another skillet cook the shrimp in half the remaining olive oil.',
          ingredients: [
            {
              id: 1102047,
              name: 'salt and pepper',
              localizedName: 'salt and pepper',
              image: 'salt-and-pepper.jpg',
            },
            {
              id: 4053,
              name: 'olive oil',
              localizedName: 'olive oil',
              image: 'olive-oil.jpg',
            },
            {
              id: 11529,
              name: 'tomato',
              localizedName: 'tomato',
              image: 'tomato.png',
            },
            {
              id: 15270,
              name: 'shrimp',
              localizedName: 'shrimp',
              image: 'shrimp.png',
            },
          ],
          equipment: [
            {
              id: 404645,
              name: 'frying pan',
              localizedName: 'frying pan',
              image: 'pan.png',
            },
          ],
          length: { number: 5, unit: 'minutes' },
        },
        {
          number: 4,
          step: 'Remove from heat and toss in the parsley; season with salt and pepper.',
          ingredients: [
            {
              id: 1102047,
              name: 'salt and pepper',
              localizedName: 'salt and pepper',
              image: 'salt-and-pepper.jpg',
            },
            {
              id: 11297,
              name: 'parsley',
              localizedName: 'parsley',
              image: 'parsley.jpg',
            },
          ],
          equipment: [],
        },
        {
          number: 5,
          step: 'Drain pasta and transfer to a serving bowl; add shrimp and tomato mixtures and toss; do not serve with cheese.This recipe yields 2 servings.',
          ingredients: [
            {
              id: 1041009,
              name: 'cheese',
              localizedName: 'cheese',
              image: 'cheddar-cheese.png',
            },
            {
              id: 15270,
              name: 'shrimp',
              localizedName: 'shrimp',
              image: 'shrimp.png',
            },
            {
              id: 11529,
              name: 'tomato',
              localizedName: 'tomato',
              image: 'tomato.png',
            },
            {
              id: 20420,
              name: 'pasta',
              localizedName: 'pasta',
              image: 'fusilli.jpg',
            },
          ],
          equipment: [
            {
              id: 404783,
              name: 'bowl',
              localizedName: 'bowl',
              image: 'bowl.jpg',
            },
          ],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularSourceUrl: 'https://spoonacular.com/pasta-and-seafood-654812',
};*/

class RecipePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Create styles and root element
    const styles = document.createElement('style');
    const article = document.createElement('article');

    // Fill in styles and root element
    styles.innerHTML = ``;
    article.innerHTML = `

        <h2>Recipes</h2>
        <div class="recipe-navbar">
        <a href="#recipe-summaryID" id="ToSum">Summary</a>
        <a href="#recipe-ingredientsID" id="ToIng">Ingredients</a>
        <a href="#recipe-directionID" id="ToDir">Directions</a>
        </div>

        <!--Recipe Summary-->
        <div id="recipe-summaryID" class="recipe-summary" style="display: block">
        <p>Summary</p>
        <p>Content...</p>
        
        <button type="button" class="recipe-summmaryButton">Add to My Favorites</button>
        </div>

        <!--Recipe Ingredients-->
        <div id="recipe-ingredientsID" class="recipe-ingredients" style="display: none">
        <p>Ingredients</p>
        <!--Add To List Button--> 
        <form></form>
        <br>
        <button type="button">Add to List</button>
        </div>

        <!--Recipe Directions-->
        <div id="recipe-directionID" class="recipe-direction" style="display: none">
        <p>Direction</p>
        <ul>
        </ul>
        <button><a id="LinkToCM"> Cook </a></button>
        </div>

    `;

    // Append elements to the shadow root
    this.shadowRoot.append(styles, article);
    /*router.addPage('cooking-mode', function () {
      document.getElementById('#section--recipe').classList.remove('shown');

      document.getElementById('#section--cooking-mode').classList.add('shown');
    });

    const CMPage = this.shadowRoot.getElementById('LinkToCM');
    CMPage.addEventListener('click', () => {
      router.navigate('cooking-mode');
    });*/

    //Summary
    this.shadowRoot.getElementById('ToSum').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });

    //Add elements to summary
    /*let summaryDiv = this.shadowRoot.getElementById('recipe-summaryID');

    //Create image
    let image = document.createElement('img');
    image.src = getImage(data);
    image.alt = 'No Image to Display';
    image.id = 'summaryImage';

    //Create Coook Time
    let cookTime = document.createElement('p');
    cookTime.innerHTML = 'Cook Time ' + getCookTime(data) + ' minutes';
    cookTime.id = 'summaryCookTime';

    //Create Servings
    let servings = document.createElement('p');
    servings.innerHTML = 'Servings ' + getServings(data);
    servings.id = 'summaryServings';

    //Create Summary
    let summary = document.createElement('p');
    summary.innerHTML = getSummary(data);
    summary.id = 'summarySummary';

    summaryDiv.appendChild(image);
    summaryDiv.appendChild(cookTime);
    summaryDiv.appendChild(servings);
    summaryDiv.appendChild(summary);*/

    //Ingredients
    this.shadowRoot.getElementById('ToIng').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });

    //Add Ingredients to display
    /*let table = this.shadowRoot
      .getElementById('recipe-ingredientsID')
      .querySelector('table');
    let ingredientsArray = getIngreds(data);
    for (let i = 0; i < ingredientsArray.length; i++) {
      let row = table.insertRow(i);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);

      let checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.name = 'checkbox' + i;
      cell1.appendChild(checkBox);

      let ingredient = ingredientsArray[i];
      let label = document.createElement('label');
      let ingredientString = document.createTextNode(
        ingredient['amount'] +
          ' ' +
          ingredient['unit'] +
          ' of ' +
          ingredient['name']
      );
      label.appendChild(ingredientString);
      cell2.appendChild(label);
    }*/

    //Directions
    this.shadowRoot.getElementById('ToDir').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: show');
    });

    //Add Directions to display
    /*let directionsDiv = this.shadowRoot.getElementById('recipe-directionID');
    let instructions = document.createElement('div');
    instructions.innerHTML = getDirs(data);
    directionsDiv.appendChild(instructions);*/
  }

  set data(data) {
    console.log(data);
    this.json = data;
    this.shadowRoot.querySelector('article').innerHTML = `

      <h2>Recipes</h2>
      <div class="recipe-navbar">
      <a href="#recipe-summaryID" id="ToSum">Summary</a>
      <a href="#recipe-ingredientsID" id="ToIng">Ingredients</a>
      <a href="#recipe-directionID" id="ToDir">Directions</a>
      </div>

      <!--Recipe Summary-->
      <div id="recipe-summaryID" class="recipe-summary" style="display: block">
      <p>Summary</p>
      <p>Content...</p>
      
      <button type="button" class="recipe-summmaryButton">Add to My Favorites</button>
      </div>

      <!--Recipe Ingredients-->
      <div id="recipe-ingredientsID" class="recipe-ingredients" style="display: none">
        <p>Ingredients</p>
        <!--Add To List Button--> 
        <form>
        </form>
        <br>
        <button type="button">Add to List</button>
      </div>

      <!--Recipe Directions-->
      <div id="recipe-directionID" class="recipe-direction" style="display: none">
      <p>Direction</p>
      <ul>
      </ul>
      <button><a id="LinkToCM"> Cook </a></button>
      </div>

    `;
    
    //Set Title
    const title = getTitle(data).toUpperCase();
    this.shadowRoot.querySelector('h2').innerHTML = title;

    //Set Summary
    const summary = getSummary(data);
    this.shadowRoot.getElementById('recipe-summaryID').innerHTML = summary;
    
    //Set Ingredients
    const form = this.shadowRoot.querySelector('form');
    //If there are no ingredients
    if(!data.recipe.extendedIngredients || data.recipe.extendedIngredients.length == 0){
      form.innerHTML = 'There are no ingredients(need to be fixed)';
    }
    else{
      for(let i = 0; i < data.recipe.extendedIngredients.length; i++){
        const ingredient = data.recipe.extendedIngredients[i];
        const currElement = document.createElement('input');
        currElement.setAttribute('type', 'checkbox');
        currElement.setAttribute('name', ingredient.name);
        form.append(currElement);
        const content = document.createElement('label');
        content.setAttribute('for', ingredient.name);
        content.innerHTML = ingredient.original;
        form.append(content);
      }
    }

    //Set Directions
    const list = this.shadowRoot.querySelector('ul');
    //fix the minor problem that there are no directions
    if(!data.recipe.analyzedInstructions || data.recipe.analyzedInstructions.length == 0){
      list.innerHTML = 'there are no directions(need to be fixed)';
    }
    else{
      for(let i = 0; i < data.recipe.analyzedInstructions[0].steps.length; i++){
        const step = data.recipe.analyzedInstructions[0].steps[i];
        const currStep = document.createElement('li');
        currStep.innerHTML = step.step;
        list.appendChild(currStep);
      }
    }

    this.shadowRoot.getElementById('ToSum').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });

    this.shadowRoot.getElementById('ToDir').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: show');
    });

    this.shadowRoot.getElementById('ToIng').addEventListener('click', (e) => {
      e.preventDefault();
      this.shadowRoot
        .getElementById('recipe-summaryID')
        .setAttribute('style', 'display: none');
      this.shadowRoot
        .getElementById('recipe-ingredientsID')
        .setAttribute('style', 'display: show');
      this.shadowRoot
        .getElementById('recipe-directionID')
        .setAttribute('style', 'display: none');
    });
  }

  /**
   * Returns the object of the currect recipe being used.
   */
  get data() {
    return this.json;
  }
}


// SUMMARY ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns Number of minutes it takes to cook this recipe
 */
function getCookTime(data) {
  return data['readyInMinutes'];
}

/**
 *
 * @param {JSON} data
 * @returns Number of servings this recipe creates
 */
function getServings(data) {
  return data['servings'];
}

/**
 *
 * @param {JSON} data
 * @returns Base 64 format of image or url link to image depending on if it comes from spoonacular or our database
 */
function getImage(data) {
  return data['image'];
}

/**
 *
 * @param {JSON} data
 * @returns Title of recipe
 */
function getTitle(data) {
  return data.recipe.title;
}

/**
 *
 * @param {JSON} data
 * @returns Summary paragraph of the recipe
 */
function getSummary(data) {
  return data.recipe.summary;
}

// INGREDIENTS ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns Array of objects where each object contains an ingredient summary,
 * the ingredient summary object looks like, {name:"", unit:"", amount:""}
 */
function getIngreds(data) {
  return data['extendedIngredients'];
}

// DIRECTIONS ELEMENTS
/**
 *
 * @param {JSON} data
 * @returns An ordered list <ol> with each step in its own list element <li>
 */
function getDirs(data) {
  return data['instructions'];
}

customElements.define('recipe-page', RecipePage);
