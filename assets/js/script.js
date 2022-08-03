
var restaurantInputEl = document.querySelector('#restaurant-input');
var restaurantContEl = document.querySelector('#restaurant-container');
var restaurantBtnContEl = document.querySelector('#restaurant-button-container');

var restaurant1El = document.querySelector('#restaurants-1');
var restaurant2El = document.querySelector('#restaurants-2');
var restaurant3El = document.querySelector('#restaurants-3');
var restaurant4El = document.querySelector('#restaurants-4');
var restaurant5El = document.querySelector('#restaurants-5');

var videoListEl = document.querySelector('#video-list');

function getRestaurants (zipcode) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '717b7aa287mshd26234a7983062ap1889c4jsn203d0606c5be',
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
            var restaurantList = {
                listRestaurant1: data.restaurants[1].restaurantName,
                listRestaurant2: data.restaurants[2].restaurantName,
                listRestaurant3: data.restaurants[3].restaurantName,
                listRestaurant4: data.restaurants[4].restaurantName,
                listRestaurant5: data.restaurants[5].restaurantName,
            } 
            localStorage.setItem('restaurantList', JSON.stringify(restaurantList));
            renderRestaurants();
        })
    }
    
    function renderRestaurants() {
        var localRestaurant = JSON.parse(localStorage.getItem('restaurantList'));
        restaurant1El.textContent = localRestaurant.listRestaurant1;
        restaurant2El.textContent = localRestaurant.listRestaurant2;
        restaurant3El.textContent = localRestaurant.listRestaurant3;
        restaurant4El.textContent = localRestaurant.listRestaurant4;
        restaurant5El.textContent = localRestaurant.listRestaurant5;
    }

function getVideos() {
    const optionVideos = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '717b7aa287mshd26234a7983062ap1889c4jsn203d0606c5be',
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