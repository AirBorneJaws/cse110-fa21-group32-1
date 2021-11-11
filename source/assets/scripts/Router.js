// router.js
 export class Router {
    static routes = {};
    constructor(homeFunc) {
        this['home'] = homeFunc;
      }
    
      addPage(page, pageFunc) {
        this[page] = pageFunc;
       }
    
      navigate(page, statePopped) {
        console.log(`navigate() function called, requested page: ${page}`);
  
        if(!this[page]){
          console.log("Function not exist.");
          return;
        }
  
        var hash;
        if(page == 'home'){
          hash = "";
        }
        else{
          hash = '#' + page;
        }
  
        if(!statePopped && (window.location.hash != hash)){
          history.pushState({page}, " ", window.location + hash );
        }
    
  
        this[page]();
      }

  
  }