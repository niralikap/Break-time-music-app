
var restaurantInputEl = document.querySelector('#restaurant-input');
var restaurantContEl = document.querySelector('#restaurant-container');
var restaurantBtnContEl = document.querySelector('#restaurant-button-container');

var restaurant1El = document.querySelector('#restaurants-1');
var restaurant2El = document.querySelector('#restaurants-2');
var restaurant3El = document.querySelector('#restaurants-3');
var restaurant4El = document.querySelector('#restaurants-4');
var restaurant5El = document.querySelector('#restaurants-5');

var restaurantAdd1El = document.querySelector('#restaurant-add1');
var restaurantAdd2El = document.querySelector('#restaurant-add2');
var restaurantAdd3El = document.querySelector('#restaurant-add3');
var restaurantAdd4El = document.querySelector('#restaurant-add4');
var restaurantAdd5El = document.querySelector('#restaurant-add5');

var restaurantCity1El = document.querySelector('#restaurant-city1');
var restaurantCity2El = document.querySelector('#restaurant-city2');
var restaurantCity3El = document.querySelector('#restaurant-city3');
var restaurantCity4El = document.querySelector('#restaurant-city4');
var restaurantCity5El = document.querySelector('#restaurant-city5');

var restaurantWeb1El = document.querySelector('#restaurant-web1');
var restaurantWeb2El = document.querySelector('#restaurant-web2');
var restaurantWeb3El = document.querySelector('#restaurant-web3');
var restaurantWeb4El = document.querySelector('#restaurant-web4');
var restaurantWeb5El = document.querySelector('#restaurant-web5');

var videoListEl = document.querySelector('#video-list');

