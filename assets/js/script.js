var restaurantInputEl = document.querySelector('#restaurant-input');
var restaurantContEl = document.querySelector('#restaurant-container');
var restaurantBtnContEl = document.querySelector('#restaurant-button-container');
var restaurant1El = document.querySelector('#restaurants-1');
var restaurant2El = document.querySelector('#restaurants-2');
var restaurant3El = document.querySelector('#restaurants-3');
var restaurant4El = document.querySelector('#restaurants-4');
var restaurant5El = document.querySelector('#restaurants-5');
//Update somthing
function getRestaurants (zipcode) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
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
            // console.log(data);
            
            restaurant1El.textContent = data.restaurants[1].restaurantName;
            restaurant2El.textContent = data.restaurants[2].restaurantName;
            restaurant3El.textContent = data.restaurants[3].restaurantName;
            restaurant4El.textContent = data.restaurants[4].restaurantName;
            restaurant5El.textContent = data.restaurants[5].restaurantName;
        })
}

function getVideos() {
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
    //         'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    //     }
    // };
    // fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
    };
    fetch('https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138', options)
    .then(function (response) {
        if(response.ok){
            return response.json();
        }
    })
    .then(function(data){
        console.log(data);
        for(var i = 0; i < data.results.length; i++) {
            // console.log(data.results[i]);
            // console.log(i)
            if(data.results[i].video_url !== null) {
                console.log(data.results[i].name);
                console.log(data.results[i].video_url, i);
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




