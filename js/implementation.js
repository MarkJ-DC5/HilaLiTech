const userType = document.querySelector('#userType');
userType.addEventListener('change', function () {
	if (this.checked) {
		document.querySelector('.hero h1').innerText = 'send help';
		isRescuer = true;
		initMap();
	} else {
		document.querySelector('.hero h1').innerText = 'check help';
		isRescuer = false;
		initMap();
	}
});

function civilMode() {
	if (document.querySelector('#for-rescuers') != null) {
		document.querySelector('#for-rescuers').remove();
	}
	for (evac in evacs) {
		setMarkerEvac(evacs[evac].loc);
		createEvacCard(evacs[evac].name, evacs[evac].cap, evacs[evac].loc);
	}
	document.querySelector('#addMarker').classList.remove('hidden');
}

function rescuerMode() {
	createRescuesInfos();
	let severity = null;
	persons.forEach((person) => {
		const personLoc = person.loc;
		if (distFromRiver(personLoc) <= 0.005) {
			setMarkerCritical(personLoc);
			severity = 'critical';
		} else if (distFromRiver(personLoc) <= 0.008) {
			setMarkerHigh(personLoc);
			severity = 'high';
		} else if (distFromRiver(personLoc) <= 0.0091) {
			setMarkerMedium(personLoc);
			severity = 'medium';
		} else {
			setMarkerLow(personLoc);
			severity = 'low';
		}
		createPersonCard(
			person.name,
			person.age,
			person.remark,
			personLoc,
			severity
		);
	});

	if (isEvacsLoaded) {
		for (evac in evacs) {
			setMarkerEvac(evacs[evac].loc);
			createEvacCard(evacs[evac].name, evacs[evac].cap, evacs[evac].loc);
		}
	}

	document.querySelector('#addMarker').classList.add('hidden');
}

function createEvacCard(evacName, cap, loc) {
	const card = document.createElement('div');
	const name = document.createElement('h3');
	const bar = document.createElement('hr');
	const capacity = document.createElement('p');

	name.innerText = evacName;
	capacity.innerHTML = `<b>Capacity</b>: ${cap}`;
	card.append(name);
	card.appendChild(bar);
	card.append(capacity);
	card.classList.add('info-card');
	card.classList.add('shad-and-rad');

	card.addEventListener('click', () => {
		setFocus(loc);
	});

	document.querySelector('#evacs').appendChild(card);
	userLocation.setCoordinate();
}

function createRescuesInfos() {
	const infoContainer = document.querySelector('.info-container');
	const contH2 = document.createElement('h2');
	const contBar = document.createElement('hr');
	// const cards = document.createElement('div');
	const critical = document.createElement('div');
	const high = document.createElement('div');
	const medium = document.createElement('div');
	const low = document.createElement('div');

	contH2.innerText = "Recuee's Information";
	critical.classList.add('info-cards');
	high.classList.add('info-cards');
	medium.classList.add('info-cards');
	low.classList.add('info-cards');
	critical.id = 'critical';
	high.id = 'high';
	medium.id = 'medium';
	low.id = 'low';
	infoContainer.append(contH2);
	infoContainer.append(contBar);
	infoContainer.append(critical);
	infoContainer.append(high);
	infoContainer.append(medium);
	infoContainer.append(low);
	infoContainer.id = 'for-rescuers';
}

function createPersonCard(perName, age, remark, loc, severity) {
	const card = document.createElement('div');
	const name = document.createElement('h3');
	const bar = document.createElement('hr');
	const info = document.createElement('p');

	name.innerText = perName;
	info.innerHTML = `<b>Age</b>: ${age} <br> <b>Remarks</b>: ${remark}`;
	card.append(name);
	card.appendChild(bar);
	card.append(info);
	card.classList.add('info-card');
	card.classList.add('shad-and-rad');

	card.addEventListener('click', () => {
		setFocus(loc);
	});

	document.querySelector(`#${severity}`).appendChild(card);
}

// 	document.querySelector('#evacs').appendChild(card);
// 	userLocation.setCoordinate();
// }

const addMarker = document.querySelector('#addMarker');
addMarker.addEventListener('click', () => {
	userLocation.setCoordinate();
	setMarker(userLocation.coordinates);
	setFocus(userLocation.coordinates);
	persons.push({
		name: 'Hilali Tech',
		loc: userLocation.coordinates,
		age: 324,
		remarks: '',
	});
});
