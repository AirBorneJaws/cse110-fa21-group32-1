// router.js
    // export class Router {
    //     static routes = {};
    //     constructor(homeFunc) {
    //         this['home'] = homeFunc;
    //     }

    //     addPage(page, pageFunc) {
    //         this[page] = pageFunc;
    //     }

    //     navigate(page, statePopped) {
    //         console.log(`navigate() function called, requested page: ${page}`);

    //         if (!this[page]) {
    //             console.log("Function not exist.");
    //             return;
    //         }

    //         var hash;
    //         if (page == 'home') {
    //             hash = "";
    //         } else {
    //             hash = '#' + page;
    //         }

    //         if (!statePopped && (window.location.hash != hash)) {
    //             history.pushState({
    //                 page
    //             }, " ", window.location + hash);
    //         }


    //         this[page]();
    //     }


    // }

let pageIds = ['home', 'search-result', 'calendar',
    'grocery-list', 'recipe', 'cooking-mode',
    'profile-page', 'favorites', 'add-recipe', 'sidepanel'
];
// className ^
// sidepanel should be shown in every page

/**
 * @param currPage is the class name for the current associated page (might be able to use statePopped for this info) TODO:
 * @param nextPage is the class name for the next associated page
 * @param statePopped TODO:
 */
function navigate(currPage, nextPage, statePopped) {
    document.getElementsByClassName(currPage).classList.remove('shown');
    document.getElementsByClassName(nextPage).classList.add('shown');

    if (nextPage === 'home' || nextPage === 'search-results') {
        document.getElementsByClassName('search-bar').classList.add('shown');
    }

    // for (let i = 0; i < pageIds.length; i++) {
    //   if (pageIds[i] === pageClass) {
    //     document.getElementsByClassName(pageClass).classList.add('shown');
    //   }
    //   else if (pageIds[i] === 'search-bar'){
    //     if (pageClass === 'home' || pageClass === 'search-results') {
    //       document.getElementsByClassName('search-bar').classList.add('shown');
    //     }
    //     else {
    //       document.getElementsByClassName('search-bar').classList.remove('shown');
    //     }
    //   }
    //   else {
    //     document.getElementsByClassName(pageClass).classList.remove('shown');
    //   }
    // }
}