function getRestaurants (zipcode) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8f3f52aaefmsh9d3bfe6ab22e3e7p16633bjsne5ade91a2959',
		    'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/zipcode/'+zipcode+'/0', options)

        .then(function (response) {
            if(response.ok){
                return response.json();
            }
        })
        .then(function(data){
            console.log(data);
            var restaurantList1 = {
                listRestaurant1: data.restaurants[1].restaurantName,
                listRestaurantAdd1: data.restaurants[1].address,
                listRestaurantCity1: data.restaurants[1].cityName,
                listRestaurantWeb1: data.restaurants[1].website,
                };
            
            var restaurantList2 = 
                {
                listRestaurant2: data.restaurants[2].restaurantName,
                listRestaurantAdd2: data.restaurants[2].address,
                listRestaurantCity2: data.restaurants[2].cityName,
                listRestaurantWeb2: data.restaurants[2].website,
                };
            
            var restaurantList3 = {
                listRestaurant3: data.restaurants[3].restaurantName,
                listRestaurantAdd3: data.restaurants[3].address,
                listRestaurantCity3: data.restaurants[3].cityName,
                listRestaurantWeb3: data.restaurants[3].website,
                };

            var restaurantList4 = 
                {
                listRestaurant4: data.restaurants[4].restaurantName,
                listRestaurantAdd4: data.restaurants[4].address,
                listRestaurantCity4: data.restaurants[4].cityName,
                listRestaurantWeb4: data.restaurants[4].website,
                };

            var restaurantList5 =
                {
                listRestaurant5: data.restaurants[5].restaurantName,
                listRestaurantAdd5: data.restaurants[5].address,
                listRestaurantCity5: data.restaurants[5].cityName,
                listRestaurantWeb5: data.restaurants[5].website,
                };
         
            localStorage.setItem('restaurantList1', JSON.stringify(restaurantList1));
            localStorage.setItem('restaurantList2', JSON.stringify(restaurantList2));
            localStorage.setItem('restaurantList3', JSON.stringify(restaurantList3));
            localStorage.setItem('restaurantList4', JSON.stringify(restaurantList4));
            localStorage.setItem('restaurantList5', JSON.stringify(restaurantList5));
            renderRestaurants();
        })
    }
    
    function renderRestaurants() {
        var localRestaurant1 = JSON.parse(localStorage.getItem('restaurantList1'));
        var localRestaurant2 = JSON.parse(localStorage.getItem('restaurantList2'));
        var localRestaurant3 = JSON.parse(localStorage.getItem('restaurantList3'));
        var localRestaurant4 = JSON.parse(localStorage.getItem('restaurantList4'));
        var localRestaurant5 = JSON.parse(localStorage.getItem('restaurantList5'));

        restaurant1El.textContent = localRestaurant1.listRestaurant1;
        restaurantAdd1El.textContent = localRestaurant1.listRestaurantAdd1;
        restaurantCity1El.textContent = localRestaurant1.listRestaurantCity1;
        restaurantWeb1El.setAttribute('href', localRestaurant1.listRestaurantWeb1);
        restaurantWeb1El.textContent = localRestaurant1.listRestaurantWeb1;

        restaurant2El.textContent = localRestaurant2.listRestaurant2;
        restaurantAdd2El.textContent = localRestaurant2.listRestaurantAdd2;
        restaurantCity2El.textContent = localRestaurant2.listRestaurantCity2;
        restaurantWeb2El.setAttribute('href', localRestaurant2.listRestaurantWeb2);
        restaurantWeb2El.textContent = localRestaurant2.listRestaurantWeb2;

        restaurant3El.textContent = localRestaurant3.listRestaurant3;
        restaurantAdd3El.textContent = localRestaurant3.listRestaurantAdd3;
        restaurantCity3El.textContent = localRestaurant3.listRestaurantCity3;
        restaurantWeb4El.setAttribute('href', localRestaurant3.listRestaurantWeb3);
        restaurantWeb3El.textContent = localRestaurant3.listRestaurantWeb3;

        restaurant4El.textContent = localRestaurant4.listRestaurant4;
        restaurantAdd4El.textContent = localRestaurant4.listRestaurantAdd4;
        restaurantCity4El.textContent = localRestaurant4.listRestaurantCity4;
        restaurantWeb4El.setAttribute('href', localRestaurant4.listRestaurantWeb4);
        restaurantWeb4El.textContent = localRestaurant4.listRestaurantWeb4;

        restaurant5El.textContent = localRestaurant5.listRestaurant5;
        restaurantAdd5El.textContent = localRestaurant5.listRestaurantAdd5;
        restaurantCity5El.textContent = localRestaurant5.listRestaurantCity5;
        restaurantWeb5El.setAttribute('href', localRestaurant5.listRestaurantWeb5);
        restaurantWeb5El.textContent = localRestaurant5.listRestaurantWeb5;
    }

function getVideos() {
    const optionVideos = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8f3f52aaefmsh9d3bfe6ab22e3e7p16633bjsne5ade91a2959',
		    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    fetch('https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138', optionVideos)
    .then(function (response) {
        if(response.ok){
            return response.json();
        }
    })
    .then(function(data){
        videoListEl.textContent='';
        console.log(data);
        for(var i = 0; i < data.results.length; i++) {

            if(data.results[i].original_video_url !== null) {

                var newList = document.createElement('li');
                var newDiv = document.createElement('div');
                var newName = document.createElement('h4');
                newName.textContent = data.results[i].name;
                var newLink = document.createElement('a');
                newLink.setAttribute('target', "_blank");
                newLink.setAttribute('rel', "noopener noreferrer");
                newLink.setAttribute('href', data.results[i].original_video_url)
                newLink.textContent = data.results[i].original_video_url;
                newDiv.appendChild(newName)
                newDiv.appendChild(newLink)
                newList.appendChild(newDiv)
                videoListEl.appendChild(newList)

                
            }
        }  
    })
}


function zipcodeClickHandler() {
    var inputzipcode = restaurantInputEl.value.trim();
    getRestaurants(inputzipcode);
    restaurantContEl.value = '';
    console.log(inputzipcode);
}

restaurantBtnContEl.addEventListener('click', function(){
    zipcodeClickHandler();
    getVideos()
});

renderRestaurants();