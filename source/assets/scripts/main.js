// import { Router } from './Router.js';

document.addEventListener("DOMContentLoaded", () => {
  //Footer
  const homePage = document.querySelector("#homeID");
  const calendarPage = document.querySelector("#calendarID");
  const groceryPage = document.querySelector("#grocery-listID");
  const profilePage = document.querySelector("#profile-pageID");

  //Sidepanel
  const favPage = document.querySelector("#favoritesID");
  const addRecipePage = document.querySelector("#add-recipeID");
  //No Write Review page yet

  //Search
  const searchPage = document.querySelector("#search-resultID");

  //Recipe Page
  const recipePage = document.querySelector("#recipeID");
  const cookingPage = document.querySelector("#cooking-modeID");
  //Recipe Nav
  const recipeSumPage = document.querySelector("#recipe-summaryID");
  const recipeIngPage = document.querySelector("#recipe-ingredientsID");
  const recipeDirPage = document.querySelector("#recipe-directionID");

  //Add Recipe Nav
  const addrecipeSumPage = document.querySelector("#add-recipe-summaryID");
  const addrecipeIngPage = document.querySelector("#add-recipe-ingredientsID");
  const addrecipeDirPage = document.querySelector("#add-recipe-directionID");

  //Profile Page Nav
  const userViewed = document.querySelector("#profile-page-reviewsID");
  const userRecipe = document.querySelector("#profile-page-recipeID");

  //Calendar Nav bar
  const monthPage = document.querySelector("#monthID");
  const weekPage = document.querySelector("#weekID");
  const dayPage = document.querySelector("#dayID")

    //Search Bar
    document.querySelector("#search-bar").addEventListener("click", e => {
      e.preventDefault();
      navigate2()
      /*homePage.classList.add('hidden');
      searchPage.classList.remove('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');*/

    });

    //Home
    document.querySelector("#LinkToHome").addEventListener("click", e => {
        e.preventDefault();
        homePage.classList.remove('hidden');
        searchPage.classList.add('hidden');
        calendarPage.classList.add('hidden');
        groceryPage.classList.add('hidden');
        recipePage.classList.add('hidden');
        cookingPage.classList.add('hidden');
        profilePage.classList.add('hidden');
        favPage.classList.add('hidden');
        addRecipePage.classList.add('hidden');
    });

    //calendar
    document.querySelector("#LinkToCalendar").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.remove('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    //Calendar Month View
    document.querySelector("#LinkToMonth").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.remove('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      monthPage.classList.remove('hidden');
      weekPage.classList.add('hidden');
      dayPage.classList.add('hidden');
    });

    //Calendar Week View
    document.querySelector("#LinkToWeek").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.remove('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      monthPage.classList.add('hidden');
      weekPage.classList.remove('hidden');
      dayPage.classList.add('hidden');
    });

    //Calendar Day View
    document.querySelector("#LinkToDay").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.remove('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      monthPage.classList.add('hidden');
      weekPage.classList.add('hidden');
      dayPage.classList.remove('hidden');
    });
  

    //Grocery list
    document.querySelector("#LinkToList").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.remove('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    //User Profile
    document.querySelector("#LinkToProfile").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      userRecipe.classList.remove('hidden');
      userViewed.classList.add('hidden');
    });

    //User Recipe
    document.querySelector("#UserRec").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      userRecipe.classList.remove('hidden');
      userViewed.classList.add('hidden');
    });

    //User Reviews
    document.querySelector("#UserRev").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      userRecipe.classList.add('hidden');
      userViewed.classList.remove('hidden');
    });

    //Favorite
    document.querySelector("#LinkToFav").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.remove('hidden');
      addRecipePage.classList.add('hidden');
    });

    //Previously Cooked
    document.querySelector("#LinkToViewed").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.remove('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      userRecipe.classList.add('hidden');
      userViewed.classList.remove('hidden');
    });

    //Recipe Page (default Summary)
    document.querySelector("#expRecipe").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.remove('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      recipeSumPage.classList.remove('hidden');
      recipeIngPage.classList.add('hidden');
      recipeDirPage.classList.add('hidden');
    });

    //Recipe Summary
    document.querySelector("#ToSum").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.remove('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      recipeSumPage.classList.remove('hidden');
      recipeIngPage.classList.add('hidden');
      recipeDirPage.classList.add('hidden');
    });

    //Recipe Ingredients
    document.querySelector("#ToIng").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.remove('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      recipeSumPage.classList.add('hidden');
      recipeIngPage.classList.remove('hidden');
      recipeDirPage.classList.add('hidden');
    });

    //Recipe Direction
    document.querySelector("#ToDir").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.remove('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');

      recipeSumPage.classList.add('hidden');
      recipeIngPage.classList.add('hidden');
      recipeDirPage.classList.remove('hidden');
    });

    //Cooking Mode
    document.querySelector("#LinkToCM").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.remove('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.add('hidden');
    });

    //Add Recipe (default Summary)
    document.querySelector("#LinkToAdd").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.remove('hidden');

      addrecipeSumPage.classList.remove('hidden');
      addrecipeIngPage.classList.add('hidden');
      addrecipeDirPage.classList.add('hidden');
    });

    //Add Recipe Summary
    document.querySelector("#ToAddSum").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.remove('hidden');

      addrecipeSumPage.classList.remove('hidden');
      addrecipeIngPage.classList.add('hidden');
      addrecipeDirPage.classList.add('hidden');
    });

    //Add Recipe Ingredients
    document.querySelector("#ToAddIng").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.remove('hidden');

      addrecipeSumPage.classList.add('hidden');
      addrecipeIngPage.classList.remove('hidden');
      addrecipeDirPage.classList.add('hidden');
    });

    //Add Recipe Direction
    document.querySelector("#ToAddDir").addEventListener("click", e => {
      e.preventDefault();
      homePage.classList.add('hidden');
      searchPage.classList.add('hidden');
      calendarPage.classList.add('hidden');
      groceryPage.classList.add('hidden');
      recipePage.classList.add('hidden');
      cookingPage.classList.add('hidden');
      profilePage.classList.add('hidden');
      favPage.classList.add('hidden');
      addRecipePage.classList.remove('hidden');

      addrecipeSumPage.classList.add('hidden');
      addrecipeIngPage.classList.add('hidden');
      addrecipeDirPage.classList.remove('hidden');
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
