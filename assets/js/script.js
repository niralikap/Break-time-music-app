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


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '77c8fec0d0mshdb05a13cd8505e8p1c1508jsn238f4fdfc268',
            'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com'
        }
    };
    
    fetch('https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/MI/city/West%20Bloomfield/0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));