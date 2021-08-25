# Serverless Weather App JS

Weather App coded in vanilla Javascript, which utilises the openweathermap API (data fetched using axios) and run using a netlify serverless function. 
<br>
The front end makes a request to the serverless function API, which then uses an env variable in place of the API key to make the request to the openweather API, 
thereby keeping the API key private, without having to set up a server specifically for this purpose. 
