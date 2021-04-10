fetch('http://noah.up.edu.ph/api/seven_day_forecast/1623')
    .then(res => res.json())
    .then(data => console.log(data))

fetch('https://api.openweathermap.org/data/2.5/forecast?q=Marikina&appid=2024c1d37dcfec931dc53bfaded31b44')
    .then(res => res.json())
    .then(data => console.log(data))