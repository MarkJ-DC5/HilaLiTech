let map;
let isRescuer = false;
let isEvacsLoaded = false;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 14.64907, lng: 121.104973 },
		zoom: 13.5,
	});

	if (!isRescuer) {
		civilMode();
	} else if (isRescuer) {
		rescuerMode();
	}
}

function setFocus(location) {
	map.setCenter(location);
	map.setZoom(15);
}

function setMarker(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
	});
	marker.setMap(map);
}

function setMarkerEvac(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: '/media/3-rescue/evac.png',
	});
	marker.setMap(map);
}

function setMarkerCritical(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: '/media/3-rescue/critical.png',
	});
	marker.setMap(map);
}

function setMarkerHigh(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: '/media/3-rescue/high.png',
	});
	marker.setMap(map);
}

function setMarkerMedium(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: '/media/3-rescue/medium.png',
	});
	marker.setMap(map);
}

function setMarkerLow(location) {
	const marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: '/media/3-rescue/low.png',
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
