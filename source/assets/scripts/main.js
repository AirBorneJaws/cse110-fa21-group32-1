// import { Router } from './Router.js';

document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.querySelector("#homeID");
  const searchPage = document.querySelector("#search-resultID");
  const calenderPage = document.querySelector("#calendarID");
  const groceryPage = document.querySelector("#grocery-listID");
  const recipePage = document.querySelector("#recipeID");
  const cookingPage = document.querySelector("#cooking-modeID");
  const profilePage = document.querySelector("#profile-pageID");
  const favPage = document.querySelector("#favoritesID");
  const addRecipePage = document.querySelector("#add-recipeID");

  
    document.querySelector("#search-bar").addEventListener("click", e => {
      
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.remove('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });


    document.querySelector("#LinkToHome").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.remove('hidden');
        searchPage.classList.add('hidden');
        calenderPage.classList.add('hidden');
        groceryPage.classList.add('hidden');
        recipePage.classList.add('hidden');
        cookingPage.classList.add('hidden');
        profilePage.classList.add('hidden');
        favPage.classList.add('hidden');
        addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToCalender").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.remove('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToList").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.remove('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToProfile").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToFav").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.remove('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToViewed").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#expRecipe").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.remove('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToCM").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.remove('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    document.querySelector("#LinkToAdd").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calenderPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.remove('hidden');
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const homePage = document.querySelector
// });

// window.addEventListener('DOMContentLoaded', init);

// async function init() {
//     //initializeServiceWorker();
//     bindSearchBar();
//     try {
//       await fetchRecipes();
//     } catch (err) {
//       console.log(`Error fetching recipes: ${err}`);
//       return;
//     }
    
// }

// function bindSearchBar() {
//   const searchBar = document.getElementsByClassName('search-bar')[0];
//   const button = searchBar.querySelector('button')
//   console.log(document.getElementByClassName('search-result'))
//   button.addEventListener('click', () => {
//     if (document.getElementByClassName('search-result').classList.contains('shown')) {
//       document.getElementByClassName('search-result').classList.remove('shown');
//       document.getElementById('calendar').classList.add('shown');
//     } else {
//       document.getElementByClassName('search-result').classList.add('shown');
//       document.getElementById('calendar').classList.remove('shown');
//     }

//   })
  
// }


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
