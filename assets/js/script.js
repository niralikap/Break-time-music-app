
var foodInputEl = document.querySelector('#food-input');
var searchButton = document.querySelector('#search');
var restaurantListEl = document.querySelector('#restaurant-list');
var restaurant1El = document.querySelector('#restaurants-1');
var restaurant2El = document.querySelector('#restaurants-2');
var zipcode = 94109;
var recipes = 'chicken wings';

/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=pizza', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

/*var formSubmitHandler = function (event) {
        event.preventDefault();
      
        var foodname = foodInputEl.value.trim();
      
        if (foodname) {
          getUserRepos(username);
      
          repoContainerEl.textContent = '';
          foodInputEl.value = '';
        } else {
          alert('Please enter a food item');
        }
      };

      var getRecipes = function (food) {
        var apiUrl = 'https://api.github.com/users/' + user + '/repos';
      
        fetch(apiUrl)
          .then(function (response) {
            if (response.ok) {
              console.log(response);
              response.json().then(function (data) {
                console.log(data);
                displayRepos(data, user);
              });
            } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to connect to GitHub');
          });
      };*/
      
    
      var displayRestaurants = function (restaurants) {
        if (restaurants.length === 0) {
            restaurantListEl.textContent = 'No restaurants found.';
            // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
            return;
          }
          for (var i = 0; i < 5; i++) {
            // The result will be `<github-username>/<github-repository-name>`
            var restaurantN = restaurants[i].restaurantName;
            restaurantListEl.append(restaurantN);
            
            //restaurant1El.textContent = ‘Temp: ‘+ lastItem.dTwoTemp + ‘°F’;
var restaurantInputEl = document.querySelector('#restaurant-input');
var restaurantContEl = document.querySelector('#restaurant-container');
var restaurantBtnContEl = document.querySelector('#restaurant-button-container');


var restaurant3El = document.querySelector('#restaurants-3');
var restaurant4El = document.querySelector('#restaurants-4');
var restaurant5El = document.querySelector('#restaurants-5');


function getRestaurants (zipcode) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/'+zipcode+'/0', options)
        

        /*const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
          }
        };
        
        fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/' + zipcode + '/0', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));*/

          /*const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };*/
          
          fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&name=pizza', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

        .then(function (response) {
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            console.log(data);
            
            restaurant1El.textContent = data.restaurants[1].restaurantName;
            restaurant2El.textContent = data.restaurants[2].restaurantName;
            restaurant3El.textContent = data.restaurants[3].restaurantName;
            restaurant4El.textContent = data.restaurants[4].restaurantName;
            restaurant5El.textContent = data.restaurants[5].restaurantName;
        })
}




function zipcodeClickHandler(event) {
    event.preventDefault();
    var inputzipcode = restaurantInputEl.value.trim();
    getRestaurants(inputzipcode);
    // restaurantContEl.value = '';
    console.log(inputzipcode);
}

restaurantBtnContEl.addEventListener('click', zipcodeClickHandler);
/*const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};
fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=pizza', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));*/

 var formSubmitHandler = function (event) {
         event.preventDefault();
         var foodname = foodInputEl.value.trim();
         if (foodname) {
           getUserRepos(username);
           repoContainerEl.textContent = '';
           foodInputEl.value = '';
         } else {
           alert('Please enter a food item');
         }
       };

 var getRestaurants = function (food) {
         var apiUrl = 'https:api.github.com/users/' + user + '/repos';
         fetch(apiUrl)
           .then(function (response) {
             if (response.ok) {
               console.log(response);
               response.json().then(function (data) {
                 console.log(data);
                 displayRepos(data, user);
               });
             } else {
               alert('Error: ' + response.statusText);
             }
           })
           .catch(function (error) {
             alert('Unable to connect to GitHub');
           });
       };
       var displayRestaurants = function (restaurants) {
         if (restaurants.length === 0) {
             restaurantListEl.textContent = 'No restaurants found.';
              Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
             return;
           }
           for (var i = 0; i < 5; i++) {
              The result will be `<github-username>/<github-repository-name>`
             var restaurantN = restaurants[i].restaurantName;
             restaurantListEl.append(restaurantN);*/
             restaurant1El.textContent = ‘Temp: ‘+ lastItem.dTwoTemp + ‘°F’;
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
    //         'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
    //     }
    // };
    // fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

      



// formSubmitHandler





