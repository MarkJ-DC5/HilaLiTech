let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 12.879721, lng: 121.774017 },
		zoom: 6,
	});
}

function setFocus(location) {
	map.setCenter(location);
	map.setZoom(20);
}

let marker = null;
function setMarker(location) {
	marker = new google.maps.Marker({
		position: location,
		map: map,
	});
	marker.setMap(map);
}

function setMarkerCritical(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'Markers/critical.png',
	});
	marker.setMap(map);
}

function setMarkerHigh(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'Markers/high.png',
	});
	marker.setMap(map);
}

function setMarkerMedium(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'Markers/medium.png',
	});
	marker.setMap(map);
}

function setMarkerLow(location) {
	var marker = new google.maps.Marker({
		position: location,
		map: map,
		icon: 'Markers/low.png',
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

//setMarkerCritical({ lat: 14.7724, lng: 120.9905 });
// setMarkerHigh({ lat: 14.75993, lng: 120.946922 });
// setMarkerMedium({ lat: 14.763238, lng: 120.947971 });
// setMarkerLow({ lat: 14.763728, lng: 120.952258 });

// function initMap() {
// 	  if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(
// 		  (position) => {
// 			const pos = {
// 			  lat: position.coords.latitude,
// 			  lng: position.coords.longitude,
// 			};
// 			infoWindow.setPosition(pos);
// 			infoWindow.setContent("Location found.");
// 			infoWindow.open(map);
// 			map.setCenter(pos);
// 		  },
// 		  () => {
// 			handleLocationError(true, infoWindow, map.getCenter());
// 		  }
// 		);
// 	  } else {
// 		// Browser doesn't support Geolocation
// 		handleLocationError(false, infoWindow, map.getCenter());
// 	  }
// 	});
//   }

// function initMap() {
// 	map = new google.maps.Map(document.getElementById('map'), {
// 		center: { lat: -34.397, lng: 150.644 },
// 		zoom: 6,
// 	});
// 	infoWindow = new google.maps.InfoWindow();
// 	const locationButton = document.createElement('button');
// 	locationButton.textContent = 'Pan to Current Location';
// 	locationButton.classList.add('custom-map-control-button');
// 	map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
// 	locationButton.addEventListener('click', () => {
// 		// Try HTML5 geolocation.
// 		if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(
// 				(position) => {
// 					const pos = {
// 						lat: position.coords.latitude,
// 						lng: position.coords.longitude,
// 					};
// 					infoWindow.setPosition(pos);
// 					infoWindow.setContent('Location found.');
// 					infoWindow.open(map);
// 					map.setCenter(pos);
// 					console.log(pos);
// 				},
// 				() => {
// 					handleLocationError(true, infoWindow, map.getCenter());
// 				}
// 			);
// 		} else {
// 			// Browser doesn't support Geolocation
// 			handleLocationError(false, infoWindow, map.getCenter());
// 		}
// 	});
// }
