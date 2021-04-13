console.log('Hello');
// API for Accuweather

const key = 'gApU6b7kzPbZGGTc0AGHFtGB7IO81jUY';

// info of weather for particular city
const getWeather = async (id) => {
	const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query = `${id}?apikey=${key}`;

	const response = await fetch(base + query);
	const data = await response.json();

	return data[0];
};

// info of city
const getCity = async (city) => {
	// returns a promise
	const base =
		'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;
	const response = await fetch(base + query);

	const data = await response.json();

	return data[0];
};

// FOR CONSOLE TESTING

// getCity('marikina').then(data => {
// 	return getWeather(data.Key);
// }).then(data => {
// 	console.log(data);
// }).catch(error => console.log(error));

// getWeather("264874");

// DOM MANIPULATION

//SELECTORS
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
	// console.log(data);
	const cityDetails = data.cityDetails;
	const weather = data.weather;

	// destructure properties
	// const { cityDetails, weather} = data;

	// update details html
	details.innerHTML = `
		<h5 class="my-3">${cityDetails.EnglishName}</h5>
		<div class="my-3">${weather.WeatherText}</div>
		<div class="display-4 my-4">
			<span>${weather.Temperature.Metric.Value}</span>
			<span>&deg;C</span>
		</div>
	`;

	// night/day, icon images
	const iconSource = `media/0-index/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute('src', iconSource);

	let timeSource = null;
	if (weather.IsDayTime) {
		timeSource = 'media/0-index/day.svg';
	} else {
		timeSource = 'media/0-index/night.svg';
	}
	time.setAttribute('src', timeSource);

	//remove d-non kung andyan
	if (card.calssList.contains('d-none')) {
		card.calssList.remove('d-none');
	}
};

const updateCity = async (city) => {
	// console.log(city);
	const cityDetails = await getCity(city);
	const weather = await getWeather(cityDetails.Key);

	return { cityDetails, weather };
};

// submit event = pagpinress enter ni user for the form lol
cityForm.addEventListener('submit', (e) => {
	// prevent default action
	e.preventDefault();

	//get city value
	const city = cityForm.city.value.trim();
	// reset form fields
	cityForm.reset();
	//update uy with new city
	updateCity(city)
		.then((data) => updateUI(data))
		.catch((error) => console.log(error));
});
