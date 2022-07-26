'use strict';

var openweather = {},
  BASE_URL = "https://pro.openweathermap.org/data/2.5/",
  API_KEY;

async function initOpenWeather(apiKey, options) {
  
  // Setup a Counter to Track API Calls
  var profileID = Enabler.getProfileId();
  Enabler.counter("Profile: " + profileID + " api called", false)
  //

  options = options || {};  // Build Options
  options.inDevelopment = options.hasOwnProperty('inDevelopment') ? options.inDevelopment : false; // Set development option

  // Set the options in clean variables.
  var inDevelopment = options.inDevelopment
  // Set global API Key Variable
  API_KEY = apiKey;
  var zipcode = openweather.returnUserLocation(inDevelopment);
  var getCurrentConditions = "weather?zip=",
    apiUrl = BASE_URL+getCurrentConditions + zipcode + "&units=imperial&appid=" + API_KEY;

  let response = await fetch(apiUrl);

  if (response.ok) { // if HTTP-status is 200-299
    // get the response body (the method explained below)
    let json = await response.json();
    return json;
  } else {
    // Immediately throw error with the status code.
    throw new Error(response.status)
  }
  
}

openweather.returnUserLocation = function (inDevelopment) {
  var z = Enabler.getUserZipCode();
  if (z !== null) {
    return z;
  } else {
    if (inDevelopment) {
      var randomZipcode = [49341, 83301, 34997, 37918, 33569, 98290, 72650, 99722];
      return randomZipcode[Math.floor(Math.random() * randomZipcode.length)];
    } else {
      console.log("users location is not available");
      return null;
    }
  }
};