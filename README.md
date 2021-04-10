# HilaLiTech
The contents of ‘weather_DATA’ serves as the initial back-end portion of the project, although it is not yet directly linked to the web application, its main purpose is for data retrieval currently. Hence, the python script of weather_DATA is ran separately from the web application and acts as a stand-alone back-end section.

The source code ‘weather_DATA.py’ fetches API for the 7-day weather forecast and wind speed specifically for Marikina City only when the script is ran. These data retrieved are from Project Noah  and OpenWeatherMap respectively. Fetched data is stored in dynamically created JSON files in which the retrieved data from the two API’s are stored separately. The data from Project Noah  is stored in ‘data_7day-forecast.json’ while the data from OpenWeatherMap is stored in ‘data_wind-speed.json’. 


For testing purposes:
  1. JSON files could first be deleted and the python script could be ran (on any IDE that allows it – the group utilized Visual Studio Code). 
  2. An alternative to this is viewing the test-data.html on a browser and then switching to inspect element view. 
        
        a.If the data retrieval is successful, it will be viewed and accessed in the console.  
        b. In order to prevent a CORS policy error for the GET request for Project Noah API, the browser extension for Chrome – Moesif Origin & CORS Changer                        (https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc) must be downloaded and running prior to viewing the test-data.html.
