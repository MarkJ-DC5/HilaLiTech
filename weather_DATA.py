import urllib.request
import json

API_KEY='key'


  # both reqs are obtaining data for marikina ONLY
f_openWeather = urllib.request.urlopen('https://api.openweathermap.org/data/2.5/forecast?q=Marikina&appid=2024c1d37dcfec931dc53bfaded31b44')
f_projNoah = urllib.request.urlopen('http://noah.up.edu.ph/api/seven_day_forecast/1623')

# response = urllib.request.urlopen('http://noah.up.edu.ph/api/seven_day_forecast/1623')
# data = response.read().decode('utf-8')

# file = open("data.json","w")
# file.write(data)

json_string_1 = f_openWeather.read()
json_string_2 = f_projNoah.read()

# parse json
parsed_json_1 = json.loads(json_string_1)
parsed_json_2 = json.loads(json_string_2)


# store weather data in .json file
with open('data_wind-speed.json', 'w') as outfile:
  json.dump(parsed_json_1, outfile, indent=4, sort_keys=True, separators=(",", ':'))

with open('data_forecast.json', 'w') as outfile:
  json.dump(parsed_json_2, outfile, indent=4, sort_keys=True, separators=(",", ':'))


