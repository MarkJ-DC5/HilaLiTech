let map;
let evacs = {
	SG: {
		name: 'Sampaguita Gym',
		cap: 123,
		loc: { lat: 14.67119, lng: 121.107643 },
	},
	MLN: {
		name: 'Malanday National School',
		cap: 2573,
		loc: { lat: 14.64667, lng: 121.09141 },
	},
	CEL: {
		name: 'Calumpang Elementary School',
		cap: 3581,
		loc: { lat: 14.6233154, lng: 121.0905312 },
	},
	MHHS: {
		name: 'Marikina Heights High School',
		cap: 393,
		loc: { lat: 14.6482489, lng: 121.1193145 },
	},
	CIS: {
		name: 'Concepcion Integrated School',
		cap: 2918,
		loc: { lat: 14.6367364, lng: 121.0942949 },
	},
	THS: {
		name: 'Tañong High School',
		cap: 1133,
		loc: { lat: 14.6331084, lng: 121.0993541 },
	},
	MES: {
		name: 'Marikina Elementary School',
		cap: 2250,
		loc: { lat: 14.6307807, lng: 121.0973285 },
	},
};

function createEvacCard(evacName, cap, loc) {
	const card = document.createElement('div');
	const name = document.createElement('h5');
	const bar = document.createElement('hr');
	const capacity = document.createElement('p');

	name.innerText = evacName;
	capacity.innerHTML = `<b>Capacity</b>: ${cap}`;
	card.append(name);
	card.appendChild(bar);
	card.append(capacity);
	card.classList.add('evac-card');

	card.addEventListener('click', () => {
		setFocus(loc);
	});

	document.querySelector('.evacs-cards').appendChild(card);
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 14.64907, lng: 121.104973 },
		zoom: 13.5,
	});

	for (evac in evacs) {
		console.log(evacs[evac].loc);
		setMarkerEvac(evacs[evac].loc);
		createEvacCard(evacs[evac].name, evacs[evac].cap, evacs[evac].loc);
	}
}

function setFocus(location) {
	map.setCenter(location);
	map.setZoom(15);
}

let marker = null;
function setMarker(location) {
	marker = new google.maps.Marker({
		position: location,
		map: map,
	});
	marker.setMap(map);
}

function setMarkerEvac(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'markers/evac.png',
	});
	marker.setMap(map);
}

function setMarkerCritical(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'markers/critical.png',
	});
	marker.setMap(map);
}

function setMarkerHigh(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'markers/high.png',
	});
	marker.setMap(map);
}

function setMarkerMedium(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'markers/medium.png',
	});
	marker.setMap(map);
}

function setMarkerLow(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'markers/low.png',
	});
	marker.setMap(map);
}

function removeMarker(markerR) {
	markerR.setMap(null);
}

const userLocation = {
	coordinates: null,
	setCoordinate: function () {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				this.coordinates = { ...pos };
			});
		} else {
			// Browser doesn't support Geolocation
			alert('Geolocation Not Supported');
		}
	},
};
