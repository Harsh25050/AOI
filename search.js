const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f4e4b26d0msh351ffb665f57b86p1c6a18jsndd0d0c32fcfb',
		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
	}
};

fetch('https://google-search74.p.rapidapi.com/?query=Nike&limit=10&related_keywords=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));