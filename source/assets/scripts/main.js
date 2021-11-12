import { Router } from './Router.js';

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

async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    recipes.forEach(recipe => {
      fetch(recipe)
        .then(response => response.json())
        .then(data => {
          // This grabs the page name from the URL in the array above
          data['page-name'] = recipe.split('/').pop().split('.')[0];
          recipeData[recipe] = data;
          if (Object.keys(recipeData).length == recipes.length) {
            resolve();
          }
        })
        .catch(err => {
          console.log(`Error loading the ${recipe} recipe`);
          reject(err);
        });
    });
  });
}

//cook button
//function bindCookButton(){
//  const button = document.querySelector('.button--wrapper > button');
//}

//navigate to next page
function bindLink(link, pageName) {
  link.addEventListener('click', e => {
    if (e.path[0].nodeName == 'A') return;
    router.navigate(pageName);
  });
}

function bindPopstate() {
  window.addEventListener('popstate', function(event){
    if(event.state){
      router.navigate(event.state.page,true);
    }
    else{
      router.navigate('home',true);
    }
  });

}
