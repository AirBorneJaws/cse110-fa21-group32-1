import { Router } from './Router.js';

const recipes = [
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json',
    'https://introweb.tech/assets/json/stuffing.json',
    'https://introweb.tech/assets/json/turkey.json',
    'https://introweb.tech/assets/json/pumpkinPie.json'
  ];

const recipeData = {}

const router = new Router(function () {
    document.getElementsByClassName('calendar').classList.add('shown');
    document.getElementsByClassName('calendar').classList.remove('shown');

    document.getElementsByClassName('grocery-list').classList.add('shown');
    document.getElementsByClassName('grocery-list').classList.remove('shown');

    document.getElementsByClassName('recipe').classList.add('shown');
    document.getElementsByClassName('recipe').classList.remove('shown');

    document.getElementsByClassName('cooking-mode').classList.add('shown');
    document.getElementsByClassName('cooking-mode').classList.remove('shown');

    document.getElementsByClassName('profile-page').classList.add('shown');
    document.getElementsByClassName('profile-page').classList.remove('shown');

    document.getElementsByClassName('favorites').classList.add('shown');
    document.getElementsByClassName('favorites').classList.remove('shown');

    document.getElementsByClassName('add-recipe').classList.add('shown');
    document.getElementsByClassName('add-recipe').classList.remove('shown');
});

window.addEventListener('DOMContentLoaded', init);


async function init() {
    initializeServiceWorker();
  
    try {
      await fetchRecipes();
    } catch (err) {
      console.log(`Error fetching recipes: ${err}`);
      return;
    }
}

/*
function bindRecipeCard(recipeCard, pageName) {
  recipeCard.addEventListener('click', e => {
    if (e.path[0].nodeName == 'A') return;
    router.navigate(pageName);
  });
*/

function bindPopstate() {
  window.addEventListener('popstate', function(event){
    if(event.state){
      router.navigate(event.state.page,true);
    }
    else{
      router.navigate('home',true);
    }
  });
